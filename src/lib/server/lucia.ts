import lucia from 'lucia-auth';
import prisma from '@lucia-auth/adapter-prisma';
import github from './oauth/github';
import { PrismaClient } from '@prisma/client';
import { dev } from '$app/environment';
import { PUBLIC_GITHUB_CLIENT_ID } from '$env/static/public';
import { GITHUB_CLIENT_SECRET } from '$env/static/private';

const client = new PrismaClient();

export const auth = lucia({
	adapter: prisma(client),
	env: dev ? 'DEV' : 'PROD',
});

export const githubAuth = github(auth, {
	clientId: PUBLIC_GITHUB_CLIENT_ID || '',
	clientSecret: GITHUB_CLIENT_SECRET || '',
});

export type Auth = typeof auth;
