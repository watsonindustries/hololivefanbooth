<script lang="ts">
	import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import holoquestQR from '$lib/assets/holoquest-qr.png';

	let { pathDrawOpts = { duration: 1000, delay: 200, easing: quintOut } } = $props();
</script>

<img src={holoquestQR} alt="Holoquest QR code" class="w-full" style="max-width: 300px; margin: 0 auto;" transition:draw={pathDrawOpts} />
