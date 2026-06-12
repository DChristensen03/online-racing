import { browser } from '$app/environment';
import { writable, type Updater, type Writable } from 'svelte/store';

const GAME_SESSION_STORAGE_KEY = 'gameSession';

export type GameSession = {
	difficulty: number;
	selectedTrainer?: { name: string } | null;
	selectedJockey?: { name: string } | null;
	selectedHorses: any[];
	racePool: any[];
};

const getInitialGameSession = (): GameSession | undefined => {
	if (!browser) {
		return undefined;
	}

	const raw = sessionStorage.getItem(GAME_SESSION_STORAGE_KEY);
	if (!raw) {
		return undefined;
	}

	try {
		return JSON.parse(raw) as GameSession;
	} catch {
		sessionStorage.removeItem(GAME_SESSION_STORAGE_KEY);
		return undefined;
	}
};

const writeGameSessionToStorage = (value: GameSession | undefined) => {
	if (!browser) {
		return;
	}

	if (value === undefined) {
		sessionStorage.removeItem(GAME_SESSION_STORAGE_KEY);
		return;
	}

	sessionStorage.setItem(GAME_SESSION_STORAGE_KEY, JSON.stringify(value));
};

const baseStore = writable<GameSession | undefined>(getInitialGameSession());

const set = (value: GameSession | undefined) => {
	writeGameSessionToStorage(value);
	baseStore.set(value);
};

const update = (updater: Updater<GameSession | undefined>) => {
	baseStore.update((current) => {
		const next = updater(current);
		writeGameSessionToStorage(next);
		return next;
	});
};

const gameSession: Writable<GameSession | undefined> = {
	subscribe: baseStore.subscribe,
	set,
	update
};

export const clearGameSession = () => set(undefined);

export default gameSession;
