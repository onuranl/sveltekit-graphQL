<script>
	import './styles.css';
	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<div class="app">
	<main>
		<slot />
	</main>
	<SvelteToast />
</div>
