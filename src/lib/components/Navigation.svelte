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
			name: 'Contact Us',
			href: '/contact'
		},
		{
			name: 'Support Us',
			href: '/#support'
		},
		{
			name: 'HoloQuest',
			href: '/holoquest'
		},
		{
			name: 'Credits',
			href: '/credits'
		}
	];
</script>

<svelte:head />

<div class="flex justify-end md:hidden">
	<Hamburger bind:open --color="#73dcff" />
</div>

<div class="hidden justify-start space-x-4 align-middle md:flex">
	<ul
		class="menu menu-horizontal mx-auto px-1 font-geologica font-semibold text-secondary dark:text-primary">
		{#each links as link}
			<li><a href={link.href} class="hover:text-primary-focus">{link.name}</a></li>
		{/each}
	</ul>
</div>

<Menu bind:open {links} />
