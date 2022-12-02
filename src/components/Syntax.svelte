<script context="module">
	import 'highlight.js/styles/atom-one-dark.css';
</script>

<script lang="ts">
	import hljs from 'highlight.js';
	export let code: string;
	export let language: string;
</script>

<pre style="background-color: #eaeaea;">
    <code>
        {@html hljs.highlight(code, { language }).value}
    </code>
</pre>
