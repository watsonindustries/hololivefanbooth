<script lang="ts">
	import { Canvas } from '@threlte/core';
	import type { PageData } from './$types';
	import MerchScene from '$lib/components/MerchScene.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<title>{data.merchItem.name} - Hololive Fan Booth</title>
	<meta name="description" content={data.merchItem.description} />
</svelte:head>

{#if data.merchItem.model !== '' && data.merchItem.model !== undefined}
	<div class="min-h-[70vh] bg-secondary shadow-lg">
		<Canvas>
			<MerchScene assetURL={data.merchItem.model} interactive></MerchScene>
		</Canvas>
	</div>
{:else if data.merchItem.thumbnail && data.merchItem.thumbnail.url !== '' && data.merchItem.thumbnail.url !== undefined}
	<div class="h-[70vh] bg-secondary shadow-lg">
		<img src={data.merchItem.thumbnail.url} alt="" class="h-full w-full object-scale-down" />
	</div>
{/if}

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

	<section id="stock-price" class="min-w-fit">
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

<section class="mt-4 flex items-center" id="page-navigation">
	<a
		href="/merch"
		class="btn btn-secondary mx-auto rounded-full px-4 py-2 transition-all hover:scale-105"
		id="back-to-merch">Back to Merch</a>
</section>
