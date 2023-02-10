export default ({ pageName }) => ({
	getImages(filename, additions = {}) {
		const image = Object.assign(additions, {
			default: `images/${filename}.jpg`,
			default2x: `images/${filename}@2x.jpg`,
			webp: `images/${filename}.webp`,
			webp2x: `images/${filename}@2x.webp`
		});

		return image;
	},
	isIndex: pageName === 'index',
	pixelperfect: JSON.stringify({ breakpoints: [320, 768, 1260], ext: 'jpg' }),
	projectName: 'My project'
});
