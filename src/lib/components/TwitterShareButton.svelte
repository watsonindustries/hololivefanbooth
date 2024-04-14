<script lang="ts">
	import { Twitter } from '@steeze-ui/simple-icons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { twitterIntentURL } from '../../const';
</script>

<a
	class="btn bg-[#1DA1F2] hover:bg-[#0176c8] hover:scale-105 btn-lg rounded-full gap-2 text-xl text-base-100 font-bold font-geologica border-0"
	href={twitterIntentURL}>
	<Icon src={Twitter} size="24" /> #hololivefanbooth
</a>
