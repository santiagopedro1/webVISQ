<script lang="ts">
	import { appTheme } from '$lib/stores'
	import { fly } from 'svelte/transition'

	import { Sun, Moon, FolderOpen, Save } from 'lucide-svelte'

	const options = [
		{
			id: 'Abrir',
			icon: FolderOpen
		},
		{
			id: 'Salvar',
			icon: Save
		}
	]

	let theme: string

	function toggleTheme() {
		theme == 'dark' ? appTheme.set('light') : appTheme.set('dark')

		document.getElementsByTagName('main')[0].classList.toggle('dark')
		document.cookie = `theme=${theme}; max-age=31536000; path=/; samesite=lax;`
	}

	appTheme.subscribe((value) => (theme = value))
</script>

<div
	class="ml-4 -mt-2 h-fit w-fit rounded-md border border-neutral-600 p-2 dark:bg-neutral-800"
	transition:fly={{ y: -10, duration: 100 }}
>
	<ul>
		{#each options as option}
			<li>
				<button
					class="flex w-full items-center space-x-4 rounded-md p-2 hover:bg-neutral-200 dark:hover:bg-slate-500"
					on:click={() => console.log(option.id)}
				>
					<svelte:component
						this={option.icon}
						size="16"
					/>
					<span class="text-sm">{option.id}</span>
				</button>
			</li>
		{/each}
		<div class="my-2 h-px bg-neutral-700" />
		<li>
			<button
				class="flex w-full items-center space-x-4 rounded-md p-2 hover:bg-neutral-200 dark:hover:bg-slate-500"
				on:click={toggleTheme}
			>
				{#if theme == 'dark'}
					<Sun size="16" />
					<span
						class="text-sm"
						id="light">Light Mode</span
					>
				{:else}
					<Moon size="16" />
					<span
						class="text-sm"
						id="dark">Dark Mode</span
					>
				{/if}
			</button>
		</li>
	</ul>
</div>
