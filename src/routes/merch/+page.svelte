<script lang="ts">
	import type { PageData } from './$types';
	import { Canvas } from '@threlte/core';
	import MerchScene from '$lib/components/MerchScene.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Hololive Fan Booth - Merch</title>
	<meta name="description" content="Merch available at the booth for purchase, and as prizes" />
</svelte:head>

<section class="mx-auto mt-6 space-y-12 xl:max-w-5xl">
	<h1 class="text-center font-geologica text-8xl font-extrabold tracking-tighter text-primary">
		Merch
	</h1>
	<div class="grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 xl:grid-cols-3" id="merch-grid-container">
		<!-- Your content here -->
		{#each data.merch as merch}
			<div class="card min-w-64 bg-secondary shadow-xl">
				<div class="min-h-60">
					<Canvas>
						<MerchScene assetURL={merch.model}></MerchScene>
					</Canvas>
				</div>
				<div class="card-body font-geologica">
					<h2 class="card-title text-5xl font-bold tracking-tight">{merch.name}</h2>
					<p class="text-2xl">{merch.description || ''}</p>
					<div class="card-actions mt-4 justify-start">
						<p class="text-sm text-base-content">In stock: {merch.quantity}</p>
						<!-- <button class="btn btn-primary rounded-full">View</button> -->
					</div>
				</div>
			</div>
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
					href="/merch?page={i + 1}"
					data-sveltekit-reload>{i + 1}</a>
			{/each}
		</div>
	</section>
</section>
