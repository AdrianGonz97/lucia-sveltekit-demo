import type { PageServerLoad } from './$types';
import { githubAuth } from '$lib/server/lucia';

export const load: PageServerLoad = async ({ locals }) => {
	const { session, user } = await locals.getSessionUser();

	return {
		authUrl: githubAuth.getAuthorizationUrl(),
		session,
		user,
	};
};
