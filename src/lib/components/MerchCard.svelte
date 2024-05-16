<script lang="ts">
	import { Canvas } from '@threlte/core';
	import MerchScene from './MerchScene.svelte';

	export let merch = {
		name: 'Merch',
		category: '',
		quantity: 0,
		model: '',
		price: 0
	};
</script>

<div class="card min-w-64 bg-secondary shadow-xl">
	<div class="min-h-60" id="merch-preview-container-{merch.name.toLowerCase()}">
		{#if merch.model === '' || merch.model === undefined}
			<p class="text-secondary-content">No model found...</p>
		{:else}
			<Canvas>
				<MerchScene assetURL={merch.model}></MerchScene>
			</Canvas>
		{/if}
	</div>

	<div class="card-body font-geologica" id="merch-info-{merch.name.toLowerCase()}">
		<h2 class="card-title text-4xl font-bold tracking-tight text-secondary-content">
			{merch.name}
		</h2>
		<p class="text-secondary-content text-xl">
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
</div>
