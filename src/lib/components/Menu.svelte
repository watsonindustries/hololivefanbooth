<script lang="ts">
	import { fly, slide } from 'svelte/transition';


	interface Props {
		open?: boolean;
		links: ArrayLike<{ name: string; href: string }>;
	}

	let { open = $bindable(false), links }: Props = $props();
</script>

{#if open}
	<div class="font-sans tracking-tighter" transition:slide={{ duration: 1000 }}>
		{#each links as link, i}
			<p transition:fly={{ y: -15, delay: 50 * i }}>
				<a
					href={link.href}
					class="link-secondary link transition-colors"
					onclick={() => (open = false)}>{link.name}</a>
			</p>
		{/each}
	</div>
{/if}

<style>
	div {
		text-align: center;
		font-size: 1.5em;
		letter-spacing: 0.15em;
		padding: 1em;
		padding-top: 0;
		color: #73dcff;
	}
	p {
		cursor: pointer;
		width: max-content;
		margin: 1rem auto;
	}
	p:hover {
		text-decoration: underline;
	}
</style>
