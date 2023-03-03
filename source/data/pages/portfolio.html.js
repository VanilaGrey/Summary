export default ({ getImages, pages: [, ringPage] }) => ({
	jobs: [
		{
			description: 'Вёрстка лендинга фитнес-центра в Омске.',
			hardSkills: [
				'twig',
				'scss',
				'JavaScript',
				'bem',
				'a11y',
				'desktop-first',
				'eslint',
				'favicons',
				'gulp',
				'htmlacademy',
				'pixelperfect',
				'posthtml',
				'progressive-enhancement',
				'retinal-images',
				'semantic',
				'sprite',
				'stylelint',
				'swiper',
				'vanilla-js',
				'w3c-validation',
				'webp'
			],
			name: 'supergym'
		},
		{
			description: 'Вёрстка лендинга «Круизы в Антарктику».',
			hardSkills: [
				'html',
				'JavaScript',
				'scss',
				'a11y',
				'bem',
				'desktop-first',
				'eslint',
				'favicons',
				'gulp',
				'pixelperfect',
				'progressive-enhancement',
				'posthtml',
				'retinal-images',
				'semantics',
				'sprite',
				'stylelint',
				'vanilla-js',
				'w3c-validation',
				'webp',
				'htmlacademy'
			],
			name: 'antarctic'
		},
		{
			description: 'Вёрстка лендинга по производству печатный плат.',
			hardSkills: [
				'twig',
				'JavaScript',
				'a11y',
				'scss',
				'bem',
				'desktop-first',
				'eslint',
				'favicons',
				'gulp',
				'htmlacademy',
				'pixelperfect',
				'posthtml',
				'progressive-enhancement',
				'retinal-images',
				'semantics',
				'sprite',
				'stylelint',
				'vanilla-js',
				'w3c-validation',
				'webp',
				'yandex-maps '
			],
			name: 'smart-device'
		},
		{
			description: 'Экзаменационный проект в HTMLAcademy Drink2Go. Drink2Go— это интернет-магазин по продаже кофейных напитков. Удобная сортировка по странам произрастания зерна и концентрации молока поможет выбрать идеальный напиток. Количество позиций для заказа не ограничено.',
			hardSkills: [
				'twig',
				'JavaScript',
				'bem',
				'a11y',
				' esbuild',
				'less',
				'favicons',
				'gulp',
				'htmlacademy',
				'leaflet',
				'splide',
				'mobile-first',
				'pixelperfect',
				'postcss',
				'posthtml',
				'sprite',
				'stylelint',
				'w3c-validation',
				'webp'
			],
			name: 'drink2go'
		},
		{
			description: 'Учебный проект. Кексобукинг — сервис размещения объявлений о сдаче в аренду недвижимости в центре Токио. Пользователям предоставляется возможность размещать объявления о своей недвижимости или просматривать уже размещённые объявления.',
			hardSkills: [
				'JavaScript',
				'API',
				'leaflet',
				'a11y',
				'nouislider',
				'pristine',
				'htmlacademy',
				'favicons'
			],
			name: 'keksobooking'
		},
		{
			description: 'Учебный проект. Создание сайта для мобильного приложения PINK.',
			hardSkills: [
				'html',
				'pixelperfect',
				'bem',
				'mobile-first',
				'a11y',
				'less',
				'favicons',
				'htmlacademy',
				'gulp',
				'postcss',
				'posthtml',
				'semantics',
				'sprite',
				'w3c-validation',
				'webp',
				'webpack'
			],
			name: 'pink'
		},
		{
			description: 'Первый учебный проект. Создание сайта небольшого городка в Аризоне - Седона.',
			hardSkills: [
				'html',
				'pixelperfect ',
				'semantics',
				'a11y',
				'mobile-first',
				'htmlacademy',
				'stylelint',
				'sprite',
				'webp',
				'w3c-validation',
				'css',
				'favicons'
			],
			name: 'sedona'
		}
	].map((item, i) => ({
		...item,
		image: getImages(`job-${i}`, { alt: `${item.name}.` })
	})),
	pageHeading: 'Портфолио',
	ringPage
});
