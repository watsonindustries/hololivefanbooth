<script lang="ts">
	import { contactEmail, contactFormURL } from '../../const';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="bg-shapes bg-secondary">
	<div class="hero min-h-screen backdrop-blur-sm">
		<div
			class="hero-content flex-col lg:flex-row-reverse bg-primary w-full sm:w-fit rounded-sm shadow-primary"
		>
			<div class="space-y-8 py-10 sm:p-48 text-secondary flex flex-col">
				<h1 class="text-8xl text-center font-bold">Contact us!</h1>
				<a
					href={contactFormURL}
					class="btn btn-secondary btn-lg btn-outline max-w-xs mx-auto rounded-full transition duration-500"
				>
					General Inquiries
				</a>
				<a
					href="mailto:{contactEmail}"
					class="btn btn-secondary btn-lg btn-outline max-w-xs mx-auto rounded-full transition duration-500"
				>
					Collaboration
				</a>
			</div>
		</div>
	</div>
</div>
