export default ({ pageName }) => ({
	buttons: [
		{
			title: 'На главную',
			url: 'index.html'
		},
		{
			title: 'портфолио',
			url: 'portfolio.html'
		},
		{
			title: 'обо мне',
			url: 'about.html'
		}
	],
	designation:
		'Сайт-визитка фронтенд разработчика <a href="https://htmlacademy.ru/profile/id1962371">VanilaGrey</a>',
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
			title: 'Я в контакте',
			url: 'https://vk.com/deniska.true'
		},
		{
			id: 'instagram',
			title: 'Я в инстаграме.',
			url: 'https://www.instagram.com/ferociousness/'
		},
		{
			id: 'telegram',
			title: 'Я в телеграме',
			url: 'https://t.me/viiiar'
		},
		{
			id: 'github',
			title: 'Я в гитхабе',
			url: 'https://github.com/VanilaGrey'
		}
	]
});
