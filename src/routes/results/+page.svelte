<script lang="ts">
	import { flip } from 'svelte/animate';
	import SummaryShareButton from '$lib/components/SummaryShareButton.svelte';
	import gameSession from '$lib/stores/gameSession';
	import { onDestroy, onMount, tick } from 'svelte';
	import { goto } from '$app/navigation';

	type RaceFromServer = {
		raceName: string;
		race: { distance: string; surface: string };
		results: { name: string; finishPosition: number }[];
		points: number;
		playerHorse?: { name: string };
	};

	type HorseResult = {
		name: string;
		finishPosition: number;
		playerHorse: boolean;
	};

	type RaceReveal = {
		raceName: string;
		distance: string;
		surface: string;
		points: number;
		horses: HorseResult[];
	};

	type RaceSummary = {
		raceName: string;
		chosenHorse: string;
		finishPosition: number;
		points: number;
		totalHorses: number;
	};

	const SHUFFLE_DURATION_MS = 3000;
	const SHUFFLE_INTERVAL_MS = 1000;
	const SHUFFLE_STEPS = SHUFFLE_DURATION_MS / SHUFFLE_INTERVAL_MS;
	const SHUFFLE_UPDATES = SHUFFLE_STEPS + 1;

	let raceReveals: RaceReveal[] = $state([]);
	let displayRace: RaceReveal | null = $state(null);
	let activeRaceIndex = $state(0);
	let isLoading = $state(true);
	let isShuffling = $state(false);
	let shuffleTick = $state(0);
	let shuffleCount = $state(0);
	let raceRevealComplete = $state(false);
	let showSummary = $state(false);
	let errorMessage = $state('');
	let serverScore = $state(0);
	let serverTotalScore = $state(0);
	let shuffleInterval: ReturnType<typeof setInterval> | undefined;
	let revealTimeout: ReturnType<typeof setTimeout> | undefined;
	let summaryCardEl: HTMLDivElement | null = $state(null);

	let hasMoreRaces = $derived(activeRaceIndex < raceReveals.length - 1);
	let raceSummaries = $derived(
		raceReveals.map((race) => {
			const chosenHorse = race.horses.find((horse) => horse.playerHorse);
			const totalHorses = race.horses.length;
			const finishPosition = chosenHorse?.finishPosition ?? 0;

			return {
				raceName: race.raceName,
				chosenHorse: chosenHorse?.name ?? '—',
				finishPosition,
				points: race.points,
				totalHorses
			} satisfies RaceSummary;
		})
	);

	const getPlacementBarStyle = (finishPosition: number, totalHorses: number) => {
		if (!totalHorses) {
			return '';
		}

		if (totalHorses <= 2) {
			const hue = finishPosition === 1 ? 120 : 0;
			return `width: ${((totalHorses - finishPosition + 1) / totalHorses) * 100}%; background-image: linear-gradient(90deg, hsl(${hue} 78% 24%), hsl(${hue} 72% 18%));`;
		}

		const clamped = Math.min(Math.max(finishPosition, 1), totalHorses);
		const normalized = 1 - (clamped - 1) / (totalHorses - 2);
		const hue = Math.max(0, Math.min(120, normalized * 120));
		const startLightness = 24;
		const endLightness = 18;

		return `width: ${((totalHorses - clamped + 1) / totalHorses) * 100}%; background-image: linear-gradient(90deg, hsl(${hue} 78% ${startLightness}%), hsl(${hue} 72% ${endLightness}%));`;
	};

	const getTotalPointsBarStyle = (points: number, maxPoints: number) => {
		if (!maxPoints) {
			return '';
		}

		const clamped = Math.min(Math.max(points, 0), maxPoints);
		const normalized = clamped / maxPoints;
		const hue = normalized * 120;

		return `width: ${normalized * 100}%; background-image: linear-gradient(90deg, hsl(${hue} 78% 24%), hsl(${hue} 72% 18%));`;
	};

	const shuffleArray = <T,>(items: T[]): T[] => {
		const arr = [...items];
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	};

	const stopShuffle = () => {
		if (shuffleInterval) {
			clearInterval(shuffleInterval);
			shuffleInterval = undefined;
		}

		if (revealTimeout) {
			clearTimeout(revealTimeout);
			revealTimeout = undefined;
		}
	};

	const startShuffle = async (raceIndex: number) => {
		const race = raceReveals[raceIndex];
		if (!race) return;

		stopShuffle();
		shuffleTick = 0;
		shuffleCount = 1;
		isShuffling = true;
		raceRevealComplete = false;
		showSummary = false;

		const shuffledAtStart = shuffleArray(race.horses);
		displayRace = {
			...race,
			horses: shuffledAtStart
		};

		activeRaceIndex = raceIndex;

		// Force an immediate second layout pass so the first shuffle has visible FLIP motion.
		await tick();
		displayRace = {
			...race,
			horses: [...race.horses]
		};

		shuffleInterval = setInterval(() => {
			if (shuffleCount >= SHUFFLE_UPDATES) {
				return;
			}

			shuffleTick += 1;
			shuffleCount += 1;

			displayRace = ((current) => {
				if (!current) return current;
				return {
					...current,
					horses: shuffleArray(current.horses)
				};
			})(displayRace);

			if (shuffleCount >= SHUFFLE_UPDATES) {
				stopShuffle();
				revealTimeout = setTimeout(() => {
					displayRace = {
						...race,
						horses: [...race.horses].sort((a, b) => a.finishPosition - b.finishPosition)
					};
					isShuffling = false;
					raceRevealComplete = true;
					revealTimeout = undefined;
				}, 120);
			}
		}, SHUFFLE_INTERVAL_MS);
	};

	const goToNextRace = () => {
		if (hasMoreRaces) {
			startShuffle(activeRaceIndex + 1);
			return;
		}

		showSummary = true;
	};

	onMount(async () => {
		if (!$gameSession?.selectedHorses?.length || !$gameSession?.racePool?.length) {
			errorMessage = 'Session data missing. Start a race to see results.';
			isLoading = false;
			return;
		}

		try {
			const result = await fetch('/results', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					difficulty: $gameSession.difficulty,
					selectedHorses: $gameSession.selectedHorses,
					racePool: $gameSession.racePool.flatMap((round) => round),
					jockey: $gameSession.selectedJockey,
					trainer: $gameSession.selectedTrainer
				})
			});

			if (!result.ok) {
				throw new Error('Could not load race results.');
			}

			const data: { raceResults: RaceFromServer[]; score: number; totalScore: number } =
				await result.json();
			serverScore = data.score;
			serverTotalScore = data.totalScore;
			raceReveals = data.raceResults.map((raceObj) => {
				const finalHorses: HorseResult[] = raceObj.results
					.map((horse) => ({
						name: horse.name,
						finishPosition: horse.finishPosition,
						playerHorse: horse.name === raceObj.playerHorse?.name
					}))
					.sort((a, b) => a.finishPosition - b.finishPosition);

				return {
					raceName: raceObj.raceName,
					distance: raceObj.race.distance,
					surface: raceObj.race.surface,
					points: raceObj.points,
					horses: finalHorses
				};
			});

			startShuffle(0);
		} catch (error) {
			errorMessage = error instanceof Error ? error.message : 'Unknown error loading results.';
		} finally {
			isLoading = false;
		}
	});

	onDestroy(() => {
		stopShuffle();
	});
