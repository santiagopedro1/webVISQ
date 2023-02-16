<script lang="ts">
	import MainMenu from '../components/mainMenu.svelte'

	let dropdown = false
</script>

<div class="h-screen text-black dark:bg-neutral-900 dark:text-white">
	<div class="flex justify-between p-4">
		<button
			class="rounded-md border border-neutral-600 bg-white p-2 dark:bg-neutral-800"
			on:click={() => (dropdown = !dropdown)}
		>
			<img
				src="/src/icons/hamburger.svg"
				alt="menu icon"
				class=" h-6 w-6 dark:invert"
			/>
		</button>
		<div class="mx-auto w-80 rounded-md bg-green-500" />
	</div>

	{#if dropdown}
		<MainMenu />
	{/if}
</div>
