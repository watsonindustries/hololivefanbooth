<script lang="ts">
	import type { PageData } from './$types';
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/components/Scene.svelte';

	export let data: PageData;
</script>

<div class="h-screen">
	<Canvas>
		<Scene />
	</Canvas>
</div>
