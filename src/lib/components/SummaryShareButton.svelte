<script lang="ts">
	import { toBlob } from 'html-to-image';

	type Props = {
		target: HTMLElement | null;
		fileName?: string;
	};

	let { target, fileName = 'online-racing-scorecard.png' }: Props = $props();

	let isBusy = $state(false);
	let errorMessage = $state('');

	const downloadBlob = (blob: Blob) => {
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.download = fileName;
		link.click();
		URL.revokeObjectURL(url);
	};

	const captureSummary = async () => {
		if (!target) {
			throw new Error('Summary card not available yet.');
		}

		const rect = target.getBoundingClientRect();
		const captureRoot = document.createElement('div');
		captureRoot.style.position = 'fixed';
		captureRoot.style.left = '-100000px';
		captureRoot.style.top = '0';
		captureRoot.style.padding = '12px';
		captureRoot.style.zIndex = '-1';
		captureRoot.style.pointerEvents = 'none';

		const clone = target.cloneNode(true) as HTMLElement;
		clone.style.width = `${Math.ceil(rect.width)}px`;
		clone.style.height = 'auto';
		clone.style.maxHeight = 'none';
		clone.style.minHeight = 'auto';
		clone.style.overflow = 'visible';

		for (const node of clone.querySelectorAll<HTMLElement>('*')) {
			const computed = getComputedStyle(node);
			const className = typeof node.className === 'string' ? node.className : '';
			const hasScrollOverflow =
				computed.overflowY === 'auto' ||
				computed.overflowY === 'scroll' ||
				computed.overflow === 'auto' ||
				computed.overflow === 'scroll' ||
				className.includes('overflow-y-auto') ||
				className.includes('overflow-auto') ||
				className.includes('overflow-scroll');

			if (hasScrollOverflow) {
				node.style.overflowY = 'visible';
				node.style.overflowX = 'visible';
				node.style.overflow = 'visible';
				node.style.maxHeight = 'none';
				node.style.height = 'auto';
				node.style.minHeight = 'auto';
			}
		}

		captureRoot.appendChild(clone);
		document.body.appendChild(captureRoot);

		try {
			const blob = await toBlob(clone, {
				cacheBust: true,
				pixelRatio: 2
			});

			if (!blob) {
				throw new Error('Unable to capture summary image.');
			}

			return blob;
		} finally {
			captureRoot.remove();
		}
	};

	const shareSummary = async () => {
		isBusy = true;
		errorMessage = '';

		try {
			const blob = await captureSummary();
			const file = new File([blob], fileName, { type: 'image/png' });

			if (
				typeof navigator !== 'undefined' &&
				'navigator' in globalThis &&
				'share' in navigator &&
				typeof navigator.canShare === 'function' &&
				navigator.canShare({ files: [file] })
			) {
				await navigator.share({
					title: 'Online Racing Scorecard',
					text: 'My final race scorecard',
					files: [file]
				});
			} else {
				downloadBlob(blob);
			}
		} catch (error) {
			if (error instanceof Error && error.name === 'AbortError') {
				return;
			}
			errorMessage = 'Sharing failed. Try again.';
		} finally {
			isBusy = false;
		}
	};
</script>

<div class="flex flex-col items-end gap-1">
	<button
		class="btn btn-secondary btn-sm"
		onclick={shareSummary}
		disabled={!target || isBusy}
		aria-label="Share summary card"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 512 512" fill="none"
			><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path
				fill="rgb(255, 255, 255)"
				d="M307.8 18.4c-12 5-19.8 16.6-19.8 29.6l0 80-112 0c-97.2 0-176 78.8-176 176 0 113.3 81.5 163.9 100.2 174.1 2.5 1.4 5.3 1.9 8.1 1.9 10.9 0 19.7-8.9 19.7-19.7 0-7.5-4.3-14.4-9.8-19.5-9.4-8.8-22.2-26.4-22.2-56.7 0-53 43-96 96-96l96 0 0 80c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-9.2-9.2-22.9-11.9-34.9-6.9z"
			/></svg
		>
	</button>
	{#if errorMessage}
		<p class="text-error text-[11px]">{errorMessage}</p>
	{/if}
</div>
