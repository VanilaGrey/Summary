export default ({ getImages }) => ({
	description: 'Главная страница сайта',
	designation: '<p>Сайт-визитка фронтенд разработчика <strong>VanillaGrey</strong></p>',
	promo: {
		content: `Привет, дорогой друг, добро пожаловать на сайт-визитку фронтенд-разработчика VanillaGrey!`,
		heading: 'привествие',
		image: getImages('avatar', { alt: 'Каким Вы можете стать благодаря нам.' })
	}
});
