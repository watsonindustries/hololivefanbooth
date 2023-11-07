<script lang="ts">
	import type { PageData } from './$types';

	import { MetaTags } from 'svelte-meta-tags';

	import fanboothLogoLarge from '$lib/assets/fanbooth-logo-large.png';
	import Events from '$lib/components/Events.svelte';
	import KofiButton from '$lib/components/KofiButton.svelte';
	import MiniTriangle from '$lib/components/MiniTriangle.svelte';
	import TriangleIcon from '$lib/components/TriangleIcon.svelte';
	import TwitterShareButton from '$lib/components/TwitterShareButton.svelte';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { MapPin } from '@steeze-ui/heroicons';

	import { TriangleKind, hololiveFanBoothDokomiAppURL } from '../const';

	export let data: PageData;
</script>

<svelte:head>
	<title>Hololive Fan Booth - Home</title>
	<meta
		name="description"
		content="Hololive Dokomi 2024 fan booth landing page - made by fans, for fans." />
</svelte:head>

<MetaTags
	openGraph={{
		type: 'website',
		url: data.host,
		title: 'Hololive Fan Booth - Home',
		description: 'Hololive Dokomi 2024 fan booth - made by fans, for fans.',
		images: [
			{
				url: data.thumbnailImgURL,
				width: 1200,
				height: 800,
				alt: 'Hololive Fan Booth'
			}
		]
	}}
	twitter={{
		cardType: 'summary_large_image'
	}}
	additionalMetaTags={[
		{
			property: 'og:image:secure_url',
			content: data.thumbnailImgURL
		},
		{
			property: 'twitter:image:src',
			content: data.thumbnailImgURL
		}
	]} />

<div class="hero min-h-screen bg-base-100 relative">
	<TriangleIcon
		position="left-20 lg:left-48 top-16"
		kind={TriangleKind.A}
		delay="animation-delay-2000" />
	<TriangleIcon position="left-10 lg:left-24" />
	<TriangleIcon position="top-60 lg:top-36" delay="animation-delay-2000" />
	<TriangleIcon position="right-12 top-32" kind={TriangleKind.A} />
	<TriangleIcon
		position="right-24 top-60 lg:top-96"
		delay="animation-delay-4000"
		kind={TriangleKind.B} />
	<TriangleIcon position="right-2/3 lg:right-20" delay="animation-delay-2000" />

	<MiniTriangle position="left-1/3 top-1/3" delay="animation-delay-2000" />
	<MiniTriangle position="right-1/4 top-1/4" delay="animation-delay-1000" type={2} />

	<div class="hero-content text-center">
		<div class="max-w-lg space-y-4">
			<img
				src={fanboothLogoLarge}
				alt="DoKomi Hololive Fan Booth Logo Large"
				width="1200"
				height="800" />
			<h1
				class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
				DoKomi Hololive Fan Booth
			</h1>
			<h2 class="text-3xl font-semibold">28.06.2024 - 30.06.2024</h2>
            <p class="text-6xl">Planning and funding started!</p>
		</div>
	</div>
</div>

<div class="hero h-72 bg-secondary bg-blend-multiply">
	<div class="hero-overlay bg-triangles bg-fixed" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md space-y-4">
			<h1 class="mb-5 text-6xl font-bold text-primary">
				Learn <span class="text-base-100">more</span>
			</h1>
			<a
				class="btn btn-primary btn-lg rounded-full px-12 hover:scale-105 transition-all"
				href="/about">About</a>
		</div>
	</div>
</div>

<Events />

<div class="hero h-72 bg-secondary">
	<div class="hero-overlay bg-triangles bg-fixed" />
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md space-y-4">
			<h1 class="mb-5 text-6xl font-bold text-primary">Share</h1>
			<TwitterShareButton />
		</div>
	</div>
</div>

<div class="hero h-80 bg-primary bg-sprinkle" id="support">
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md space-y-6">
			<h1 class="mb-5 text-6xl font-bold text-secondary">
				Support <span class="text-base-100">us</span>
			</h1>
			<p class="text-2xl font-semibold text-base-100">
				With your support, we plan to create a meeting spot for fans, an artist rally, posters, flyers, postcards, and more!
			</p>
			<KofiButton />
		</div>
	</div>
</div>
