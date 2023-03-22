<script lang="ts">
	import { appTheme } from '$lib/stores'
	import '../app.css'
	import type { PageData } from './$types'

	export let data: PageData

	if (data.theme === 'dark') appTheme.set('dark')
</script>

<main class={data.theme === 'dark' ? 'dark' : ''}>
	<slot />
</main>
