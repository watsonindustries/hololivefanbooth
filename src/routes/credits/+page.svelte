<script lang="ts">
	const credits = [
		{ name: 'Dominik K', role: 'Fan Booth Organizer', link: 'https://twitter.com/Dominik_KFBeats' },
		{ name: 'Vrontis', role: 'Fan Booth Organizer', link: 'https://vrontis.dev' },
		{ name: 'Pungson Mori', role: 'Illustrator', link: 'https://twitter.com/333aalloonnHD' },
		{ name: 'SpiritSnare', role: 'Designer', link: 'https://twitter.com/Spiritsnare' },
		{
			name: 'danirukun',
			role: 'Web and HoloQuest App Development',
			link: 'https://twitter.com/DaniruKun'
		},
		{ name: 'CenTdemeern1', role: 'Web Development', link: 'https://linktr.ee/centdemeern1' },
		{
			name: 'Wesleydm1999',
			role: 'Project Management',
			link: 'https://x.com/wesleydm1999'
		},
		{ name: 'Elmi', role: 'Graphic Design and Art', link: 'https://twitter.com/Elmi39Project' }
	];

	const creditsGrouped = credits.map(({ name, link, role }) => [{ name, link }, { role }]).flat();
</script>

<svelte:head>
	<title>Hololive Fan Booth - Credits</title>
	<meta name="description" content="Credits to people that helped with the booth." />
</svelte:head>

<h1 class="text-7xl text-primary font-bold text-center my-6 font-geologica tracking-tighter">
	Credits
</h1>

<div class="space-y-4 font-geologica">
	<div class="grid grid-cols-2 gap-4">
		{#each creditsGrouped as credit}
			<div class="flex flex-row text-xl space-x-4">
				{#if credit.name}
					<a
						href={credit.link}
						class="text-primary transition-colors hover:text-primary-focus ml-auto">
						{credit.name}
					</a>
				{:else if credit.role}
					<p class="text-secondary text-left">{credit.role}</p>
				{/if}
			</div>
		{/each}
	</div>
	<br />
	<p class="text-2xl font-semibold text-primary text-center">...and many others!</p>
</div>
