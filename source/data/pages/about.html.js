export default ({ getImages }) => ({
	aboutContent: {
		heading: 'Биография.',
		image: getImages('avatar', { alt: 'Каким Вы можете стать благодаря нам.' }),
		list: [
			{
				description: 'Жосу Денис Васильевич',
				name: 'ФИО:'
			},
			{
				description: '11 марта 1994г',
				name: 'Год рождения:'
			},
			{
				description: 'Симферополь',
				name: 'Город рождения:'
			}
		],
	},
	qualities: {
		description: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
		heading: 'Про меня как веб-разработчика',
		list: [
			{
				content: `<li>Адаптивность</li>
				<li>Кроссбраузерность, progressive enhancement.</li>
				<li>Ретинизация.</li>
				<li>PixelPerfect.</li>
				<li>Вёрстка с макетов Figma.</li>
				<li>Следование веб-стандартам.</li>
				<li>Следование методологиям: БЭМ (предпочитаю).</li>
				<li>Компонентный подход.</li>`,
				label: 'В общем'
			},
			{
				content: `<li>HTML.</li>
				<li>HTML5, семантика.</li>
				<li>Валидность.</li>
				<li>Доступность.</li>
				<li>Минификация.</li>
				<li>Шаблонизация (twig, nunjucks).</li>
				<li>Разделение верстки и скриптов/стилей.</li>`,
				label: 'DRY'
			},
			{
				content: `<li>Mobile first, Desctop first.</li>
				<li>Автопрефиксер.</li>
				<li>Минификация.</li>
				<li>Минимизация медиазапросов при сборке.</li>
				<li>Less, SCSS.</li>`,
				label: 'CSS'
			},
			{
				content: `<li>ES6.</li>
				<li>ООП.</li>
				<li>Минификация</li>`,
				label: 'JavaScript'
			},
			{
				content: `<li>Растровая графика: оптимизация, webp. Растровые спрайты.</li>
				<li>SVG: интеграция с растровой графикой и CSS, векторные символьные и фоновые спрайты.</li>`,
				label: 'Графика'
			},
			{
				content: `<li>Скорость (концентрация на задаче, автоматизация, VS Code + плагины, хоткеи + drag-n-drop, emmet).</li>
				<li>Культура кода (единообразие, кодгайд, editorconfig, htmlhint, stylelint, eslint).</li>
				<li>Внимание к деталям.</li>
				<li>Конфиденциальность, следование NDA.</li>`,
				label: 'Софт-скиллы'
			}
		]
	},
	workContent: {
		content: `<ul>
		<li>Июль 2021 - ...: непрерывное обучение в HTML Academy.</li>
		<li>Декабрь 2021 - январь 2023: студент Профессии "Фронтенд-разработчик".</li>
	  </ul>`,
		heading: 'Краткая биография'
	}
});
