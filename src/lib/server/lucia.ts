import lucia from 'lucia-auth';
import prisma from '@lucia-auth/adapter-prisma';
import github from '@lucia-auth/oauth/github';
import twitch from '@lucia-auth/oauth/twitch';
import { PrismaClient } from '@prisma/client';
import { dev } from '$app/environment';
import {
	PUBLIC_GITHUB_CLIENT_ID,
	PUBLIC_TWITCH_CLIENT_ID,
	PUBLIC_TWITCH_REDIRECT_URI,
} from '$env/static/public';
import { GITHUB_CLIENT_SECRET, TWITCH_CLIENT_SECRET } from '$env/static/private';

const client = new PrismaClient();

export const auth = lucia({
	adapter: prisma(client),
	env: dev ? 'DEV' : 'PROD',
});

export const githubAuth = github(auth, {
	clientId: PUBLIC_GITHUB_CLIENT_ID || '',
	clientSecret: GITHUB_CLIENT_SECRET || '',
});

export const twitchAuth = twitch(auth, {
	clientId: PUBLIC_TWITCH_CLIENT_ID || '',
	clientSecret: TWITCH_CLIENT_SECRET || '',
	forceVerify: false,
	redirectUri: PUBLIC_TWITCH_REDIRECT_URI || '',
});

export type Auth = typeof auth;
