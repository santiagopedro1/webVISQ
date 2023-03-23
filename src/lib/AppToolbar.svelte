<script lang="ts">
	import { MousePointer, Play, Square, ArrowRight } from 'lucide-svelte'

	import { selectedTool, isSimulating } from '$stores'

	const options = [
		{
			id: 'select',
			icon: MousePointer,
			title: 'Selecionar',
			checked: true
		},
		{
			id: 'link',
			icon: ArrowRight,
			title: 'Criar elo'
		}
	]
	$: isSimulating.set(isRunning)

	let isRunning = false
</script>

<ul
	class="mx-auto flex items-center space-x-2 rounded-md bg-gray-100 p-1 outline outline-1 outline-neutral-500 dark:bg-neutral-800"
>
	{#each options as option}
		<li>
			<input
				type="radio"
				name="tools"
				id={option.id}
				class="peer hidden"
				checked={option.checked}
				on:change={() => selectedTool.set(option.id)}
			/>
			<label
				for={option.id}
				class="block cursor-pointer select-none rounded-md p-2 hover:bg-neutral-300 peer-checked:bg-indigo-400 peer-checked:bg-opacity-80 peer-checked:hover:bg-indigo-600 dark:hover:bg-neutral-600"
				title={option.title}
			>
				<svelte:component
					this={option.icon}
					size="16"
				/>
			</label>
		</li>
	{/each}

	<div class="h-4 w-px bg-neutral-700" />

	<li>
		<input
			type="checkbox"
			name="commands"
			id="state"
			class="peer hidden"
			on:change={() => (isRunning = !isRunning)}
		/>
		<label
			for="state"
			class="block cursor-pointer select-none rounded-md p-2 hover:bg-green-500 peer-checked:bg-red-600 peer-checked:bg-opacity-80 peer-checked:hover:bg-red-600"
			title={isRunning ? 'Parar' : 'Iniciar'}
		>
			{#if isRunning}
				<Square size="16" />
			{:else}
				<Play size="16" />
			{/if}
		</label>
	</li>
</ul>
