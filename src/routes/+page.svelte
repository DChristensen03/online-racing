<script lang="ts">
	import { goto } from '$app/navigation';

	let difficulty = $state('Easy');
</script>

<h1 class="text-base-content text-center text-4xl">The Sport of Kings</h1>
<div id="difficulty">
	<div class="join outline outline-primary rounded-md">
		<button
			class="btn btn-lg btn-soft btn-primary join-item {difficulty === 'Easy' ? 'btn-outline' : ''}"
			onclick={() => (difficulty = 'Easy')}>Easy</button
		>
		<button
			class="btn btn-lg btn-soft btn-primary join-item {difficulty === 'Medium'
				? 'btn-outline'
				: ''}"
			onclick={() => (difficulty = 'Medium')}>Medium</button
		>
		<button
			class="btn btn-lg btn-soft btn-primary join-item {difficulty === 'Hard' ? 'btn-outline' : ''}"
			onclick={() => (difficulty = 'Hard')}>Hard</button
		>
	</div>
</div>
<div class="flex flex-col items-center gap-4">
	<button class="btn btn-lg btn-secondary" onclick={() => goto(`/${difficulty.toLowerCase()}`)}
		>Start</button
	>
</div>
