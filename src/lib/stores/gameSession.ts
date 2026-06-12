import { writable, type Writable } from 'svelte/store';

const gameSession: Writable<{ difficulty: number; selectedHorses: any[]; racePool: any[] }> =
	writable();
export default gameSession;
