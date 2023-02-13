export default ({ getImages }) => ({
	mainContent: {
		content: `<ul>
			<li>ФИО: Жосу Денис Васильевич</li>
			<li>Год рождения: 11 марта 1994г</li>
			<li>Город рождения: г. Симферополь</li>
		  </ul>`,
		image: getImages('avatar', { alt: 'Каким Вы можете стать благодаря нам.' })
	}
});
