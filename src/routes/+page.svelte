<script lang="ts">
	import MainMenu from '$components/mainMenu.svelte'
	import AppToolbar from '$components/appToolbar.svelte'
	import hamburger from '$icons/hamburger.svg'

	let dropdown = false
</script>

<div class="relative h-screen text-black dark:text-white">
	<div class="relative z-10 flex justify-between p-4">
		<button
			class="rounded-md border border-neutral-600 bg-white px-2 py-1 dark:bg-neutral-800"
			on:click={() => (dropdown = !dropdown)}
		>
			<img
				src={hamburger}
				alt="An icon of a menu, representing the option to open the main menu"
				class="h-4 w-4 dark:invert"
			/>
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
