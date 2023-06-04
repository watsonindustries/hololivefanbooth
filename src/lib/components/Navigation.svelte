<script lang="ts">
	const tabs = [
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
			name: 'Support',
			href: '/#support'
		}

	];
</script>

<div class="navbar bg-base-100">
	<div class="flex-1">
		<ul class="menu menu-horizontal px-1 text-secondary font-semibold dark:text-primary">
			{#each tabs as tab}
				<li><a href={tab.href} class="hover:text-primary-focus">{tab.name}</a></li>
			{/each}
		</ul>
	</div>
</div>
