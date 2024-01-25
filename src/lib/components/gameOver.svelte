<script lang="ts">
  import {fly} from 'svelte/transition';
  import type { ColorI } from '$lib/utility/colorsFunction';
  export let message: string;
  export let color: ColorI;
  export let colorChoiced: ColorI;
  export let reset: () => void;
</script>

<div class="game-over" in:fly={{ y: 200 }} out:fly={{ y: 200 }}>
	<div>
		<h1>{message}</h1>
		<div>
			<h4>Color</h4>
			<div
				style="width: 40px; height: 40px; background-color: rgb({color.r}, {color.g}, {color.b}); border-radius: 50%"
			/>
			<h4>R: {color.r} G: {color.g} B: {color.b}</h4>
		</div>
		<div>
			<h4>Your choice:</h4>
			<div
				style="width: 40px; height: 40px; background-color: rgb({colorChoiced.r}, {colorChoiced.g}, {colorChoiced.b}); border-radius: 50%"
			/>
			<h4>R: {colorChoiced.r} G: {colorChoiced.g} B: {colorChoiced.b}</h4>
		</div>
	</div>
	<button class="pico-background-pink-500" on:click={reset}>Play Again!</button>
</div>
