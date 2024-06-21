<script lang="ts">
	const events = ['Buttons', 'Postcards', 'Prints', 'More goodies'];
</script>

<div class="bg-sprinkle hero h-[75vh] w-full bg-primary">
	<div
		class="hero-content w-full rounded-sm bg-secondary px-10 py-20 text-center font-geologica shadow-2xl shadow-secondary sm:w-fit sm:px-32">
		<div class="space-y-8">
			<h1 class="text-8xl font-bold tracking-tighter text-base-100">Plans</h1>
			<div class="space-y-6 font-semibold text-base-100">
				{#each events as event}
					<p class="text-4xl">{event}</p>
				{/each}
			</div>
		</div>
	</div>
</div>
