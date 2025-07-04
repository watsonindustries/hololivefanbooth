<script lang="ts">
	import type { PageData } from './$types';

	import { MetaTags } from 'svelte-meta-tags';

	import fanboothLogoLarge from '$lib/assets/fanbooth-logo-large.png';
	import Events from '$lib/components/Events.svelte';
	import KofiButton from '$lib/components/KofiButton.svelte';
	import MiniTriangle from '$lib/components/MiniTriangle.svelte';
	import TriangleIcon from '$lib/components/TriangleIcon.svelte';
	import TwitterShareButton from '$lib/components/TwitterShareButton.svelte';

	import { TriangleKind, officialBoothXURL, twitterIntentURL } from '../const';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
</script>

<svelte:head>
	<meta
		name="description"
		content="hololive Dokomi 2025 fan booth landing page - made by fans, for fans." />
</svelte:head>

<MetaTags
	title="Hololive Fan Booth - Home"
	description="hololive Dokomi 2025 fan booth - made by fans, for fans."
	openGraph={{
		type: 'website',
		url: data.host,
		title: 'Hololive Fan Booth - Home',
		description: 'hololive Dokomi 2025 fan booth - made by fans, for fans.',
		images: [
			{
				url: data.thumbnailImgURL,
				width: 1200,
				height: 800,
				alt: 'hololive Fan Booth'
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

<div class="hero relative min-h-screen bg-base-100">
	<TriangleIcon
		position="left-20 lg:left-48 top-16"
		kind={TriangleKind.A}
		delay="animation-delay-2000" />
	<TriangleIcon position="left-10 lg:left-24" class="hidden md:block" />
	<TriangleIcon position="top-36 md:top-60 lg:top-36" delay="animation-delay-2000" />
	<TriangleIcon position="right-12 top-32" class="hidden md:block" kind={TriangleKind.A} />
	<TriangleIcon
		position="right-4 top-8 md:right-24 md:top-60 lg:top-96"
		delay="animation-delay-4000"
		kind={TriangleKind.B} />
	<TriangleIcon
		position="right-2/3 top-80 lg:right-20"
		delay="animation-delay-2000"
		class="hidden md:block" />

	<MiniTriangle position="left-1/3 top-1/3" delay="animation-delay-2000" class="hidden md:block" />
	<MiniTriangle position="right-1/4 top-1/4" delay="animation-delay-1000" type={2} />

	<div class="hero-content text-center">
		<div class="max-w-lg space-y-6">
			<img
				src={fanboothLogoLarge}
				alt="DoKomi hololive Fan Booth Logo Large"
				width="1200"
				height="800" />
			<h1
				class="bg-gradient-to-br from-primary to-secondary bg-clip-text font-geologica text-6xl font-bold tracking-tight text-transparent">
				DoKomi hololive Fan Booth
			</h1>
			<h2 class="font-geologica text-2xl font-light">06.06.2025 - 08.06.2025</h2>
			<h4 class="font-geologica text-4xl font-light">10E21</h4>
		</div>
	</div>
</div>

<div class="hero h-72 bg-secondary bg-blend-multiply">
	<div class="bg-triangles hero-overlay bg-fixed"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md space-y-4">
			<h1 class="mb-5 font-geologica text-6xl font-bold tracking-tight text-primary">
				Learn <span class="text-base-100">more</span>
			</h1>
			<a
				class="btn btn-secondary btn-lg rounded-full px-12 font-geologica transition-all hover:scale-105"
				href="/about">About</a>
		</div>
	</div>
</div>

<Events />

<div class="hero h-72 bg-secondary" id="share">
	<div class="bg-triangles hero-overlay bg-fixed"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md space-y-4">
			<h1 class="mb-5 font-geologica text-6xl font-bold tracking-tight text-primary">Share</h1>
			<TwitterShareButton url={twitterIntentURL} />
		</div>
	</div>
</div>

<div class="h-90 bg-sprinkle hero bg-primary" id="support">
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md space-y-6">
			<h1 class="mb-5 font-geologica text-6xl font-bold tracking-tight text-secondary">
				Support <span class="text-base-100">us</span>
			</h1>
			<p class="font-geologica text-2xl font-semibold text-base-100">
				With your support, we plan to create a meeting spot for fans, an artist rally, posters,
				flyers, postcards, and more!
			</p>
			<KofiButton />
		</div>
	</div>
</div>

<div class="hero h-72 bg-secondary" id="share">
	<div class="bg-triangles hero-overlay bg-fixed"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-md space-y-4">
			<h1 class="mb-5 font-geologica text-6xl font-bold tracking-tight text-primary">
				Follow us for updates
			</h1>
			<a class="btn btn-circle btn-lg font-mono text-4xl font-bold" href={officialBoothXURL}>𝕏</a>
		</div>
	</div>
</div>
