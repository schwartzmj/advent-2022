<script lang="ts">
	import Syntax from '$components/Syntax.svelte';
	import Day1 from '../../../days/1';
	import Day1Raw from '../../../days/1/index.ts?raw';
</script>

<h1>Day 1</h1>
<button on:click={() => Day1()}>Run</button>
<Syntax language="typescript" code={Day1Raw} />
