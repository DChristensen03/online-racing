import type { PageServerLoad } from './$types';
import gameData from '$lib/server/data/gameData';

export const load = (async ({ params }) => {
	const horsesByRace = { ...gameData.horses };
	// Randomly grab 2 horses from each race for each round, The new object will be an array of arrays with 2 horses from each race and one round per race.
	// e.g. 8 races is 8 arrays each with 16 horses
	const numRaces = Object.keys(horsesByRace).length;
	const availableHorsesByRace: Record<string, any[]> = Object.fromEntries(
		Object.entries(horsesByRace).map(([raceName, horses]) => [raceName, [...(horses as any[])]])
	);
	const usedHorseNames = new Set<string>();
	let rounds = [];
	for (let roundIndex = 0; roundIndex < numRaces; roundIndex++) {
		let roundHorses: any[] = [];
		Object.entries(availableHorsesByRace).forEach(([raceName, horses]) => {
			const shuffledHorses = [...horses].sort(() => 0.5 - Math.random());
			const uniqueAvailableHorses = shuffledHorses.filter(
				(horse) => !usedHorseNames.has(horse.name)
			);
			const horsesToUse = uniqueAvailableHorses.slice(0, 2);
			horsesToUse.forEach((horse) => usedHorseNames.add(horse.name));
			availableHorsesByRace[raceName] = shuffledHorses.filter(
				(horse) => !usedHorseNames.has(horse.name)
			);
			roundHorses.push(
				...horsesToUse.map((horse) => ({
					race: raceName,
					name: horse.name,
					runningStyle: horse.runningStyle,
					year: horse.year,
					finishPosition: horse.finishPosition
				}))
			);
		});
		// Sort each round alphabetically by horse name
		roundHorses.sort((a, b) => {
			if (a.name < b.name) return -1;
			if (a.name > b.name) return 1;
			return 0;
		});
		rounds.push(roundHorses);
	}
	return {
		rounds,
		difficultyAsInt: params.difficulty === 'easy' ? 1 : params.difficulty === 'medium' ? 2 : 3,
		races: gameData.races
	};
}) satisfies PageServerLoad;
