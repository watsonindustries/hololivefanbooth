<script lang="ts">
	import type { PageData } from './$types';
	import { MetaTags } from 'svelte-meta-tags';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { Apple, Android, Safari, Googlechrome } from '@steeze-ui/simple-icons';
	import HqOnboarding from '$lib/components/HQOnboarding.svelte';

	import stampSheetDemo from '$lib/assets/stamp-sheet-iphone-demo.png';
	import leaderboardDemo from '$lib/assets/leaderboard-iphone-demo.png';
	import holoquestTwitterCard from '$lib/assets/holoquest-twitter-card.png';

	export let data: PageData;
</script>

<svelte:head>
	<title>Hololive Fan Booth - holoquest</title>
	<meta name="description" content="HoloQuest app landing page." />
</svelte:head>

<MetaTags
	openGraph={{
		type: 'website',
		url: data.host,
		title: 'Hololive Fan Booth - holoquest',
		description: 'holoquest - A fan stamp rally for DoKomi 2024',
		images: [
			{
				url: new URL(holoquestTwitterCard, data.host).toString(),
				width: 700,
				height: 466,
				alt: 'holoquest app'
			}
		]
	}}
	twitter={{
		cardType: 'summary_large_image'
	}}
	additionalMetaTags={[
		{
			property: 'og:image:secure_url',
			content: new URL(holoquestTwitterCard, data.host).toString()
		},
		{
			property: 'twitter:image:src',
			content: new URL(holoquestTwitterCard, data.host).toString()
		}
	]} />

<div class="bg-sprinkle hero min-h-screen bg-base-100">
	<div class="hero-content text-center">
		<div class="max-w-xl font-geologica">
			<h1
				class="bg-gradient-to-br from-primary to-secondary bg-clip-text text-6xl font-bold text-transparent lg:text-8xl">
				holoquest
			</h1>
			<p class="py-6 text-xl font-semibold text-secondary">
				A live, interactive stamp ralley for Hololive fans.
			</p>
			<p class="text-lg text-secondary">Coming Soon!</p>
			<!-- <HqOnboarding /> -->
		</div>
	</div>
</div>

<div class="hero min-h-screen bg-gradient-to-br from-primary to-secondary">
	<div class="hero-content mx-4 flex-col space-y-4 lg:flex-row lg:space-x-4">
		<!-- Mockup -->
		<img src={stampSheetDemo} class="md:max-w-md" alt="Mockup of the stamp sheet in the app." />

		<div>
			<h1 class="font-geologica text-6xl font-bold text-primary">Collect stamps on your phone!</h1>
			<p class="py-6 font-geologica text-2xl text-base-100">
				Discover the DoKomi 2024 vendors and enjoy a fun quest! A cool prize awaits you at the end!
			</p>
		</div>
	</div>
</div>

<div class="hero min-h-screen bg-base-100 md:h-[80vh]">
	<div class="hero-content mx-4 flex-col space-y-4 lg:flex-row lg:space-x-4">
		<div>
			<h1 class="font-geologica text-6xl font-bold text-primary">Enjoy the quest together</h1>
			<p class="py-6 font-geologica text-2xl text-secondary">
				See other's progress in the live leaderboard. Get live updates from other participants.
			</p>
		</div>

		<img
			src={leaderboardDemo}
			alt="Mockup of the leaderboard feature."
			class="opacity-gradient-tb md:max-w-md" />
	</div>
</div>

<div class="bg-shapes hero h-[80vh] bg-secondary">
	<div class="hero-content text-center">
		<div class="max-w-md space-y-4">
			<h1 class="font-geologica text-6xl font-bold text-primary">Supported Platforms</h1>

			<div class="flex items-center justify-center gap-4 pt-4 text-base-100">
				<Icon src={Apple} size="48" />
				<Icon src={Android} size="48" />
				<div class="mx-4 h-12 border-l-2 border-base-100" />
				<Icon src={Safari} size="40" />
				<Icon src={Googlechrome} size="40" />
			</div>
			<div class="space-y-6 font-geologica text-base-100">
				<p>
					An active Internet connection is not required, but needed for online features. Data
					charges may apply.
				</p>
				<p>
					A smartphone capable of scanning QR codes is required. Installation of the DoKomi 2024 app
					is not required, but recommended.
				</p>
				<p>
					For any other questions and support, please <a href="/contact" class="link-primary link"
						>contact the booth staff</a
					>.
				</p>
				<p>Prizes are limited and while supplies last.</p>
			</div>
		</div>
	</div>
</div>
