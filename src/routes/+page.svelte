<script lang="ts">
	import fanboothLogoLarge from '$lib/assets/fanbooth-logo-large.png';
	import TriangleIcon from '$lib/components/TriangleIcon.svelte';

	const title = 'Hololive Fan Booth';
	const description = 'A Hololive Fan Booth by fans, for fans.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:url" content="https://www.hololivefanbooth.com" />
	<meta property="og:title" content={title} />
	<meta property="og:image" content="https://i.imgur.com/wW1hNrX.png" />
	<meta property="og:description" content={description} />
	<meta property="og:image:width" content="1701" />
	<meta property="og:image:height" content="1134" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="https://i.imgur.com/wW1hNrX.png" />
</svelte:head>

<div class="hero min-h-screen bg-base-200 relative">

<TriangleIcon></TriangleIcon>

	<div class="hero-content text-center">
		<div class="max-w-md space-y-3">
			<img src={fanboothLogoLarge} alt="DoKomi Hololive Fan Booth Logo Large" />
			<h1
				class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary"
			>
				DoKomi Hololive Fan Booth
			</h1>
			<h2 class="text-3xl font-semibold">30.06.2023 - 02.07.2023</h2>

			<p class="inline-block text-lg">at</p>
			<p class="inline-block text-xl">Düsseldorf Congress Center South</p>

			<p class="py-6 text-2xl font-bold">Coming Soon!</p>
			<a href="https://www.dokomi.de/en" class="link link-primary">Dokomi.de</a>
		</div>
	</div>
</div>
