<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Welcome to SvelteKit + Lucia</h1>
<a href={data.authUrl}>Connect With Github</a>
