<script lang="ts">
	import type { PageData } from './$types';
	import MerchCard from '$lib/components/MerchCard.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>Hololive Fan Booth - Merch</title>
	<meta name="description" content="Merch available at the booth for purchase, and as prizes" />
</svelte:head>

<section class="mx-auto mt-6 space-y-12 px-6 xl:max-w-5xl">
	<h1 class="text-center font-geologica text-8xl font-extrabold tracking-tighter text-primary">
		Merch
	</h1>
	<section class="prose items-center font-geologica text-xl">
		<p class="text-secondary">
			Here you can find all the merch available at the booth for purchase, and as prizes.
		</p>
		<p class="text-secondary">Click on the items to view more details.</p>
		<p class="font-bold text-secondary">Merch list and availability not final.</p>
	</section>

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" id="merch-grid-container">
		{#each data.merch as merch}
			<MerchCard {merch} />
		{:else}
			Nothing found...
		{/each}
	</div>

	<section class="flex justify-center" id="pagination">
		<Pagination totalPages={data.totalPages} currentPage={data.page} />
	</section>
</section>
