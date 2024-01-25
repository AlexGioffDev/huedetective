<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
  
  import {setImage} from '$lib/utility/themeFunctions';

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
</style>

