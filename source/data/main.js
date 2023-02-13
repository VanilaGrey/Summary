export default ({ pageName }) => ({
	designation: '<p>Сайт-визитка фронтенд разработчика <strong>VanillaGrey</strong></p>',
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
	projectName: 'My project',
	socials: [
		{
			id: 'vk',
			title: 'https://vk.com/deniska.true',
			url: 'https://t.me/viiiar'
		},
		{
			id: 'instagram',
			title: 'Я в инстаграме.',
			url: 'https://www.instagram.com/ferociousness/'
		},
		{
			id: 'telegram',
			title: 'Я в телеграме',
			url: 'https://vk.com/deniska.true'
		}
	],
});
