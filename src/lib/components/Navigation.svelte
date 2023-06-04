<script lang="ts">
	import {Hamburger} from 'svelte-hamburgers';
	import Menu from './Menu.svelte';

	let open = false;
</script>

<svelte:head />

<div class="flex justify-end">
	<Hamburger bind:open --color="#73dcff" />
</div>

<Menu bind:open />
