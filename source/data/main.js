const pages = [
	{
		title: 'Портфолио',
		url: 'portfolio.html'
	},
	{
		title: 'Обо мне',
		url: 'about.html'
	}
];

export default ({ pageName }) => ({
	designation: 'Сайт фронтенд-разработчика VanilaGrey',
	getImages(filename, additions = {}) {
		const image = Object.assign(additions, {
			default: `images/${filename}.jpg`,
			default2x: `images/${filename}@2x.jpg`,
			webp: `images/${filename}.webp`,
			webp2x: `images/${filename}@2x.webp`
		});

		return image;
	},
	isIndex: pageName === 'index.html',
	pages,
	projectName: 'VanilaGrey',
	ringPage: pages[0],
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
			id: 'htmlacademy',
			title: 'Я в академии',
			url: 'https://htmlacademy.ru/profile/id1962371'
		},
		{
			id: 'github',
			title: 'Я в гитхабе',
			url: 'https://github.com/VanilaGrey'
		}
	]
});
