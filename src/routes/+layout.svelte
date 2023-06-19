<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import '../app.postcss';
	const title = 'Hololive Fan Booth';
	const description = 'A Hololive Fan Booth by fans, for fans.';

	import Navigation from '$lib/components/Navigation.svelte';
	import type { LayoutData } from './$types';

	import { MetaTags } from 'svelte-meta-tags';

	export let data: LayoutData;
</script>

<Navigation />

<MetaTags
	openGraph={{
		type: 'website',
		url: data.host,
		title: title + ' for DoKomi 2023',
		description: description,
		images: [
			{
				url: data.thumbnailImgURL,
				width: 1200,
				height: 800,
				alt: 'Hololive Fan Booth'
			}
		]
	}}
	twitter={{
		cardType: 'summary_large_image'
	}}
	additionalMetaTags={[
		{
			property: 'og:image:secure_url',
			content: data.thumbnailImgURL
		},
		{
			property: 'twitter:image:src',
			content: data.thumbnailImgURL
		}
	]} />

<slot />

<Footer />
