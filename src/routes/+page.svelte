<script lang="ts">
	import fanboothLogoLarge from '$lib/assets/fanbooth-logo-large.png';
</script>

<svelte:head>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:creator" content="@danirukun" />
	<meta property="og:url" content="https://www.hololivefanbooth.com" />
	<meta property="og:title" content="Dokomi Hololive Fan Booth" />
	<meta property="og:description" content="A Hololive Fan Booth by fans, for fans." />
	<meta property="og:image" content={fanboothLogoLarge} />
</svelte:head>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md space-y-3">
			<img src={fanboothLogoLarge} alt="Dokomi Hololive Fan Booth Logo Large" />
			<h1 class="text-5xl font-bold">Dokomi Hololive Fan Booth</h1>
			<h2 class="text-3xl font-semibold">30.06.2023 - 02.07.2023</h2>

			<p class="inline-block text-lg">at</p>
			<p class="inline-block text-xl">Düsseldorf Congress Center South</p>

			<p class="py-6 text-2xl font-bold">Coming Soon!</p>
			<a href="https://www.dokomi.de/en" class="link link-primary">Dokomi.de</a>
		</div>
	</div>
</div>
