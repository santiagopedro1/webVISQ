<script lang="ts">
	import MainMenu from '$lib/MainMenu.svelte'
	import AppToolbar from '$lib/AppToolbar.svelte'
	import { Menu } from 'lucide-svelte'

	import { selectedTool, isSimulating } from '$stores'

	let dropdown = false
</script>

<div class="relative h-screen text-black dark:text-white">
	<div class="relative z-10 flex justify-between p-4">
		<button
			class="rounded-md bg-white px-3 outline outline-1 outline-neutral-500 focus:outline-indigo-500 dark:bg-neutral-800"
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

	<div
		class="absolute inset-0 flex h-screen w-screen items-center justify-center bg-neutral-50 dark:bg-neutral-900"
	>
		<div class="flex flex-col gap-4">
			<span>Current selected tool: <b>{$selectedTool}</b></span>
			<span>Is simulation runnig: <b>{$isSimulating}</b></span>
		</div>
	</div>
</div>
