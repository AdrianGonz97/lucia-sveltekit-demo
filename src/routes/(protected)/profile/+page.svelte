<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Profile for {data.user.userId}</h1>
<h2>This is a protected route!</h2>
