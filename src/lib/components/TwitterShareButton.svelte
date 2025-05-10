<script lang="ts">
	interface Props {
		url?: string;
	}

	let { url = '#' }: Props = $props();
</script>

<a
	class="btn btn-lg gap-2 rounded-full border-0 font-geologica font-bold hover:scale-105 md:text-2xl"
	href={url}>
	<span class="font-bold">𝕏</span> #hololivefanbooth
</a>
