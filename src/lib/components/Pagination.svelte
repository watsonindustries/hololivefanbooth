<script lang="ts">
	export let totalPages: number;
	export let currentPage = 1;
</script>

<div class="join">
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
