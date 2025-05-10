<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import '../app.postcss';

	import { onNavigate } from '$app/navigation';

	import Navigation from '$lib/components/Navigation.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	// View transition
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Navigation />

{@render children?.()}

<Footer />
