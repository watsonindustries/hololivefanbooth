<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { GLTF, interactivity, OrbitControls, useDraco } from '@threlte/extras';

	interface Props {
		assetURL: string;
		interactive?: boolean;
	}

	let { assetURL, interactive = false }: Props = $props();

	interactivity();

	const dracoLoader = useDraco();

	let rotation = $state(0);
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

<T.AmbientLight intensity={0.3} color="#eee" />

<T.DirectionalLight position={[5, 10, 7.5]} intensity={1.2} color="#fff" castShadow />
<T.SpotLight position={[-5, 10, -7.5]} intensity={1} color="#fff" castShadow />

<GLTF
	url={assetURL}
	scale={0.3}
	position={[0, -3, 0]}
	rotation.y={rotation}
	{interactive}
	{dracoLoader}
	useMeshopt>
</GLTF>
