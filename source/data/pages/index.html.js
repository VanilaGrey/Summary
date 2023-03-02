export default ({ getImages }) => ({
	description: 'Главная страница сайта',
	designation: `Привет, дорогой друг! Добро пожаловать на сайт-визитку фронтенд-разработчика VanilaGrey!`,
	pageHeading: 'Привествие',
	promo: {
		image: getImages('avatar', { alt: 'Это я.' })
	}
});
