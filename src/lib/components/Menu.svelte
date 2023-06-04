<script>
	import { fly, slide } from 'svelte/transition';

	export let open = false;

	const links = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'About',
			href: '/about'
		},
		{
			name: 'Contact',
			href: '/contact'
		},
		{
			name: 'Support',
			href: '/#support'
		}
	];
</script>

{#if open}
	<div class="font-sans tracking-tighter" transition:slide={{duration: 1000}}>
			{#each links as link, i}
					<p transition:fly={{ y: -15, delay: 50 * i }}>
							<a href="{link.href}" class="link link-secondary transition-colors">{link.name}</a>
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
