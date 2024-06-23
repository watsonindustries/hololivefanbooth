import { HOLOENFANS_CMS_API_KEY } from '$env/static/private';
import HoloENFansClient from '../../cms';
import type { LayoutServerLoad } from './$types';

export const prerender = false;

export const load = (async ({ url }) => {
	const client = new HoloENFansClient(HOLOENFANS_CMS_API_KEY);
	const page = parseInt(url.searchParams.get('page') || '1');

	const resp = await client.get('/api/external-projects', { page, limit: 10 });
	const { docs: projects, totalPages } = resp;

	return { projects, totalPages, page };
}) satisfies LayoutServerLoad;
