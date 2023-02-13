<script lang="ts">
	import MainMenu from '../components/mainMenu.svelte'
	let dropdown = false
</script>

<div class="h-screen bg-neutral-900">
	<div class="flex justify-between p-4">
		<button
			class="rounded-md border border-neutral-600 bg-neutral-800 p-2"
			on:click={() => (dropdown = !dropdown)}
		>
			<img
				src="/src/icons/hamburger.svg"
				alt="menu icon"
				class=" h-6 w-6 invert"
			/>
		</button>
		<div class="mx-auto w-80 rounded-md bg-green-500" />
	</div>

	{#if dropdown}
		<MainMenu />
	{/if}
</div>
