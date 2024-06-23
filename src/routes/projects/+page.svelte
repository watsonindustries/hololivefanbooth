<script lang="ts">
	import type { PageData } from './$types';
	import Pagination from '$lib/components/Pagination.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Hololive Fan Booth - Projects</title>
	<meta name="description" content="A list of projects showcased at the booth" />
</svelte:head>

<section class="mx-auto mt-6 space-y-12 px-6 xl:max-w-5xl">
	<h1 class="text-center font-geologica text-7xl font-extrabold tracking-tighter text-primary">
		Projects
	</h1>
	<section class="prose items-center font-geologica text-xl">
		<p class="text-secondary">Here you can find all the projects showcased at the booth.</p>
		<p class="text-secondary">Click on the card to view more details.</p>
	</section>

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" id="merch-grid-container">
		{#each data.projects as project}
			<ProjectCard {project} />
		{:else}
			Nothing found...
		{/each}
	</div>

	<section class="flex justify-center" id="pagination">
		<Pagination totalPages={data.totalPages} currentPage={data.page} />
	</section>
</section>
