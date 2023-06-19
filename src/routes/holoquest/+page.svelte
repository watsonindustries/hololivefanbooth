<script lang="ts">
	import iPhoneMockup from '$lib/assets/iPhone-demo-screenshot.jpeg';

	import { Icon } from '@steeze-ui/svelte-icon';
	import { Apple, Android, Safari, Googlechrome } from '@steeze-ui/simple-icons';
	import HqOnboarding from '$lib/components/HQOnboarding.svelte';
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
		<div class="mockup-phone border-primary min-w-fit shadow-xl">
			<div class="camera" />
			<div class="display">
				<div class="artboard artboard-demo phone-1">
					<img src={iPhoneMockup} alt="HoloQuest App Screenshot" class="w-full h-full" />
				</div>
			</div>
		</div>

		<div>
			<h1 class="text-6xl text-primary font-bold font-geologica">Collect stamps on your phone!</h1>
			<p class="py-6 font-geologica text-base-100 text-xl">
				Discover the DoKomi 2023 vendors and enjoy a fun treasure quest! A cool prize awaits you at
				the end!
			</p>
		</div>
	</div>
</div>

<div class="hero h-[60vh] bg-base-100">
	<div class="hero-content flex-col space-y-4 lg:flex-row lg:space-x-4 mx-4">
		<div>
			<h1 class="text-6xl text-primary font-bold font-geologica">Enjoy the quest together</h1>
			<p class="py-6 font-geologica text-secondary text-xl">
				See other's progress in the live leaderboard. Get live updates from other hunters.
			</p>
		</div>

		<img />
		(img will go here)
	</div>
</div>

<div class="hero h-[80vh] bg-shapes bg-secondary">
	<div class="hero-content text-center">
		<div class="max-w-md space-y-4">
			<h1 class="text-6xl text-primary font-bold font-geologica">Supported Platforms</h1>
			<div class="flex flex-row align-middle justify-center gap-4 text-base-100">
				<Icon src={Apple} size="48" />
				<Icon src={Android} size="48" />
			</div>
			<h2 class="text-4xl text-primary font-bold font-geologica">Browsers</h2>
			<div class="flex flex-row align-middle justify-center gap-4 text-base-100">
				<Icon src={Safari} size="40" />
				<Icon src={Googlechrome} size="40" />
			</div>

			<p class="py-6 text-base-100 font-geologica">
				An active Internet connection is not required, but needed for online features. Data charges
				may apply.
			</p>
		</div>
	</div>
</div>
