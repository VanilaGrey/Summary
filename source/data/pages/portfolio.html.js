export default ({ getImages }) => ({
	jobs: {
		heading: 'Портфолио',
		list: [
			{
				content: '<p>Проект сделан хорошо</p>',
				heading: 'supergym',
				languages: 'html, JavaScript',
				skills: 'bem, desktop-first'
			},
			{
				content: '<p>Проект сделан хорошо</p>',
				heading: 'antarctic',
				languages: 'html, JavaScript',
				skills: 'bem, desktop-first'
			},
			{
				content: '<p>Проект сделан хорошо</p>',
				heading: 'smart',
				languages: 'html, JavaScript',
				skills: 'bem, desktop-first'
			}
		].map(({ content, heading, languages, skills }, i) => ({
			content,
			heading,
			image: getImages(`job-${i}`, { alt: `${heading}.` }),
			languages,
			skills,
		}))
	}
});
