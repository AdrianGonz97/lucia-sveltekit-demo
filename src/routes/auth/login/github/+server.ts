import { githubAuth, auth } from '$lib/server/lucia';
import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url, locals }) => {
	const code = url.searchParams.get('code');

	if (!code) {
		throw error(400, 'Missing code');
	}

	const { existingUser, createUser, providerUser } = await githubAuth.validateCallback(code);

	const user =
		existingUser ||
		(await createUser({
			username: providerUser.login,
		}));

	const session = await auth.createSession(user.userId);

	locals.setSession(session);

	throw redirect(302, '/');
};
