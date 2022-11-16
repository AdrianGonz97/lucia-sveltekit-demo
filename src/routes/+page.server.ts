import type { PageServerLoad } from './$types';
import { githubAuth, twitchAuth } from '$lib/server/lucia';

export const load: PageServerLoad = async () => {
	return {
		githubAuthUrl: githubAuth.getAuthorizationUrl(),
		twitchAuthUrl: twitchAuth.getAuthorizationUrl(),
	};
};
