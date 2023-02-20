<script lang="ts">
	import MainMenu from '$components/mainMenu.svelte'
	import AppToolbar from '$components/appToolbar.svelte'
	import hamburger from '$icons/hamburger.svg'

	let dropdown = false
</script>

<div class="h-screen text-black dark:bg-neutral-900 dark:text-white">
	<div class="flex justify-between p-4">
		<button
			class="rounded-md border border-neutral-600 bg-white p-2 dark:bg-neutral-800"
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
		<MainMenu />
	{/if}
</div>
