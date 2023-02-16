<script lang="ts">
	import { appTheme } from '../lib/stores'
	import { fly } from 'svelte/transition'

	let theme: string

	function toggleTheme() {
		theme == 'dark' ? appTheme.light() : appTheme.dark()
		switch (theme) {
			case 'dark':
				document.getElementsByTagName('main')[0].classList.add('dark')
				document.cookie = `theme=${theme}; max-age=31536000; path=/; samesite=strict;`
				break
			case 'light':
				document.getElementsByTagName('main')[0].classList.remove('dark')
				document.cookie = `theme=${theme}; max-age=31536000; path=/; samesite=strict;`
				break
		}
	}

	appTheme.subscribe((value) => (theme = value))
</script>

<div
	class="ml-4 -mt-2 h-fit w-fit rounded-md border border-neutral-600 px-3 py-1 dark:bg-neutral-800"
	transition:fly={{ y: -10, duration: 100 }}
>
	<ul>
		<li>
			<button
				class="flex w-full items-center space-x-4 rounded-md p-2 hover:bg-neutral-200 dark:hover:bg-slate-500"
				on:click={toggleTheme}
			>
				{#if theme == 'dark'}
					<img
						src="/src/icons/sun.svg"
						alt="An icon of a sun, representing the option to change the website's color theme to light"
						class="h-4 w-4 dark:invert"
					/>
					<span
						class="text-sm"
						id="light">Light Mode</span
					>
				{:else}
					<img
						src="/src/icons/moon.svg"
						alt="An icon of a moon, representing the option to change the website's color theme to dark"
						class="h-4 w-4 dark:invert"
					/>
					<span
						class="text-sm"
						id="dark">Dark Mode</span
					>
				{/if}
			</button>
		</li>
		<li>MUITO FODA</li>
	</ul>
</div>
