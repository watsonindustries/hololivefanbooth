<script lang="ts">
	import type { PageData } from './$types';
	import { MetaTags } from 'svelte-meta-tags';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { Apple, Android, Safari, Googlechrome } from '@steeze-ui/simple-icons';
	import HqOnboarding from '$lib/components/HQOnboarding.svelte';

	import stampSheetDemo from '$lib/assets/stamp-sheet-iphone-demo.png';
	import leaderboardDemo from '$lib/assets/leaderboard-iphone-demo.png';
	import holoquestTwitterCard from '$lib/assets/holoquest-twitter-card.png';

	const exampleImgURL = 'https://pbs.twimg.com/media/FhElbRvWAAI8uZn?format=jpg&name=4096x4096';

	// TODO: Move to const
	const vendors = [
		{
			id: 1,
			name: 'Hasuke はすけ 4C16',
			description: `
		Digital Artist & V-Tuber | 🇩🇪🇺🇸🇯🇵 |
| Graphic Art | Illustration | Gamedev | 
Certified Hololive Simp
Modell & Banner by me.`,
			externalURL: 'https://webapp.dokomi.de/explore/c/108511',
			imageURL: exampleImgURL
		},
		{
			id: 2,
			name: 'SAVI✿サビ M701',
			description: `
		I'm a pink ball who simps for cute girls.. and draws…sometimes (2434) 💓Eng/Рус/日本語/Ger OK💓 business: savi.chan.commissions@gmail(.)com📩info in carrd`,
			externalURL: 'https://webapp.dokomi.de/explore/c/107468',
			imageURL: exampleImgURL
		},
		{
			id: 3,
			name: 'Mori @ 3M34',
			description: 'Artist into: Anime|VTubers|Games',
			externalURL: 'https://webapp.dokomi.de/explore/c/108058',
			imageURL: exampleImgURL
		},
		{
			id: 4,
			name: 'CYCLIC★REDUNDANCY',
			description: `
		Doujin 同人 Circle 🎨▪️Account manager 担当者：
@Ninamo_lcr
▪️Online stores 通販 ➡️ See pinned tweet 🛒📌▪️ES/EN/日本語👌`,
			externalURL: 'https://webapp.dokomi.de/explore/c/107091',
			imageURL: exampleImgURL
		},
		{
			id: 5,
			name: 'Erizu 3J19',
			description: 'Freelance Illustrator | Live2d Artist/Rigger | Pixel Art Apprentice',
			externalURL: 'https://webapp.dokomi.de/explore/c/108335',
			imageURL: exampleImgURL
		},
		{
			id: 6,
			name: 'Miyulein',
			externalURL: 'https://twitter.com/Miyulein',
			imageURL: exampleImgURL
		}
	];

	export let data: PageData;
</script>

<MetaTags
	openGraph={{
		type: 'website',
		url: data.host,
		title: 'Hololive Fan Booth - HoloQuest',
		description: 'HoloQuest - A fan stamp rally for DoKomi 2023',
		images: [
			{
				url: new URL(holoquestTwitterCard, data.host).toString(),
				width: 700,
				height: 466,
				alt: 'HoloQuest app'
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

<div class="hero min-h-screen bg-base-100 bg-sprinkle">
	<div class="hero-content text-center">
		<div class="max-w-xl">
			<h1
				class="text-6xl lg:text-8xl font-bold font-geologica text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
				HoloQuest
			</h1>
			<p class="py-6 text-xl font-geologica text-secondary">
				A live, interactive stamp ralley for Hololive fans.
			</p>
			<HqOnboarding />
		</div>
	</div>
</div>

<div class="hero min-h-screen bg-gradient-to-br from-primary to-secondary">
	<div class="hero-content flex-col space-y-4 lg:flex-row lg:space-x-4 mx-4">
		<!-- Mockup -->
		<img src={stampSheetDemo} class="md:max-w-md" alt="Mockup of the stamp sheet in the app." />

		<div>
			<h1 class="text-6xl text-primary font-bold font-geologica">Collect stamps on your phone!</h1>
			<p class="py-6 font-geologica text-base-100 text-2xl">
				Discover the DoKomi 2023 vendors and enjoy a fun quest! A cool prize awaits you at the end!
			</p>
		</div>
	</div>
</div>

<div class="hero min-h-screen md:h-[80vh] bg-base-100">
	<div class="hero-content flex-col space-y-4 lg:flex-row lg:space-x-4 mx-4">
		<div>
			<h1 class="text-6xl text-primary font-bold font-geologica">Enjoy the quest together</h1>
			<p class="py-6 font-geologica text-secondary text-2xl">
				See other's progress in the live leaderboard. Get live updates from other participants.
			</p>
		</div>

		<img
			src={leaderboardDemo}
			alt="Mockup of the leaderboard feature."
			class="md:max-w-md opacity-gradient-tb" />
	</div>
</div>

<!-- Featured partners hero -->
<div class="hero min-h-screen bg-primary">
	<div class="hero-content flex flex-col">
		<div class="max-w-4xl mx-auto">
			<h1 class="text-6xl text-secondary font-bold font-geologica">Featured Partners</h1>
			<p class="py-6 font-geologica text-base-100 text-2xl">Visit them at DoKomi 2023!</p>
		</div>
		<div class="carousel rounded-box space-x-4 max-w-xs sm:max-w-xl md:max-w-4xl lg:max-w-7xl">
			{#each vendors as vendor}
				<a href={vendor.externalURL} rel="noopener noreferrer" class="min-w-fit">
					<div class="card bg-base-100">
						<figure class="h-60 relative">
							<img
								src={vendor.imageURL}
								alt={vendor.name}
								class="absolute top-0 left-0 w-full h-full object-cover object-center" />
						</figure>

						<div class="card-body w-64 h-28 font-geologica">
							<h2 class="card-title break-all text-center align-middle justify-center">
								{vendor.name}
							</h2>
							<div class="card-actions justify-end" />
						</div>
					</div></a>
			{/each}
		</div>
	</div>
</div>

<div class="hero h-[80vh] bg-shapes bg-secondary">
	<div class="hero-content text-center">
		<div class="max-w-md space-y-4">
			<h1 class="text-6xl text-primary font-bold font-geologica">Supported Platforms</h1>

			<div class="flex items-center justify-center gap-4 text-base-100 pt-4">
				<Icon src={Apple} size="48" />
				<Icon src={Android} size="48" />
				<div class="border-l-2 border-base-100 h-12 mx-4" />
				<Icon src={Safari} size="40" />
				<Icon src={Googlechrome} size="40" />
			</div>
			<div class="space-y-6 text-base-100 font-geologica">
				<p>
					An active Internet connection is not required, but needed for online features. Data
					charges may apply.
				</p>
				<p>
					A smartphone capable of scanning QR codes is required. Installation of the DoKomi 2023 app
					is not required, but recommended.
				</p>
				<p>
					For any other questions and support, please <a href="/contact" class="link link-primary"
						>contact the booth staff</a
					>.
				</p>
				<p>Prizes are limited and while supplies last.</p>
			</div>
		</div>
	</div>
</div>
