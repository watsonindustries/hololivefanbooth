<script lang="ts">
	import { fade } from 'svelte/transition';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { QrCode, XCircle } from '@steeze-ui/heroicons';

	import { holoquestURL } from '../../const';
	import Hqqr from './HQQR.svelte';

	let showDialog = $state(false);

	function openDialog() {
		showDialog = true;
	}

	function closeDialog() {
		showDialog = false;
	}

	const hqRevealed = true;
</script>

{#if hqRevealed}
	<div class="block sm:hidden">
		<!-- visible on small (mobile) screens and hidden on larger screens -->
		<a class="btn btn-primary rounded-full border-2 border-secondary lg:hidden" href={holoquestURL}
			>Open Holoquest App</a>
	</div>

	<div class="hidden sm:block">
		<!-- hidden on small (mobile) screens and visible on larger screens -->
		<button class="btn-xl btn btn-secondary gap-2 rounded-full text-lg" onclick={openDialog}>
			<Icon src={QrCode} size="24px" />
			Get holoquest app</button>
	</div>
{:else}
	<p class="font-geologica text-xl text-secondary">
		Available <b>soon!</b> Check here for updates.
	</p>
{/if}

<!-- Modal -->
{#if showDialog}
	<dialog
		class="fixed inset-0 z-10 flex items-center justify-center"
		open
		transition:fade={{ duration: 300 }}>
		<div class="modal modal-open">
			<div class="modal-box space-y-4">
				<button class="btn btn-square btn-ghost absolute right-2 top-2" onclick={closeDialog}
					><Icon src={XCircle} size="24"></Icon></button>
				<h2 class="font-geologica text-xl font-bold text-primary">Get the HoloQuest app</h2>
				<p class="font-geologica">Scan the QR code with your smartphone</p>
				<Hqqr />
				<div class="space-y-4 font-geologica">
					<p>or visit</p>
					<a href={holoquestURL} class="link-secondary link">{holoquestURL}</a>
				</div>

				<div class="modal-action"></div>
			</div>
		</div>
	</dialog>
{/if}
