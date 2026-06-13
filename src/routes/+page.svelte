<script lang="ts">
	import { goto } from '$app/navigation';
	import { clearGameSession } from '$lib/stores/gameSession';

	let difficulty = $state('Easy');
	let startYear = 1984;

	const startGame = () => {
		clearGameSession();
		goto(`/${difficulty.toLowerCase()}?startYear=${startYear}`);
	};
</script>

<div class="flex flex-col h-full justify-center">
	<h1 class="text-base-content text-center text-4xl mb-8">Grade One Winner</h1>
	<p class="text-base-content/80 text-center mx-auto mb-6 max-w-sm px-3">
		A knowledge game built to test your horse racing knowledge, choose some of the best horses,
		jockeys, and trainers of all-time.
	</p>
	<div id="difficulty " class="mx-auto mb-4">
		<div class="join outline outline-primary rounded-md">
			<button
				class="btn btn-lg btn-soft btn-primary join-item {difficulty === 'Easy'
					? 'btn-outline'
					: ''}"
				onclick={() => (difficulty = 'Easy')}>Easy</button
			>
			<button
				class="btn btn-lg btn-soft btn-primary join-item {difficulty === 'Medium'
					? 'btn-outline'
					: ''}"
				onclick={() => (difficulty = 'Medium')}>Medium</button
			>
			<button
				class="btn btn-lg btn-soft btn-primary join-item {difficulty === 'Hard'
					? 'btn-outline'
					: ''}"
				onclick={() => (difficulty = 'Hard')}>Hard</button
			>
		</div>
	</div>
	<div id="era" class="mx-auto mb-4">
		<select class="select select-lg rounded-lg text-xl">
			<option selected onselect={() => (startYear = 1984)}>All Time</option>
			<option onselect={() => (startYear = 2010)}>2010 to Present</option>
			<option onselect={() => (startYear = 2000)}>2000 to Present</option>
			<option onselect={() => (startYear = 1990)}>1990 to Present</option>
			<option onselect={() => (startYear = 1980)}>1980 to Present</option>
		</select>
	</div>
	<div class="flex flex-col items-center gap-4">
		<button class="btn btn-lg btn-secondary w-42" onclick={startGame}>Start</button>
		<button
			onclick={() => window.open('https://buymeacoffee.com/crdc', '_blank')}
			class="btn btn-lg btn-primary btn-outline w-42">Buy Me a Coffee</button
		>
	</div>
	<div id="spacer" class="h-72"></div>
</div>
