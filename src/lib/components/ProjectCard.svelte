<script lang="ts">
	import { Carousel } from 'flowbite-svelte';

	export let project = {
		id: '',
		name: 'Project',
		description: '',
		people: [
			{
				id: '',
				nickname: 'Contributor',
				role: ''
			}
		],
		media: [
			{
				url: ''
			}
		]
	};

	export const images = project.media.map((media) => ({
		src: media.url,
		alt: '',
		title: ''
	}));
</script>

<div
	class="card min-w-60 justify-end bg-secondary shadow-xl transition-colors duration-300 hover:bg-secondary-focus">
	<a href={`/projects/${project.id}`}>
		{#if project.media.length > 0}
			<div class="min-h-60" id="project-preview-container-{project.name.toLowerCase()}">
				<Carousel {images} duration={5000} let:Indicators>
					{#if project.media.length > 1}
						<Indicators />
					{/if}
				</Carousel>
			</div>
		{/if}
		<div class="card-body font-geologica" id="project-info-{project.name.toLowerCase()}">
			<h2 class="card-title text-4xl font-bold tracking-tight text-secondary-content">
				{project.name}
			</h2>
			<p class="text-lg text-secondary-content">
				{project.description}
			</p>
			<div class="card-actions mt-auto justify-start">
				<span class="text-secondary-content">Contributors: </span>
				{#each project.people.slice(0, 3) as contributor}
					<span><p class="badge badge-neutral">{contributor.nickname}</p></span>
				{/each}
				{#if project.people.length > 3}
					<span class="text-secondary-content">and more</span>
				{/if}
			</div>
		</div>
	</a>
</div>
