import printSymBySym from '../common/print-sym-by-sym.js';

export default (delay) => (element) => {
	const { intervalContent } = element.dataset;
	element.hidden = false;

	printSymBySym(intervalContent, element, delay);
};
