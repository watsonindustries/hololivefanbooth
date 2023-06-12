<script lang="ts">
	import { ArrowTopRightOnSquare } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
</script>

<div class="hero h-[60vh] sm:h-[80vh] bg-primary w-full bg-sprinkle">
	<div
		class="hero-content text-center bg-secondary w-full sm:w-fit p-10 sm:p-32 shadow-2xl shadow-secondary rounded-sm">
		<div class="space-y-8">
			<h1 class="text-8xl font-bold text-base-100">Events</h1>
			<div class="text-base-100 space-y-6 font-semibold">
				<a
					href="https://www.dokomi.de/en/cosplay/cosplay-gatherings/hololive-gruppenshooting-"
					class="link-hover text-4xl inline-flex items-center justify-center gap-2 hover:text-base-300 transition-colors">
					Cosplay Gathering <Icon src={ArrowTopRightOnSquare} size="24px" theme="solid" />
				</a>
				<p class="text-4xl">Snack Exchange</p>
				<p class="text-4xl">Pickup Point</p>
				<p class="text-4xl">Raffles</p>
				<p class="text-4xl">Other Events <span class="text-primary">TBA</span></p>
			</div>
		</div>
	</div>
</div>
