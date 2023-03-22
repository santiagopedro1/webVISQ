<script lang="ts">
	import MainMenu from '$components/mainMenu.svelte'
	import AppToolbar from '$components/appToolbar.svelte'
	import { Menu } from 'lucide-svelte'

	let dropdown = false
</script>

<div class="relative h-screen text-black dark:text-white">
	<div class="relative z-10 flex justify-between p-4">
		<button
			class="rounded-md bg-white px-3 outline outline-1 outline-neutral-500 dark:bg-neutral-800"
			on:click={() => (dropdown = !dropdown)}
		>
			<Menu size="16" />
		</button>
		<AppToolbar />
	</div>

	{#if dropdown}
		<div class="relative inset-0 z-10">
			<MainMenu />
		</div>
	{/if}

	<canvas class="absolute inset-0 h-screen w-screen bg-neutral-50 dark:bg-neutral-900" />
</div>
