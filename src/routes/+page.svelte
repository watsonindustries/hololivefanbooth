<script lang="ts">
	import fanboothLogoLarge from '$lib/assets/fanbooth-logo-large.png';
	import TriangleIcon from '$lib/components/TriangleIcon.svelte';
	import { TriangleKind } from '../const';

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
</svelte:head>

<div class="hero min-h-screen bg-base-100 relative">
	<TriangleIcon
		position="left-20 lg:left-48 top-16"
		kind={TriangleKind.A}
		delay="animation-delay-2000"
	/>
	<TriangleIcon
		position="left-28 lg:left-40 top-16"
		kind={TriangleKind.B}
		delay="animation-delay-4000"
	/>
	<TriangleIcon position="left-10 lg:left-24" />
	<TriangleIcon position="top-60 lg:top-36" delay="animation-delay-2000" />
	<TriangleIcon position="right-12 top-32" kind={TriangleKind.A} />
	<TriangleIcon
		position="right-24 top-60 lg:top-96"
		delay="animation-delay-4000"
		kind={TriangleKind.B}
	/>
	<TriangleIcon position="right-10 lg:right-20" delay="animation-delay-2000" />

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

			<p class="py-6 text-2xl font-bold text-secondary">Coming Soon!
				
				
			</p>
			<a href="https://forms.gle/C8cLHhz4Ytp6Zp1J9" class="font-bold text-2xl link link-primary no-underline hover:text-orange-600">Wanna help out? 
				<br /> Ideas for events? 
				<br />Any questions?
				<br />Click here
			</a>
			<br />
			<br />
			<a href="https://www.dokomi.de/en" class="link link-primary hover:text-orange-600">DoKomi.de</a>
			<br />
		</div>
	</div>
</div>
