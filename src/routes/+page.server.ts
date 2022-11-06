import type { PageServerLoad } from './$types';
import { githubAuth } from '$lib/server/lucia';

export const load: PageServerLoad = async () => {
	return {
		authUrl: githubAuth.getAuthorizationUrl(),
	};
};
