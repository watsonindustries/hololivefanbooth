import { HOLOENFANS_CMS_API_KEY } from '$env/static/private';
import HoloENFansClient from '../../cms';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	const client = new HoloENFansClient(HOLOENFANS_CMS_API_KEY);

	const resp = await client.get('/api/fanmerch');
	const { docs: merch } = resp;

	return { merch };
}) satisfies LayoutServerLoad;
