<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Grade One Winner | Horse Racing Knowledge Quiz Game</title>
	<meta
		name="description"
		content="Grade One Winner is a horse racing quiz game where you test your knowledge of top racehorses across multiple difficulty levels."
	/>
	<meta
		name="keywords"
		content="horse racing game, horse racing quiz, racing trivia, thoroughbred racing, Grade One Winner"
	/>
	<meta property="og:title" content="Grade One Winner | Horse Racing Knowledge Quiz Game" />
	<meta
		property="og:description"
		content="Test your horse racing knowledge by identifying top racehorses in a fast and fun quiz format."
	/>
	<meta property="og:type" content="website" />
</svelte:head>
<div class="grid h-screen w-full grid-rows-[auto_minmax(0,1fr)] overflow-y-hidden bg-base-200">
	<nav class="navbar bg-base-100 max-w-md mx-auto rounded-lg">
		<div class="flex-1">
			<a class="normal-case text-xl" href="/">Grade One Winner</a>
		</div>
	</nav>
	<div
		class="mx-auto flex w-full max-w-md min-h-0 flex-col items-stretch justify-start gap-4 overflow-y-auto py-2"
	>
		{@render children()}
	</div>
</div>
