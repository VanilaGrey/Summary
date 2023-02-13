export default ({ getImages }) => ({
	choice: {
		list: [
			{
				title: 'Обо мне',
				url: 'about.html'
			},
			{
				title: 'Портфолио',
				url: '#!'
			}
		]
	},
	description: 'Главная страница сайта',
	promo: {
		content: `Привет, дорогой друг, добро пожаловать на сайт-визитку фронтенд-разработчика VanillaGrey!`,
		heading: 'привествие',
		image: getImages('avatar', { alt: 'Каким Вы можете стать благодаря нам.' })
	}
});
