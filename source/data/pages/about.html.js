export default ({ getImages }) => ({
	aboutContent: {
		anotherList: [
			{
				description: 'начало обучения в HTML Academy',
				name: 'Июль 2021:'
			},
			{
				description: 'студент профессии "Фронтенд-разработчик"',
				name: 'Декабрь 2021 - сентябрь 2022:'
			},
			{
				description: 'стажер профессии "Фронтенд-разработчик"',
				name: 'Сентябрь 2022 - январь 2023:'
			}
		],
		image: getImages('avatar', { alt: 'Это я.' }),
		oneList: [
			{
				description: 'Жосу Денис Васильевич',
				name: 'ФИО:'
			},
			{
				description: '11 марта 1994г',
				name: 'Дата рождения:'
			},
			{
				description: 'Москва',
				name: 'Город проживания:'
			}
		]
	},
	pageHeading: 'Биография',
	qualities: {
		description:
			'"Непрерывно обучаюсь, умею работать в команде, ответственный, внимательный к деталям, стараюсь делать максимально хорошо сразу."',
		heading: 'Про меня как веб-разработчика',
		list: [
			{
				contents: [
					'Адаптивность',
					'Кроссбраузерность, progressive enhancement',
					'Ретинизация',
					'PixelPerfect',
					'Вёрстка с макетов Figma',
					'Следование веб-стандартам',
					'Следование методологиям: БЭМ (предпочитаю)',
					'Компонентный подход'
				],
				label: 'Hard skills'
			},
			{
				contents: [
					'HTML',
					'HTML5, семантика',
					'Валидность',
					'Доступность',
					'Шаблонизация (twig, nunjucks)',
					'Разделение верстки и скриптов/стилей'
				],
				label: 'DRY'
			},
			{
				contents: ['Mobile first, Desctop first', 'Автопрефиксер', 'Минификация', 'Less, SCSS'],
				label: 'CSS'
			},
			{
				contents: ['ES6', 'ООП', 'Минификация'],
				label: 'JavaScript'
			},
			{
				contents: [
					'Растровая графика: оптимизация, webp. Растровые спрайты',
					'SVG: интеграция с растровой графикой и CSS, векторные символьные и фоновые спрайты'
				],
				label: 'Графика'
			},
			{
				contents: [
					'Скорость (концентрация на задаче, автоматизация, VS Code + плагины, хоткеи + drag-n-drop, emmet)',
					'Культура кода (единообразие, кодгайд, editorconfig, htmlhint, stylelint, eslint)',
					'Внимание к деталям',
					'Конфиденциальность, следование NDA.'
				],
				label: 'Soft skills'
			}
		]
	},
});
