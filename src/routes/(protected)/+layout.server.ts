import { error } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const { session, user } = await locals.getSessionUser();

	if (!session) throw error(401, 'Unauthorized');

	return { user };
};
