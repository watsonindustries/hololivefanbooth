<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import '../app.postcss';
	const title = 'Hololive Fan Booth';
	const description = 'A Hololive Fan Booth by fans, for fans.';

	import boothLogoLarge from '$lib/assets/fanbooth-logo-large.png';
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<Navigation></Navigation>

<svelte:head>
	<title>{title}</title>
	<meta property="og:url" content="https://www.hololivefanbooth.com" />
	<meta property="og:title" content={title + ' for DoKomi 2023'} />
	<meta property="og:image" content={boothLogoLarge} />
	<meta property="og:image:secure_url" content={boothLogoLarge} />
	<meta property="og:description" content={description} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="800" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title + ' for DoKomi 2023'} />
	<meta name="twitter:description" content={description} />
	<meta name="description" content="DoKomi 2023 Hololive fan booth project landing page.">
</svelte:head>

<slot />

<Footer />
