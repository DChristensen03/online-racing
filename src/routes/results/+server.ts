import type { RequestHandler } from './$types';
import gameData, { type DataHorse } from '$lib/server/data/gameData';
import { RunningStyle, Surface } from '$lib/types/enums';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const { selectedHorses, racePool } = await request.json();
	const raceResults = Object.entries(gameData.races).map(([raceName, race]) => {
		const horsesInRace = racePool.filter((horse: any) => horse.race == raceName);
		const dataHorsesInRace: DataHorse[] = horsesInRace.map((horse: any) =>
			gameData.horses[raceName].find((h) => h.name === horse.name)
		);
		const results = getRaceResult(dataHorsesInRace, race);
		const chosenHorse = horsesInRace.find((horse: any) =>
			selectedHorses.some((h: any) => h.name === horse.name)
		);
		const chosenResult = results.find((result) => result.name === chosenHorse?.name);
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
	const totalScore = raceResults.reduce(
		(acc, { results }) => acc + getMaxRacePoints(results.length),
		0
	);

	return json({ raceResults, score, totalScore });
};

const getMaxRacePoints = (participantCount: number) => {
	return (participantCount * (participantCount + 1)) / 2;
};

const getRaceResult = (
	horses: DataHorse[],
	race: { distance: string; surface: Surface; distanceFurlongs: number }
) => {
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
		const surfaceAbility = race.surface === Surface.Turf ? horse.turfAbility : horse.dirtAbility;
		const styleCount = styleCounts.get(horse.runningStyle) ?? horses.length;
		const paceBoost = 0.3 / styleCount;
		const score =
			horse.speed * speedWeight + horse.stamina * staminaWeight + surfaceAbility * 0.5 + paceBoost;
		return { horse, score };
	});
	const sorted = raceScores.sort((a, b) => b.score - a.score);
	// return name and finish position of each horse in sorted
	return sorted.map((result, index) => ({ name: result.horse.name, finishPosition: index + 1 }));
};
