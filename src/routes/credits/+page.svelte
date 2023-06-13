<script lang="ts">
	const credits = [
		{ name: 'Dominik K', role: 'Fan Booth Organizer', link: 'https://twitter.com/Dominik_KFBeats' },
		{ name: 'Vrontis', role: 'Fan Booth Organizer', link: 'https://vrontis.dev' },
		{ name: 'Pungson Mori', role: 'Illustrator', link: 'https://twitter.com/333aalloonnHD' },
		{ name: 'SpiritSnare', role: 'Designer', link: 'https://twitter.com/Spiritsnare' },
		{
			name: 'DaniruKun',
			role: 'Web and HoloQuest App Development',
			link: 'https://twitter.com/DaniruKun'
		}
	];
</script>

<svelte:head>
	<title>Hololive Fan Booth - Credits</title>
	<meta name="description" content="Credits to people that helped with the booth." />
</svelte:head>

<h1 class="text-7xl text-primary font-bold text-center my-6">Credits</h1>

<div class="space-y-4">
	{#each credits as { name, role, link }}
		<div class="flex flex-col items-center justify-center space-y-2">
			<a
				href={link}
				class="text-2xl font-semibold text-primary transition-colors hover:text-primary-focus"
				>{name}</a>
			<p class="font-semibold text-secondary">{role}</p>
		</div>
	{/each}
	<br />
	<p class="text-2xl font-semibold text-primary text-center">...and many others!</p>
</div>
