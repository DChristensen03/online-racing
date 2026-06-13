import type { RequestHandler } from './$types';
import gameData, { type DataHorse } from '$lib/server/data/gameData';
import { RunningStyle, Surface } from '$lib/types/enums';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const { selectedHorses, racePool, jockey, trainer } = await request.json();
	const raceResults = Object.entries(gameData.races).map(([raceName, race]) => {
		const horsesInRace = racePool.filter((horse: any) => horse.race == raceName);
		const dataHorsesInRace: DataHorse[] = horsesInRace.map((horse: any) =>
			gameData.horses[raceName].find((h) => h.name === horse.name && h.year === horse.year)
		);
		const playerJockey = gameData.jockeys.find((j) => j.name === jockey?.name);
		const playerTrainer = gameData.trainers.find((t) => t.name === trainer?.name);
		const chosenHorse = horsesInRace.find((horse: any) =>
			selectedHorses.some((h: any) => h.name === horse.name && h.year === horse.year)
		);
		if (!playerJockey || !playerTrainer) {
			throw new Error('Invalid jockey or trainer');
		}
		const results = getRaceResult(
			dataHorsesInRace,
			race,
			playerJockey,
			playerTrainer,
			chosenHorse?.name,
			chosenHorse?.year
		);
		const chosenResult = results.find(
			(result) => result.name === chosenHorse?.name && result.year === chosenHorse?.year
		);
		const points = chosenResult ? results.length - chosenResult.finishPosition + 1 : 0;

		return {
			raceName,
			race,
			results,
			points,
			playerHorse: chosenHorse
		};
	});

	const score = raceResults.reduce((acc, { points }) => acc + points, 0);
	const totalScore = raceResults.reduce((acc, { results }) => acc + results.length, 0);

	return json({ raceResults, score, totalScore });
};

const getRaceResult = (
	horses: DataHorse[],
	race: { distance: string; surface: Surface; distanceFurlongs: number },
	playerJockey: {
		name: string;
		turfAbility: number;
		dirtAbility: number;
		speedAbility: number;
		staminaAbility: number;
	},
	playerTrainer: {
		name: string;
		turfAbility: number;
		dirtAbility: number;
		speedAbility: number;
		staminaAbility: number;
	},
	playerHorseName?: string,
	playerHorseYear?: number
) => {
	const getStatModifier = (stat: number) => 1 + (stat - 90) / 200;
	const getCombinedModifier = (trainerStat: number, jockeyStat: number) =>
		(getStatModifier(trainerStat) + getStatModifier(jockeyStat)) / 2;

	const styleCounts = new Map<RunningStyle, number>([
		[
			RunningStyle.FrontRunner,
			horses.filter((horse) => horse.runningStyle === RunningStyle.FrontRunner).length
		],
		[
			RunningStyle.Stalker,
			horses.filter((horse) => horse.runningStyle === RunningStyle.Stalker).length
		],
		[
			RunningStyle.MidPack,
			horses.filter((horse) => horse.runningStyle === RunningStyle.MidPack).length
		],
		[
			RunningStyle.Closer,
			horses.filter((horse) => horse.runningStyle === RunningStyle.Closer).length
		]
	]);

	const raceScores = horses.map((horse: DataHorse) => {
		// Each horse has speed, stamina, and turf/dirtAbility. Use these to create a score where shorter distance furlongs relies almost solely on speed and longer almost solely on stamina. Minimum distance 4 furlings maximum 16 furlongs
		const distanceFurlongs = race.distanceFurlongs;
		const speedWeight = Math.max(0, 1 - (distanceFurlongs - 4) / 12);
		const staminaWeight = Math.max(0, (distanceFurlongs - 4) / 12);
		const isPlayerHorse = horse.name === playerHorseName && horse.year === playerHorseYear;
		const surfaceAbility = race.surface === Surface.Turf ? horse.turfAbility : horse.dirtAbility;
		const adjustedSpeed = isPlayerHorse
			? horse.speed * getCombinedModifier(playerTrainer.speedAbility, playerJockey.speedAbility)
			: horse.speed;
		const adjustedStamina = isPlayerHorse
			? horse.stamina *
				getCombinedModifier(playerTrainer.staminaAbility, playerJockey.staminaAbility)
			: horse.stamina;
		const adjustedSurfaceAbility = isPlayerHorse
			? surfaceAbility *
				getCombinedModifier(
					race.surface === Surface.Turf ? playerTrainer.turfAbility : playerTrainer.dirtAbility,
					race.surface === Surface.Turf ? playerJockey.turfAbility : playerJockey.dirtAbility
				)
			: surfaceAbility;
		const styleCount = styleCounts.get(horse.runningStyle) ?? horses.length;
		const paceBoost = 0.3 / styleCount;
		const score =
			adjustedSpeed * speedWeight +
			adjustedStamina * staminaWeight +
			adjustedSurfaceAbility * 0.5 +
			paceBoost;
		return { horse, score };
	});
	const sorted = raceScores.sort((a, b) => b.score - a.score);
	// return name, year, and finish position of each horse in sorted
	return sorted.map((result, index) => ({
		name: result.horse.name,
		year: result.horse.year,
		finishPosition: index + 1
	}));
};
