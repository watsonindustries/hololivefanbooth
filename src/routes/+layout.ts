import type { LayoutLoad } from './$types';

import boothLogoLarge from '$lib/assets/fanbooth-logo-large.png';

export const prerender = true;

export const load = (async ({ url }) => {
	const thumbnailImgURL = new URL(boothLogoLarge, url.origin).toString();

	return { thumbnailImgURL };
}) satisfies LayoutLoad;