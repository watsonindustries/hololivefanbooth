<script lang="ts">
	import type { PageData } from './$types';
	import { Canvas } from '@threlte/core';
	import MerchScene from '$lib/components/MerchScene.svelte';

	export let data: PageData;

	$: console.log(data);
</script>

<svelte:head>
	<title>Hololive Fan Booth - Merch</title>
	<meta name="description" content="Merch available at the booth for purchase, and as prizes" />
</svelte:head>

<section class="mx-auto mt-6 max-w-5xl space-y-12">
	<h1 class="text-center font-geologica text-6xl font-bold tracking-tight">Merch</h1>
	<div class="grid grid-cols-3 gap-4">
		<!-- Your content here -->
		{#each data.merch as merch}
			<div class="card min-w-64 bg-base-100 shadow-xl">
				<div class="min-h-60">
					<Canvas>
						<MerchScene assetURL={merch.model}></MerchScene>
					</Canvas>
				</div>
				<div class="card-body font-geologica">
					<h2 class="card-title text-4xl font-bold">{merch.name}</h2>
					<p class="font-light">{merch.description || ''}</p>
					<div class="card-actions mt-4 justify-start">
						<p class="text-sm text-base-content">In stock: {merch.quantity}</p>
						<!-- <button class="btn btn-primary rounded-full">View</button> -->
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