</script>

<div class="mx-auto flex min-h-0 w-full flex-col gap-2">
	{#if isLoading}
		<div class="alert alert-info">
			<span class="loading loading-spinner loading-sm"></span>
			<span>Loading race results...</span>
		</div>
	{:else if errorMessage}
		<div class="alert alert-error">
			<span>{errorMessage}</span>
		</div>
	{:else}
		{#if displayRace && !showSummary}
			<div class="card border-base-300 bg-base-100 border shadow min-h-0">
				<div class="card-body flex min-h-0 flex-1 flex-col">
					<div class="flex items-start justify-between gap-3">
						<div>
							<h2 class="card-title">{displayRace.raceName}</h2>
							<p class="text-base-content/70 text-sm">
								{displayRace.surface} • {displayRace.distance}
							</p>
						</div>
					</div>
					<div class="min-h-0 flex-1 overflow-y-auto">
						<ul class="mt-3 space-y-1">
							{#each displayRace.horses as horse, index (horse.name)}
								<li
									animate:flip={{ duration: 650 }}
									class="bg-base-200 flex items-center justify-between rounded-lg p-1 transition-all duration-500"
								>
									<div class="flex items-center gap-1">
										<span class="badge badge-neutral badge-xs p-1">{index + 1}</span>
										<span
											class="text-base-content font-semibold text-xs {horse.playerHorse
												? 'text-primary'
												: ''}">{horse.name}</span
										>
										{#if horse.playerHorse}
											<span class="badge badge-primary badge-xs">Player</span>
										{/if}
									</div>
									<span class="text-base-content/60 text-xs"
										>#{isShuffling ? index + 1 : horse.finishPosition}</span
									>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		{/if}

		{#if !showSummary}
			<div class="flex justify-end px-4">
				<button
					class="btn btn-primary btn-circle btn-lg"
					onclick={goToNextRace}
					aria-label="Continue"
				>
					<span class="text-xl">→</span>
				</button>
			</div>
		{:else}
			<div class="card border-base-300 bg-base-100 border shadow min-h-0" bind:this={summaryCardEl}>
				<div class="card-body flex min-h-0 flex-1 flex-col gap-3 p-4">
					<div class="flex items-center justify-between gap-2">
						<div>
							<h2 class="card-title text-lg">Final Scorecard</h2>
							<p class="text-base-content/60 text-xs">Each pick, place, and payout</p>
						</div>
						<SummaryShareButton target={summaryCardEl} />
					</div>

					<div class="min-h-0 flex-1 space-y-2 overflow-y-auto pr-1">
						{#each raceSummaries as race (race.raceName)}
							<div class="bg-base-200 rounded-box p-2">
								<div class="flex items-center justify-between gap-2">
									<div class="min-w-0">
										<p class="truncate text-xs font-semibold">{race.raceName}</p>
										<p class="text-base-content/60 truncate text-[11px]">
											Picked <span class="text-primary">{race.chosenHorse}</span> • Place {race.finishPosition}
											/ {race.totalHorses}
										</p>
									</div>
									<div class="badge badge-neutral badge-xs">
										{race.finishPosition}/{race.totalHorses}
									</div>
								</div>
								<div class="mt-2 h-2 w-full overflow-hidden rounded-full bg-base-300">
									<div
										class="h-full rounded-full transition-all duration-300"
										style={getPlacementBarStyle(race.finishPosition, race.totalHorses)}
									></div>
								</div>
							</div>
						{/each}
					</div>

					<div class="divider my-1"></div>
					<div class="flex flex-row justify-around">
						<div>
							<span class="font-medium text-base-content">Trainer:</span>
							<span class="text-primary">{$gameSession.selectedTrainer?.name || '—'}</span>
						</div>
						<div>
							<span class="font-medium text-base-content">Jockey:</span>
							<span class="text-primary">{$gameSession.selectedJockey?.name || '—'}</span>
						</div>
					</div>
					<div class="space-y-2 flex flex-row gap-2">
						<div class="flex flex-col w-full">
							<div class="flex items-center justify-between text-sm">
								<span class="text-base-content/70">Total points</span>
								<span class="font-semibold">{serverScore} / {serverTotalScore}</span>
							</div>
							<div class="h-2 w-full overflow-hidden rounded-full bg-base-300">
								<div
									class="h-full rounded-full transition-all duration-300"
									style={getTotalPointsBarStyle(serverScore, serverTotalScore)}
								></div>
							</div>
						</div>
						<button
							class="btn btn-primary btn-circle btn-lg"
							onclick={() => goto('/')}
							aria-label="Restart"
						>
							<span class="text-xl">⟳</span>
						</button>
					</div>
				</div>
			</div>
		{/if}
	{/if}
</div>
