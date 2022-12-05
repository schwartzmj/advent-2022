<script lang="ts">
	import Day3Part1 from '../../../days/3/part-1';
	import Day3Part2 from '../../../days/3';
	import Day3Part1Raw from '../../../days/3/part-1.ts?raw';
	import Day3Part2Raw from '../../../days/3/index.ts?raw';
	import Syntax from '$components/Syntax.svelte';
</script>

<h1>Day 3</h1>
<button on:click={() => Day3Part1()}>Run Part 1</button>
<button on:click={() => Day3Part2()}>Run Part 2</button>
<details>
	<summary> Part 1 </summary>
	<Syntax language="typescript" code={Day3Part1Raw} />
</details>
<details>
	<summary> Part 2 </summary>
	<Syntax language="typescript" code={Day3Part2Raw} />
</details>
