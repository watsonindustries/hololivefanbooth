<script lang="ts">
	import { Hamburger } from 'svelte-hamburgers';
	import Menu from './Menu.svelte';

	let open = false;

	export const links = [
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

<svelte:head />

<div class="flex justify-end md:hidden">
	<Hamburger bind:open --color="#73dcff" />
</div>

<div class="hidden md:flex justify-start space-x-4">
	<ul class="menu menu-horizontal px-1 text-secondary font-semibold dark:text-primary">
		{#each links as link}
			<li><a href={link.href} class="hover:text-primary-focus">{link.name}</a></li>
		{/each}
	</ul>
</div>

<Menu bind:open {links} />
