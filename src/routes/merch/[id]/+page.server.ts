import { HOLOENFANS_CMS_API_KEY } from '$env/static/private';
import HoloENFansClient from '../../../cms';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const client = new HoloENFansClient(HOLOENFANS_CMS_API_KEY);
	const { id } = params;

	const resp = await client.get(`/api/fanmerch/${id}`, { depth: 1 });

	if (resp) {
		return { merchItem: resp };
	}

	return {};
}) satisfies PageServerLoad;
