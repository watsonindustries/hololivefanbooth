<script lang="ts">
	import { Canvas } from '@threlte/core';
	import MerchScene from './MerchScene.svelte';

	let { merch = {
		id: '',
		name: 'Merch',
		category: '',
		quantity: 0,
		model: '',
		thumbnail: {
			url: ''
		},
		price: 0
	} } = $props();
</script>

<div
	class="card min-w-64 bg-secondary shadow-xl transition-colors duration-300 hover:bg-secondary-focus">
	<a href={`/merch/${merch.id}`}>
		<div class="h-80" id="merch-preview-container-{merch.name.toLowerCase()}">
			{#if merch.model !== '' && merch.model !== undefined}
				<Canvas>
					<MerchScene assetURL={merch.model}></MerchScene>
				</Canvas>
			{:else if merch.thumbnail && merch.thumbnail.url !== '' && merch.thumbnail.url !== undefined}
				<img src={merch.thumbnail.url} alt="" class="h-full w-full rounded-t-2xl object-cover" />
			{:else}
				<p class="text-secondary-content">No image found...</p>
			{/if}
		</div>

		<div class="card-body font-geologica" id="merch-info-{merch.name.toLowerCase()}">
			<h2 class="card-title text-4xl font-bold tracking-tight text-secondary-content">
				{merch.name}
			</h2>
			<p class="text-xl text-secondary-content">
				{#if merch.price > 0}
					{#if merch.price < 100}
						Price: {merch.price.toFixed(2)}
					{:else}
						Price: {merch.price.toFixed(0)}
					{/if}
				{:else if merch.price === 0 || merch.price === undefined}
					Price: FREE
				{/if}
			</p>
			<div class="card-actions mt-auto justify-start">
				<p class="text-secondary-content">In stock: {merch.quantity}</p>
				<span><p class="badge badge-neutral">{merch.category || ''}</p></span>
				<!-- <button class="btn btn-primary rounded-full">View</button> -->
			</div>
		</div>
	</a>
</div>
