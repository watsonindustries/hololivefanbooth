<script lang="ts">
	import { Canvas } from '@threlte/core';
	import MerchScene from './MerchScene.svelte';

	export let merch = {
		name: 'Merch',
		category: '',
		quantity: 0,
		model: '',
	};
</script>

<div class="card min-w-64 bg-secondary shadow-xl">
	<div class="min-h-60">
		<Canvas>
			<MerchScene assetURL={merch.model}></MerchScene>
		</Canvas>
	</div>
	<div class="card-body font-geologica">
		<h2 class="card-title text-4xl font-bold tracking-tight text-secondary-content">{merch.name}</h2>
		<div class="card-actions justify-start mt-auto">
			<p class="text-secondary-content">In stock: {merch.quantity}</p>
			<span><p class="badge badge-neutral">{merch.category || ''}</p></span>
			<!-- <button class="btn btn-primary rounded-full">View</button> -->
		</div>
	</div>
</div>