<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	import { setImage } from '$lib/utility/themeFunctions';

	let img: HTMLImageElement | null;

	onMount(() => {
		img = document.querySelector('img');
		setImage(img);
	});
</script>

<header class="container-fluid group-element">
	<img bind:this={img} src="" alt="logo" />
	<h1 class="pico-color-pink-500">Hue Detective</h1>
</header>

<main class="container">
	<slot />
</main>

<style>
	.group-element {
		display: flex;
		flex-direction: column;
	}

	.group-element img {
		width: 200px;
		height: 200px;
		object-fit: cover;
	}

	@media only screen and (max-width: 768px) {
		.group-element img {
			width: 120px;
			height: 120px;
		}
	}

	@media only screen and (min-width: 810px) and (orientation: landscape) {
		.group-element img {
			width: 100px;
			height: 100px;
		}
	}

	@media only screen and (min-width: 1400px) {
		.group-element img {
			width: 150px;
			height: 150px;
		}
	}
</style>
