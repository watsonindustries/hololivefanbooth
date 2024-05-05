<script>
	import { T, useTask } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { OrbitControls } from '@threlte/extras';

	import Bubba from '$lib/components/gltf/Bubba.svelte';

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
	<OrbitControls enableDamping /></T.PerspectiveCamera>

<T.DirectionalLight position={[0, 10, 10]} intensity={0.9} color="white" castShadow />

<Bubba scale={0.3} rotation.y={rotation}></Bubba>

<T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
	<T.CircleGeometry args={[4, 40]} />
	<T.MeshStandardMaterial color="grey" />
</T.Mesh>
