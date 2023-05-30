<script lang="ts">
	import { ArrowTopRightOnSquare } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
</script>

<div class="hero min-h-screen bg-primary w-full bg-sprinkle">
	<div class="hero-content text-center bg-secondary p-10 sm:p-40 shadow-2xl shadow-secondary rounded-sm">
		<div class="space-y-8">
			<h1 class="text-8xl font-bold text-base-100">Events</h1>
			<div class="text-base-100 space-y-6 font-semibold">
				<a href="/about" class="link-hover text-4xl inline-flex items-center justify-center gap-2">
					Cosplay Gathering <Icon src={ArrowTopRightOnSquare} size="24px" theme="solid" />
				</a>
				<p class="text-4xl">Other Events TBA</p>
			</div>
		</div>
	</div>
</div>
