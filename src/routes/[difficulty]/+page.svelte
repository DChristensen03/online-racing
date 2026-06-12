<script lang="ts">
	import { goto } from '$app/navigation';
	import gameSession from '$lib/stores/gameSession';
	import { RunningStyle, Surface } from '$lib/types/enums';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let { rounds, difficultyAsInt, races } = $derived(data);

	let activeRound = $derived(rounds[0]);
	let selectedHorses: any[] = $state([]);

	const chooseHorse = (selectedHorse: any) => {
		selectedHorses.push(selectedHorse);
		if (rounds.indexOf(activeRound) < rounds.length - 1) {
			activeRound = rounds[rounds.indexOf(activeRound) + 1];
		} else {
			gameSession.set({
				difficulty: data.difficultyAsInt,
				selectedHorses: selectedHorses,
				racePool: rounds
			});
			goto('/results');
		}
	};

	const formatRunningStyle = (style: RunningStyle) => {
		switch (style) {
			case RunningStyle.FrontRunner:
				return '▶▶▶▶';
			case RunningStyle.Stalker:
				return '▶▶▶▷';
			case RunningStyle.MidPack:
				return '▶▶▷▷';
			case RunningStyle.Closer:
				return '▶▷▷▷';
		}
	};
</script>

<div class="grid grid-cols-3 gap-2">
	{#each Object.entries(races) as [raceName, race]}
		{@const selectedHorse = selectedHorses.find((h) => h.race === raceName)}
		<div class="bg-base-200 rounded-lg text-center">
			<h3 class="font-semibold text-sm">{raceName}</h3>
			<div class="text-xs text-gray-600 space-y-0.5">
				<p>{race.surface.toString()} • {race.distance}</p>
				<p class={selectedHorse ? 'text-primary font-medium' : 'text-gray-500'}>
					{selectedHorse?.name || '—'}
				</p>
			</div>
		</div>
	{/each}
</div>

<div class="w-full overflow-x-auto">
	<table class="table-xs table">
		<thead>
			<tr>
				<th>Horse</th>
				<th>Race</th>
				<th>Year</th>
				{#if difficultyAsInt < 3}
					<th>Finish</th>
				{/if}
				{#if difficultyAsInt < 2}
					<th>Style</th>
				{/if}
				<th></th>
			</tr>
		</thead>
		<tbody>
			{#each activeRound as horse}
				{@const raceSelected = selectedHorses.find((h) => h.race === horse.race)}
				<tr class="row-hover {raceSelected ? 'opacity-50' : ''}">
					<td class="text-primary">{horse.name}</td>
					<td>{horse.race}</td>
					<td>{horse.year}</td>
					{#if difficultyAsInt < 3}
						<td>{horse.finishPosition}</td>
					{/if}
					{#if difficultyAsInt < 2}
						<td>{formatRunningStyle(horse.runningStyle)}</td>
					{/if}
					<td>
						<button
							class="btn btn-sm btn-primary"
							onclick={() => chooseHorse(horse)}
							disabled={raceSelected}>✔</button
						>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
