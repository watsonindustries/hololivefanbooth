<script lang="ts">
	import { Canvas } from '@threlte/core';
	import type { PageData } from './$types';
	import MerchScene from '$lib/components/MerchScene.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.merchItem.name} - Hololive Fan Booth</title>
	<meta name="description" content={data.merchItem.description} />
</svelte:head>

<div class="min-h-[70vh] bg-secondary shadow-lg">
	<Canvas>
		<MerchScene assetURL={data.merchItem.model} interactive></MerchScene>
	</Canvas>
</div>

<section
	id="merch-info"
	class="mx-auto mt-8 flex max-w-4xl flex-col justify-between space-y-4 px-4 font-geologica xl:flex-row xl:space-y-0 xl:px-0">
	<section id="name-desc">
		<h1 class="text-4xl font-extrabold tracking-tight text-secondary" id="name">
			{data.merchItem.name}
		</h1>
		<section class="prose items-center text-2xl">
			<p class="text-secondary" id="description">
				{data.merchItem.description}
			</p>
		</section>
	</section>

	<section id="stock-price">
		<p class="text-xl text-secondary" id="price">
			{#if data.merchItem.price > 0}
				{#if data.merchItem.price < 100}
					Price: {data.merchItem.price.toFixed(2)}
				{:else}
					Price: {data.merchItem.price.toFixed(0)}
				{/if}
			{:else if data.merchItem.price === 0 || data.merchItem.price === undefined}
				Price: FREE
			{/if}
		</p>
		<p class="text-xl text-secondary" id="stock">
			In stock: {data.merchItem.quantity}
		</p>

		<span><p class="badge badge-secondary">{data.merchItem.category || ''}</p></span>
	</section>
</section>
