<script lang="ts">
	import { getUser } from '@lucia-auth/sveltekit/client';

	const user = getUser();
</script>

<h1>Profile for {$user?.userId}</h1>
<h2>This is a protected route!</h2>
