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
		}
	];
</script>

<svelte:head>
	<title>Hololive Fan Booth - Contact</title>
	<meta name="description" content="Contact the Hololive Dokomi 2023 fan booth organizers." />
</svelte:head>

<div class="bg-shapes bg-secondary">
	<div class="hero min-h-screen backdrop-blur-sm">
		<div
			class="hero-content flex-col lg:flex-row-reverse bg-primary w-full sm:w-fit rounded-sm shadow-primary">
			<div class="space-y-8 py-10 sm:p-40 flex flex-col">
				<h1 class="text-8xl text-center font-bold text-secondary">Contact us!</h1>
				<a
					href={contactFormURL}
					class="btn btn-secondary btn-lg btn-outline max-w-xs mx-auto rounded-full transition duration-500">
					General Inquiries
				</a>
				<a
					href="mailto:{contactEmail}"
					class="btn btn-secondary btn-lg btn-outline max-w-xs mx-auto rounded-full transition duration-500">
					Collaboration
				</a>
				<h2 class="text-6xl text-center font-bold text-secondary">Staff</h2>
				<div class="mx-auto space-y-2">
					{#each staffTwitter as { handle }}
						<a
							href={`https://twitter.com/${handle}`}
							class="flex items-center gap-2 link link-hover link-secondary transition duration-500 justify-center">
							<Icon src={Twitter} size="20px" />
							{handle}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
