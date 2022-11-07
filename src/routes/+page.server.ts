import type { PageServerLoad } from './$types';
import { githubAuth, twitchAuth } from '$lib/server/lucia';

export const load: PageServerLoad = async ({ locals }) => {
	const { session, user } = await locals.getSessionUser();

	return {
		githubAuthUrl: githubAuth.getAuthorizationUrl(),
		twitchAuthUrl: twitchAuth.getAuthorizationUrl(),
		session,
		user,
	};
};
