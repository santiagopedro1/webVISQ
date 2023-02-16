<script lang="ts">
	import '../app.css'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<main class={data.theme === 'dark' ? 'dark' : ''}>
	<slot />
</main>
