<script lang="ts">
	export let links = [
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
			name: 'Privacy Policy',
			href: '/privacy'
		}
	];
</script>

<footer class="footer footer-center p-4 bg-base-100 text-base-content my-8 font-geologica">
	<div class="space-y-8">
		<p class="text-lg" id="footer-links">
			{#each links as link, i}
				<a
					href={link.href}
					class="mt-2 font-medium link link-secondary link-hover transition duration-400 ease-in-out"
					>{link.name}</a>

				{#if i < links.length - 1}
					<span class="text-neutral-500 mx-2">|</span>
				{/if}
			{/each}
		</p>

		<p id="copyright">
			Copyright © 2023 - Powered by
			<a href="https://github.com/watsonindustries" class="link">Watson Industries</a> - Not
			affiliated with <a href="https://cover-corp.com" class="link">COVER Corp</a>
		</p>
	</div>
</footer>
