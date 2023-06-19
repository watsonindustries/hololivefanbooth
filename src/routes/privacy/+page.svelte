<script lang="ts">
	import type { PageData } from './$types';

	const contactEmail = 'hololivefanbooth@gmail.com';

	export let data: PageData;
</script>

<svelte:head>
	<title>Hololive Fan Booth - Privacy Policy</title>
</svelte:head>

<template>
	<div class="bg-white py-10 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
		<h1 class="text-3xl font-bold mb-6">Privacy Policy</h1>

		<div class="mb-8">
			<p class="mb-4">
				This Privacy Policy describes how we collect, use, and share information about you when you
				use our website. By using our website, you agree to the collection and use of information in
				accordance with this Privacy Policy.
			</p>
			<p>
				If you have any questions or concerns about this Privacy Policy, please contact us at <a
					href="mailto:{contactEmail}"
					class="underline">{contactEmail}</a
				>.
			</p>
		</div>

		<h2 class="text-xl font-bold mb-4">Information We Collect</h2>
		<p class="mb-6">
			We only collect anonymous data about your usage of our website through Plausible analytics. We
			do not collect any personally identifiable information about you. Plausible analytics only
			collects and processes data from your web browser, including your IP address, the date and
			time of your visit, the pages you visit, and the website that referred you to our website.
			This data is collected and processed in a way that is GDPR compliant and hosted in the EU.
		</p>

		<h2 class="text-xl font-bold mb-4">Cookies</h2>
		<p class="mb-6">
			We may also use cookies for functional purposes only. Cookies are small text files that are
			stored on your device when you use our website. They are used to enhance your user experience
			and make it more efficient. We do not use cookies for tracking or advertising purposes.
		</p>

		<h2 class="text-xl font-bold mb-4">How We Use Your Information</h2>
		<p class="mb-6">
			We use the information collected through Plausible analytics to improve our website and
			provide better services to you. We do not share this information with third parties or use it
			for any other purposes.
		</p>

		<h2 class="text-xl font-bold mb-4">How We Protect Your Information</h2>
		<p class="mb-6">
			We take reasonable measures to protect your information from unauthorized access, use, and
			disclosure. We use industry-standard encryption technologies and secure servers to protect
			your information. However, no method of transmission over the Internet or electronic storage
			is 100% secure, so we cannot guarantee absolute security.
		</p>

		<h2 class="text-xl font-bold mb-4">Your Rights</h2>
		<p class="mb-6">
			You have the right to access, modify, or delete any personal information that we may have
			collected about you. You can contact us at <a href="mailto:{contactEmail}" class="underline"
				>{contactEmail}</a> to exercise these rights.
		</p>

		<h2 class="text-xl font-bold mb-4">Changes to This Privacy Policy</h2>
		<p class="mb-6">
			We may update this Privacy Policy from time to time. We will notify you of any changes by
			posting the new Privacy Policy on this page. You are advised to review this Privacy Policy
			periodically for any changes.
		</p>
	</div>
</template>
