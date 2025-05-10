<script lang="ts">
	interface Props {
		totalPages: number;
		currentPage?: number;
	}

	let { totalPages, currentPage = 1 }: Props = $props();
</script>

<!-- workaround for DaisyUI pagination bug -->
<div class:join={totalPages > 1} class:rounded-l-xl={totalPages === 1} id="pagination">
	{#each { length: totalPages } as _, i}
		<a
			class="btn join-item"
			class:btn-active={i + 1 == currentPage}
			class:btn-primary={i + 1 == currentPage}
			class:text-secondary-content={i + 1 == currentPage}
			href="/merch?page={i + 1}"
			data-sveltekit-reload>{i + 1}</a>
	{/each}
</div>
