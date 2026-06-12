<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="grid h-screen w-full grid-rows-[auto_minmax(0,1fr)] overflow-y-hidden bg-base-200">
	<nav class="navbar bg-base-100 max-w-md mx-auto rounded-lg">
		<div class="flex-1">
			<a class="normal-case text-xl" href="/">Sport of Kings</a>
		</div>
	</nav>
	<div
		class="mx-auto flex w-full max-w-md min-h-0 flex-col items-stretch justify-center gap-4 overflow-y-auto py-2"
	>
		{@render children()}
	</div>
</div>
