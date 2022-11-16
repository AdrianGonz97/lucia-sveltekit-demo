<script lang="ts">
	import type { PageData } from './$types';
	import { getUser, signOut } from '@lucia-auth/sveltekit/client';
	import { invalidateAll } from '$app/navigation';

	export let data: PageData;

	const user = getUser();
</script>

<h1>Welcome to SvelteKit + Lucia</h1>

{#if $user}
	<p>Hi {$user.userId}!</p>
	<button
		on:click={() => {
			signOut();
			invalidateAll();
		}}>Sign out</button
	>
	<a href="/profile">Go to profile!</a>
{:else}
	<a href={data.githubAuthUrl}>Connect With Github</a>
	<a href={data.twitchAuthUrl}>Connect With Twitch</a>
{/if}
