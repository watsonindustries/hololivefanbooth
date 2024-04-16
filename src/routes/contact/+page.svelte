<script lang="ts">
	import { contactEmail, contactFormURL } from '../../const';

	import { Twitter } from '@steeze-ui/simple-icons';
	import { Icon } from '@steeze-ui/svelte-icon';

	const staffTwitter = [
		{
			handle: '@danirukun'
		},
		{
			handle: '@Dominik_KFBeats'
		},
		{
			handle: '@vrontisdev'
		},
		{
			handle: '@wesleydm1999'
		}
	];
</script>

<svelte:head>
	<title>Hololive Fan Booth - Contact</title>
	<meta name="description" content="Contact the Hololive Dokomi 2024 fan booth organizers." />
</svelte:head>

<div class="bg-shapes bg-secondary">
	<div class="hero min-h-screen backdrop-blur-sm">
		<div
			class="hero-content w-full flex-col rounded-sm bg-primary shadow-primary sm:w-fit lg:flex-row-reverse">
			<div class="flex flex-col space-y-8 py-10 font-geologica sm:p-40">
				<h1 class="text-center text-8xl font-bold tracking-tighter text-secondary">Contact us!</h1>
				<a
					href={contactFormURL}
					class="btn btn-outline btn-secondary btn-lg mx-auto max-w-xs rounded-full tracking-wide transition duration-500">
					General Inquiries
				</a>
				<a
					href="mailto:{contactEmail}"
					class="btn btn-outline btn-secondary btn-lg mx-auto max-w-xs rounded-full tracking-wide transition duration-500">
					Collaboration
				</a>
				<h2 class="text-center text-6xl font-bold tracking-tight text-secondary">Staff</h2>
				<div class="mx-auto space-y-2">
					{#each staffTwitter as { handle }}
						<a
							href={`https://twitter.com/${handle}`}
							class="link link-hover link-secondary flex items-center justify-center gap-2 transition duration-500">
							<Icon src={Twitter} size="20px" />
							{handle}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
