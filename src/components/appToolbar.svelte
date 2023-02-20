<script lang="ts">
	import cursor from '$icons/cursor.svg'
	import play from '$icons/play.svg'
	import pause from '$icons/pause.svg'
	import arrow from '$icons/arrow.svg'

	let isRunning = false
</script>

<ul class="mx-auto flex items-center space-x-2 rounded-md p-1 dark:bg-neutral-800">
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
			class="block cursor-pointer select-none rounded-md p-2 peer-checked:bg-indigo-600 peer-checked:bg-opacity-80"
		>
			<img
				src={cursor}
				alt="The select tool"
				class="h-4 w-4 dark:invert"
			/>
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
			class="block cursor-pointer select-none rounded-md p-2 peer-checked:bg-indigo-600 peer-checked:bg-opacity-80"
		>
			<img
				src={arrow}
				alt="The select tool"
				class="h-4 w-4 dark:invert"
			/>
		</label>
	</li>

	<div class="h-4 w-px bg-neutral-700" />

	<li>
		<input
			type="checkbox"
			name="commands"
			id="state"
			class="peer hidden"
			on:change={() => {
				isRunning = !isRunning
			}}
		/>
		<label
			for="state"
			class="block cursor-pointer select-none rounded-md p-2 peer-checked:bg-teal-600 peer-checked:bg-opacity-80"
		>
			<img
				src={isRunning ? pause : play}
				alt="The select tool"
				class="h-4 w-4 dark:invert"
			/>
		</label>
	</li>
</ul>

<style>
	input:not(:checked) + label:hover {
		background-color: #3d3d3d;
	}
</style>
