import { HOLOENFANS_CMS_API_KEY } from '$env/static/private';
import HoloENFansClient from '../../cms';
import type { PageServerLoad } from './$types';
import type { Person } from './../../custom';

export const load = (async () => {
	const client = new HoloENFansClient(HOLOENFANS_CMS_API_KEY);

	const resp = await client.get('/api/people', {});
	const { docs: people } = resp;

	return { people: people as Person[] };
}) satisfies PageServerLoad;
