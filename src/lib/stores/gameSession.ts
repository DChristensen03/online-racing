import { writable, type Writable } from 'svelte/store';

const gameSession: Writable<{
	difficulty: number;
	selectedTrainer?: { name: string } | null;
	selectedJockey?: { name: string } | null;
	selectedHorses: any[];
	racePool: any[];
}> = writable();
export default gameSession;
