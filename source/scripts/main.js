import initIntervalContent from './modules/interval-content.js';

const DELAY = 60;

document
	.querySelectorAll('[data-interval-content]')
	.forEach(initIntervalContent(DELAY));
