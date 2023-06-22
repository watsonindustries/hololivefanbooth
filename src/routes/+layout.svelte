<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import '../app.postcss';

	import Navigation from '$lib/components/Navigation.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<Navigation />

<slot />

<Footer />
