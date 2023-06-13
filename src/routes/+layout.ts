import type { LayoutLoad } from './$types';
import { host } from '../config.json';

import boothLogoLarge from '$lib/assets/fanbooth-logo-large.png';

export const prerender = true;

export const load = (async () => {
	const thumbnailImgURL = new URL(boothLogoLarge, host).toString();

	return { thumbnailImgURL, host };
}) satisfies LayoutLoad;
