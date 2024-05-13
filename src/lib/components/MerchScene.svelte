<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { interactivity } from '@threlte/extras';

	import MerchModel from '$lib/components/gltf/MerchModel.svelte';

	export let assetURL: string;

	interactivity();

	let rotation = 0;
	useTask((delta) => {
		rotation += delta * 0.2;
	});
</script>

<T.PerspectiveCamera
	makeDefault
	position={[10, 10, 10]}
	on:create={({ ref }) => {
		ref.lookAt(0, 1, 0);
	}}></T.PerspectiveCamera>

<T.DirectionalLight position={[10, 10, 10]} intensity={0.9} color="white" castShadow />

<MerchModel scale={0.3} position={[0, -3, 0]} rotation.y={rotation} {assetURL}>
	<span slot="fallback">
		<p>Loading...</p>
	</span>
</MerchModel>
