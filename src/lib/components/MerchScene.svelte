<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { GLTF, interactivity, OrbitControls } from '@threlte/extras';

	export let assetURL: string;
	export let interactive = false;

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
	}}>
	{#if interactive}
		<OrbitControls enableDamping />
	{/if}
</T.PerspectiveCamera>

<T.DirectionalLight position={[10, 10, 10]} intensity={1.5} color="#fff" castShadow />

<GLTF
	url={assetURL}
	scale={0.3}
	position={[0, -3, 0]}
	rotation.y={rotation}
	{interactive}
	useDraco
	useMeshopt>
</GLTF>
