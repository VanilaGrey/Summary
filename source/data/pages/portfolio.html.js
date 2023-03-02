export default ({ getImages, pages: [, ringPage] }) => ({
	jobs: [
		{
			description: 'Описание проекта Описание проекта Описание проекта',
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
			name: 'supergym'
		},
		{
			description: 'Описание проекта Описание проекта Описание проекта',
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
			name: 'antarctic'
		},
		{
			description: 'Описание проекта',
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
			name: 'smart-device'
		},
		{
			description: 'Описание проекта',
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
			description: 'Описание проекта',
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
			name: 'keksobooking'
		},
		{
			description: 'Описание проекта',
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
			name: 'pink'
		},
		{
			description: 'Описание проекта',
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
			name: 'sedona'
		}
	].map((item, i) => ({
		...item,
		image: getImages(`job-${i}`, { alt: `${item.name}.` })
	})),
	pageHeading: 'Портфолио',
	ringPage
});
