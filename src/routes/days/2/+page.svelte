<script lang="ts">
	import Day2Part1 from '../../../days/2/part-1';
	import Day2Part2 from '../../../days/2';
	import Day2Part1Raw from '../../../days/2/part-1.ts?raw';
	import Day2Part2Raw from '../../../days/2/index.ts?raw';
	import Syntax from '$components/Syntax.svelte';
</script>

<h1>Day 1</h1>
<button on:click={() => Day2Part1()}>Run Part 1</button>
<button on:click={() => Day2Part2()}>Run Part 2</button>
<details>
	<summary> Part 1 </summary>
	<Syntax language="typescript" code={Day2Part1Raw} />
</details>
<details>
	<summary> Part 2 </summary>
	<Syntax language="typescript" code={Day2Part2Raw} />
</details>
