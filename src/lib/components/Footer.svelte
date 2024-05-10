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

<footer class="footer footer-center my-8 bg-base-100 p-4 font-geologica text-base-content">
	<div class="space-y-8">
		<div class="grid grid-cols-4 divide-x-2 divide-slate-500 text-lg" id="footer-links">
			{#each links as link}
				<a
					href={link.href}
					class="duration-400 link-hover link-secondary link px-6 text-center font-medium transition ease-in-out"
					>{link.name}</a>
			{/each}
		</div>

		<p id="copyright">
			Copyright © 2023 - Powered by
			<a href="https://github.com/watsonindustries" class="link">Watson Industries</a> - Not
			affiliated with <a href="https://cover-corp.com" class="link">COVER Corp</a>
		</p>
	</div>
</footer>
