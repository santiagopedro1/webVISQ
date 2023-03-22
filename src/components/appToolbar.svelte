<script lang="ts">
	import { MousePointer, Play, Square, ArrowRight } from 'lucide-svelte'

	let isRunning = false
</script>

<ul
	class="mx-auto flex items-center space-x-2 rounded-md bg-gray-100 p-1 outline outline-1 outline-neutral-500 dark:bg-neutral-800"
>
	<li>
		<input
			type="radio"
			name="tools"
			id="selectTool"
			class="peer hidden"
			checked
		/>
		<label
			for="selectTool"
			class="block cursor-pointer select-none rounded-md p-2 hover:bg-neutral-300 peer-checked:bg-indigo-400 peer-checked:bg-opacity-80 peer-checked:hover:bg-indigo-600 dark:hover:bg-neutral-600"
			title="Selecionar"
		>
			<MousePointer size="16" />
		</label>
	</li>
	<li>
		<input
			type="radio"
			name="tools"
			id="arrowTool"
			class="peer hidden"
		/>
		<label
			for="arrowTool"
			class="block cursor-pointer select-none rounded-md p-2 hover:bg-neutral-300 peer-checked:bg-indigo-400 peer-checked:bg-opacity-80 peer-checked:hover:bg-indigo-600 dark:hover:bg-neutral-600"
			title="Criar conexão"
		>
			<ArrowRight size="16" />
		</label>
	</li>

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
