<script lang="ts">
	import { Carousel } from 'flowbite-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	export const images = data.project.media.map((media) => ({
		src: media.url,
		alt: media.name,
		title: ''
	}));
</script>

<svelte:head>
	<title>{data.project.name} - Hololive Fan Booth</title>
	<meta name="description" content={data.project.description} />
</svelte:head>

{#if data.project.media.length > 0}
	<div class="bg-secondary py-32 shadow-lg">
		<Carousel
			imgClass="object-contain h-full w-fit rounded-sm"
			{images}
			let:Controls
			let:Indicators>
			{#if data.project.media.length > 1}
				<Controls />
				<Indicators />
			{/if}
		</Carousel>
	</div>
{/if}

<section
	id="project-info"
	class="mx-auto mt-8 flex max-w-4xl flex-col justify-between space-y-4 px-4 font-geologica xl:flex-row xl:space-y-0 xl:px-0">
	<section id="name-desc">
		<h1 class="text-4xl font-extrabold tracking-tight text-secondary" id="name">
			{data.project.name}
		</h1>
		<section class="prose items-center text-2xl">
			<p class="text-secondary" id="description">
				{data.project.description}
			</p>
		</section>

		<section class="mt-8">
			<h2 class="text-2xl font-bold tracking-tight text-secondary">Contributors</h2>
			<div class="mt-1 flex flex-wrap items-center gap-2">
				{#each data.project.people as contributor}
					<p class="badge badge-neutral">{contributor.nickname} ({contributor.role})</p>
				{/each}
			</div>
		</section>
	</section>
</section>
