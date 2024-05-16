<script lang="ts">
	import type { PageData } from './$types';
	import MerchCard from '$lib/components/MerchCard.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Hololive Fan Booth - Merch</title>
	<meta name="description" content="Merch available at the booth for purchase, and as prizes" />
</svelte:head>

<section class="mx-auto mt-6 space-y-12 px-6 xl:max-w-5xl">
	<h1 class="text-center font-geologica text-8xl font-extrabold tracking-tighter text-primary">
		Merch
	</h1>
	<section class="prose items-center text-xl">
		<p class="font-geologica text-secondary">
			Here you can find all the merch available at the booth for purchase, and as prizes.
		</p>
		<p class="font-geologica text-secondary">Click on the items to view more details.</p>
	</section>

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" id="merch-grid-container">
		<!-- Your content here -->
		{#each data.merch as merch}
			<MerchCard {merch} />
		{:else}
			Nothing found...
		{/each}
	</div>

	<section class="flex justify-center" id="pagination">
		<div class="join">
			{#each { length: data.totalPages } as _, i}
				<a
					class="btn join-item"
					class:btn-active={i + 1 == data.page}
					class:btn-primary={i + 1 == data.page}
					class:text-secondary-content={i + 1 == data.page}
					href="/merch?page={i + 1}"
					data-sveltekit-reload>{i + 1}</a>
			{/each}
		</div>
	</section>
</section>
