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
		
		<div class="text-lg divide-x-2 divide-slate-500 grid grid-cols-4" id="footer-links">
			{#each links as link}
					<a
						href={link.href}
						class="font-medium link link-secondary link-hover transition duration-400 text-center ease-in-out px-6"
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
