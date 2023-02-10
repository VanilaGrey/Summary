export default (content, element, delay = 0) => {
	const symbols = content.split('');
	let i = 0;

	const interval = setInterval(() => {
		element.textContent += symbols[i];
		i++;

		if (i === symbols.length) {
			clearInterval(interval);
		}
	}, delay);
};
