<script lang="ts">
	import fanboothLogoLarge from '$lib/assets/fanbooth-logo-large.png';
	import MiniTriangle from '$lib/components/MiniTriangle.svelte';
	import TriangleIcon from '$lib/components/TriangleIcon.svelte';
	import { TriangleKind } from '../const';

	const googleFormURL = 'https://forms.gle/C8cLHhz4Ytp6Zp1J9';
</script>

<div class="hero min-h-screen bg-base-100 relative">
	<TriangleIcon
		position="left-20 lg:left-48 top-16"
		kind={TriangleKind.A}
		delay="animation-delay-2000"
	/>
	<TriangleIcon position="left-10 lg:left-24" />
	<TriangleIcon position="top-60 lg:top-36" delay="animation-delay-2000" />
	<TriangleIcon position="right-12 top-32" kind={TriangleKind.A} />
	<TriangleIcon
		position="right-24 top-60 lg:top-96"
		delay="animation-delay-4000"
		kind={TriangleKind.B}
	/>
	<TriangleIcon position="right-2/3 lg:right-20" delay="animation-delay-2000" />

	<MiniTriangle position="left-1/3 top-1/3" delay="animation-delay-2000" />
	<MiniTriangle position="right-1/4 top-1/4" delay="animation-delay-1000" type={2} />
	<!-- <MiniTriangle position="left-1/3 bottom-1/3" delay="animation-delay-3000" type={4}/>
	<MiniTriangle position="right-3/4 bottom-1/3" delay="animation-delay-1000" type={3} />
	<MiniTriangle position="left-3/4 bottom-1/4" delay="animation-delay-3000" type={2} /> -->

	<div class="hero-content text-center">
		<div class="max-w-lg space-y-3">
			<img src={fanboothLogoLarge} alt="DoKomi Hololive Fan Booth Logo Large" width="1200" height="800"/>
			<h1
				class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary"
			>
				DoKomi Hololive Fan Booth
			</h1>
			<h2 class="text-3xl font-semibold">30.06.2023 - 02.07.2023</h2>

			<p class="inline-block text-lg">at</p>
			<p class="inline-block text-xl">Düsseldorf Congress Center South</p>

			<p class="py-6 text-2xl font-bold text-secondary">Coming Soon!</p>

			<div id="info" class="flex flex-col py-3 space-y-6">
				<p class="font-bold text-2xl text-primary">
					Wanna help out? Ideas for events? <br /> Any questions?
				</p>

				<a
					href={googleFormURL}
					class="btn btn-primary rounded-full max-w-xs mx-auto hover:bg-secondary hover:border-secondary hover:scale-110 transition">Click Here</a
				>
				<a href="/about" class="link link-info link-hover">Learn more</a>
			</div>
		</div>
	</div>
</div>

 <div class="hero min-h-screen bg-primary w-full bg-sprinkle">
  <div class="hero-content text-center">
    <div class="">
      <h1 class="text-6xl font-bold text-base-100">Events</h1>
      <p class="py-6 text-secondary text-2xl">Coming soon!</p>
    </div>
  </div>
</div>
