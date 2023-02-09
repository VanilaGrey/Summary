export default function printText(delay) {
	const ELEMENT = document.querySelector('#promo__text');
	const TEXT = "Привет дорогой друг, добро пожаловать на сайт-визитку фронтенд разработчика VanillaGrey!";

	if (TEXT.length > 0) {
		ELEMENT.innerHTML += TEXT[0];
		setTimeout(() => {
			printText(TEXT.slice(1), ELEMENT, delay);
		}, delay);
	}
}

