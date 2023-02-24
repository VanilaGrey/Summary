export default ({ getImages }) => ({
	jobs: {
		heading: 'Портфолио',
		list: [
			{
				content: '<p>Описание проекта</p>',
				hardSkills: ['html', 'JavaScript', 'bem', 'desktop-first'],
				heading: 'supergym',
				links: [
					{
						title: 'код на github',
						url: '#!'
					},
					{
						title: 'опубликованная версия',
						url: '#!'
					}
				]
			},
			{
				content: '<p>Описание проекта</p>',
				hardSkills: ['html', 'JavaScript', 'bem', 'desktop-first'],
				heading: 'antarctic',
				links: [
					{
						title: 'код на github',
						url: '#!'
					},
					{
						title: 'опубликованная версия',
						url: '#!'
					}
				]
			},
			{
				content: '<p>Описание проекта</p>',
				hardSkills: ['html', 'JavaScript', 'bem', 'desktop-first'],
				heading: 'antarctic',
				links: [
					{
						title: 'код на github',
						url: '#!'
					},
					{
						title: 'опубликованная версия',
						url: '#!'
					}
				]
			},
			{
				content: '<p>Описание проекта</p>',
				hardSkills: ['html', 'JavaScript', 'bem', 'desktop-first'],
				heading: 'antarctic',
				links: [
					{
						title: 'код на github',
						url: '#!'
					},
					{
						title: 'опубликованная версия',
						url: '#!'
					}
				]
			},
			{
				content: '<p>Описание проекта</p>',
				hardSkills: ['html', 'JavaScript', 'bem', 'desktop-first'],
				heading: 'antarctic',
				links: [
					{
						title: 'код на github',
						url: '#!'
					},
					{
						title: 'опубликованная версия',
						url: '#!'
					}
				]
			},
			{
				content: '<p>Описание проекта</p>',
				hardSkills: ['html', 'JavaScript', 'bem', 'desktop-first'],
				heading: 'smart',
				links: [
					{
						title: 'код на github',
						url: '#!'
					},
					{
						title: 'опубликованная версия',
						url: '#!'
					}
				]
			}
		].map(({ content, heading, hardSkills, links }, i) => ({
			content,
			hardSkills,
			heading,
			image: getImages(`job-${i}`, { alt: `${heading}.` }),
			links
		}))
	}
});
