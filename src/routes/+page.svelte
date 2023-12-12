<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let color: { r: number; g: number; b: number } = { r: 0, g: 0, b: 0 };
	let similarColors: { r: number; g: number; b: number }[] = Array(6).fill({ r: 0, g: 0, b: 0 });
	let gameOver: boolean = false;
	let message: string = '';
	let colorChoiced: { r: number; g: number; b: number } = { r: 0, g: 0, b: 0 };

	const shuffleArray = (
		array: {
			r: number;
			g: number;
			b: number;
		}[]
	) => {
		let currentIndex = array.length,
			temporaryValue,
			randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
	};

	const getRandomColor = () => {
		let color: {
			r: number;
			g: number;
			b: number;
		} = {
			r: 0,
			g: 0,
			b: 0
		};

		do {
			color.r = Math.round(Math.random() * 255);
			color.g = Math.round(Math.random() * 255);
			color.b = Math.round(Math.random() * 255);
		} while (
			(color.r < 50 && color.g < 50 && color.b < 50) ||
			(color.r > 200 && color.g > 200 && color.b > 200)
		);

		return color;
	};

	const getSimilarColor = (baseColor: { r: number; g: number; b: number }) => {
		let colors: {
			r: number;
			g: number;
			b: number;
		}[] = [];

		for (let i = 1; i <= 5; i++) {
			let color = {
				r: (baseColor.r + i * 2) % 256,
				g: (baseColor.g + i * 2) % 256,
				b: (baseColor.b + i * 2) % 256
			};

			colors.push(color);
		}
		colors.push(baseColor);
		shuffleArray(colors);
		return colors;
	};

	onMount(() => {
		color = getRandomColor();
		similarColors = getSimilarColor(color);
	});

	const reset = () => {
		gameOver = false;
		message = '';
		colorChoiced = { r: 0, g: 0, b: 0 };
		color = getRandomColor();
		similarColors = getSimilarColor(color);
	};

	const checkColor = (colorToCheck: { r: number; g: number; b: number }) => {
		gameOver = true;
		colorChoiced = colorToCheck;
		if (colorToCheck.r === color.r && colorToCheck.g === color.g && colorToCheck.b === color.b) {
			message = 'You Win';
		} else {
			message = 'You lose';
		}
	};
</script>

{#if gameOver}
	<div class="game-over" in:fly={{ y: 200 }} out:fly={{ y: 200 }}>
		<div>
			<h1>{message}</h1>
			<div>
				<h4>Color</h4>
				<div
					style="width: 40px; height: 40px; background-color: rgb({color.r}, {color.g}, {color.b}); border-radius: 50%"
				/>
				<h4>R: {color.r}  G: {color.g}  B: {color.b}</h4>
			</div>
			<div>
				<h4>Your choice:</h4>
				<div
					style="width: 40px; height: 40px; background-color: rgb({colorChoiced.r}, {colorChoiced.g}, {colorChoiced.b}); border-radius: 50%"
				/>
				<h4>R: {colorChoiced.r}  G: {colorChoiced.g}  B: {colorChoiced.b}</h4>
			</div>
		</div>
		<button class="pico-background-pink-500" on:click={reset}>Play Again!</button>
	</div>
{/if}

<div class="color-container">
	<h1 class="pico-color-pink-500">Color</h1>
	<div class="card-container">
		<div class="card-color" style="background-color: rgb({color.r}, {color.g}, {color.b});" />
	</div>
</div>

<div class="group">
	<button class="card-container" on:click={() => checkColor(similarColors[0])}>
		<div
			class="card-color"
			style="background-color: rgb({similarColors[0].r}, {similarColors[0].g}, {similarColors[0]
				.b});"
		/>
	</button>
	<button class="card-container" on:click={() => checkColor(similarColors[1])}>
		<div
			class="card-color"
			style="background-color: rgb({similarColors[1].r}, {similarColors[1].g}, {similarColors[1]
				.b});"
		/>
	</button>
	<button class="card-container" on:click={() => checkColor(similarColors[2])}>
		<div
			class="card-color"
			style="background-color: rgb({similarColors[2].r}, {similarColors[2].g}, {similarColors[2]
				.b});"
		/>
	</button>
</div>

<div class="group">
	<button class="card-container" on:click={() => checkColor(similarColors[3])}>
		<div
			class="card-color"
			style="background-color: rgb({similarColors[3].r}, {similarColors[3].g}, {similarColors[3]
				.b});"
		/>
	</button>
	<button class="card-container" on:click={() => checkColor(similarColors[4])}>
		<div
			class="card-color"
			style="background-color: rgb({similarColors[4].r}, {similarColors[4].g}, {similarColors[4]
				.b});"
		/>
	</button>
	<button class="card-container" on:click={() => checkColor(similarColors[5])}>
		<div
			class="card-color"
			style="background-color: rgb({similarColors[5].r}, {similarColors[5].g}, {similarColors[5]
				.b});"
		/>
	</button>
</div>
