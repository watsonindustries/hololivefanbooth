<script lang="ts">
	import iPhoneMockup from '$lib/assets/iPhone-demo-screenshot.jpeg';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { Apple, Android, Safari, Googlechrome } from '@steeze-ui/simple-icons';
	import HqOnboarding from '$lib/components/HQOnboarding.svelte';

	import stampSheetDemo from '$lib/assets/stamp-sheet-iphone-demo.png';
	import leaderboardDemo from '$lib/assets/leaderboard-iphone-demo.png';
</script>

<svelte:head>
	<title>Hololive Fan Booth - HoloQuest</title>
	<meta name="description" content="HoloQuest app landing page." />
</svelte:head>

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

		<img src={leaderboardDemo} alt="Mockup of the leaderboard feature." class="md:max-w-md" />
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
			</div>
		</div>
	</div>
</div>
