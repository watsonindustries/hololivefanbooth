<script lang="ts">
	import { Kofi } from '@steeze-ui/simple-icons';
	import { Icon } from '@steeze-ui/svelte-icon';

	export let href = 'https://ko-fi.com/dominik_k/goal?g=37';
</script>

<a
	{href}
	class="btn btn-secondary btn-lg rounded-full px-8 gap-2 border-0 hover:scale-105 transition-all"
>
	<Icon src={Kofi} size="24" />
	Support Us on Ko-Fi</a
>
