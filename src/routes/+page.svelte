<script lang="ts">
	import { onMount } from 'svelte';

	import { getRandomColor, similarColor, type ColorI } from '$lib/utility/colorsFunction';
  import GameOver from '$lib/components/gameOver.svelte';
  import GroupCards from '$lib/components/cards/GroupCards.svelte';

	let color: ColorI = { r: 0, g: 0, b: 0 };
	let similarColors: ColorI[] = Array(6).fill({ r: 0, g: 0, b: 0 });
	let gameOver: boolean = false;
	let message: string = '';
	let colorChoiced: ColorI = { r: 0, g: 0, b: 0 };

	const reset = () => {
		gameOver = false;
		message = '';
		colorChoiced = { r: 0, g: 0, b: 0 };
		color = getRandomColor();
		similarColors = similarColor(color);
	};

	const checkColor = (colorToCheck: ColorI) => {
		gameOver = true;
		colorChoiced = colorToCheck;
		if (colorToCheck.r === color.r && colorToCheck.g === color.g && colorToCheck.b === color.b) {
			message = 'You Win';
		} else {
			message = 'You lose';
		}
	};

	onMount(() => {
		color = getRandomColor();
		similarColors = similarColor(color);
	});
</script>

{#if gameOver}
	<GameOver message={message} color={color} colorChoiced={colorChoiced} reset={reset} />
{/if}

<div class="color-container">
	<h1 class="pico-color-pink-500">Color</h1>
	<div class="card-container">
		<div class="card-color" style="background-color: rgb({color.r}, {color.g}, {color.b});" />
	</div>
</div>
<h1 class="pico-color-pink-500">What's the color?</h1>

{@html '<!-- Group -->'}
<GroupCards colors={similarColors.slice(0, 3)} checkColor={checkColor} />
<GroupCards colors={similarColors.slice(3)} checkColor={checkColor} />
