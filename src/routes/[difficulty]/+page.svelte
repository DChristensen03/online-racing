<script lang="ts">
	import { goto } from '$app/navigation';
	import gameSession from '$lib/stores/gameSession';
	import { RunningStyle } from '$lib/types/enums';
	import type { PageProps } from './$types';

	type SelectionOption = {
		name: string;
		race?: string;
		year?: number;
		finishPosition?: number;
		runningStyle?: RunningStyle;
		turfAbility?: number;
		dirtAbility?: number;
		speedAbility?: number;
		staminaAbility?: number;
	};

	let { data }: PageProps = $props();
	let { rounds, difficultyAsInt, races, jockeys, trainers } = $derived(data);

	let selectionStep = $state(0);
	let selectedTrainer = $state<SelectionOption | null>(null);
	let selectedJockey = $state<SelectionOption | null>(null);
	let selectedHorses: SelectionOption[] = $state([]);
	let activeRound = $derived(
		selectionStep === 0 ? trainers : selectionStep === 1 ? jockeys : rounds[selectionStep - 2]
	);
	let activeSelectionLabel = $derived(
		selectionStep === 0 ? 'Trainer' : selectionStep === 1 ? 'Jockey' : 'Horse'
	);

	const chooseSelection = (selectedOption: SelectionOption) => {
		if (selectionStep === 0) {
			selectedTrainer = selectedOption;
		} else if (selectionStep === 1) {
			selectedJockey = selectedOption;
		} else {
			selectedHorses.push(selectedOption);
		}

		if (selectionStep < rounds.length + 1) {
			selectionStep += 1;
		} else {
			gameSession.set({
				difficulty: data.difficultyAsInt,
				selectedTrainer,
				selectedJockey,
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

<div class="mb-2 text-sm text-gray-600 text-center grid grid-cols-2 gap-2">
	<div>
		<span class="font-medium text-base-content">Trainer:</span>
		<span class="text-primary">{selectedTrainer?.name || '—'}</span>
	</div>
	<div>
		<span class="font-medium text-base-content">Jockey:</span>
		<span class="text-primary">{selectedJockey?.name || '—'}</span>
	</div>
</div>

<div class="flex flex-wrap justify-center gap-2">
	{#each Object.entries(races) as [raceName, race]}
		{@const selectedHorse = selectedHorses.find((h) => h.race === raceName)}
		<div class="w-[calc((100%-1rem)/3)] bg-base-200 rounded-lg text-center">
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

{#if selectionStep < 2}
	<div class="w-full overflow-x-auto">
		<table class="table-xs table min-w-max">
			<thead>
				<tr>
					<th>{activeSelectionLabel}</th>
					<th>Year</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{#each activeRound as person}
					<tr class="row-hover">
						<td class="text-primary">{person.name}</td>
						<td>{person.year}</td>
						<td>
							<button class="btn btn-sm btn-primary" onclick={() => chooseSelection(person)}
								>✔</button
							>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{:else}
	<div class="w-full overflow-x-auto">
		<table class="table-xs table min-w-max">
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
								onclick={() => chooseSelection(horse)}
								disabled={Boolean(raceSelected)}>✔</button
							>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
