import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	redirect(
		302,
		'https://danirukun.notion.site/Europe-Guide-for-DoKomi-291afbcf7b6b4a0d91215cf9bece04fd?pvs=4'
	);
}) satisfies PageServerLoad;
