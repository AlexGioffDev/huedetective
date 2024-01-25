export interface ColorI {
	r: number;
	g: number;
	b: number;
}

const shuffleArray = (array: ColorI[]) => {
	let currentIndex = array.length,
		temporaryValue,
		randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
};

export const getRandomColor = () => {
	const color: ColorI = {
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

export const similarColor = (baseColor: ColorI) => {
	const colors: ColorI[] = [];

	for (let i = 1; i <= 5; i++) {
		const color: ColorI = {
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
