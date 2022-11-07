<script lang="ts">
	import type { PageData } from './$types';
	import { signOut } from '@lucia-auth/sveltekit/client';
	import { invalidateAll } from '$app/navigation';

	export let data: PageData;
</script>

<h1>Welcome to SvelteKit + Lucia</h1>

{#if data.user}
	<p>Hi {data.user.userId}!</p>
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
