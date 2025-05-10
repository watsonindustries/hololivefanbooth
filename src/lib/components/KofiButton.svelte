<script lang="ts">
	import { Kofi } from '@steeze-ui/simple-icons';
	import { Icon } from '@steeze-ui/svelte-icon';

	interface Props {
		href?: string;
	}

	let { href = 'https://ko-fi.com/dominik_k/goal?g=57' }: Props = $props();
</script>

<a
	{href}
	class="btn btn-secondary btn-lg gap-2 rounded-full border-0 px-8 font-geologica transition-all hover:scale-105">
	<Icon src={Kofi} size="24" />
	Support Us on Ko-Fi</a>
