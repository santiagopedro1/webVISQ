<script>
	import { fly } from 'svelte/transition'
</script>

<div
	class="ml-4 -mt-2 h-fit w-fit rounded-md border border-neutral-600 bg-neutral-800 px-3 py-1"
	transition:fly={{ y: -10, duration: 100 }}
>
	<ul class="space-y-2 text-white">
		<li>FOda1</li>
		<li>FOda1</li>
		<li>FOda1</li>
		<li>FOda1</li>
		<li>FOda1</li>
		<li>FOda1</li>
	</ul>
</div>
