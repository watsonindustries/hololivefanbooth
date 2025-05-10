<script lang="ts">
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	let { people } = $derived(data);

	let creditsGrouped = $derived(people
		.map(({ nickname, links, role }) => {
			let link = links?.[0].url;
			return [{ nickname, link }, { role }];
		})
		.flat());
</script>

<svelte:head>
	<title>Hololive Fan Booth - Credits</title>
	<meta name="description" content="Credits to people that helped with the booth." />
</svelte:head>

<h1 class="my-6 text-center font-geologica text-7xl font-bold tracking-tighter text-primary">
	Credits
</h1>

<div class="space-y-4 font-geologica">
	<div class="grid grid-cols-2 gap-4">
		{#each creditsGrouped as credit}
			<div class="flex flex-row items-center space-x-4 text-xl">
				{#if credit.nickname}
					<a
						href={credit.link}
						class="ml-auto text-primary transition-colors hover:text-primary-focus">
						{credit.nickname}
					</a>
				{:else if credit.role}
					<p class="mr-4 text-left text-secondary">{credit.role}</p>
				{/if}
			</div>
		{/each}
	</div>
	<br />
	<p class="text-center text-2xl font-semibold text-primary">...and many others!</p>
</div>
