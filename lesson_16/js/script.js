'use strict';

const burger = document.querySelector('.icon-menu');
burger.addEventListener('click', toggleMenu);

function toggleMenu() {
	document.documentElement.classList.toggle('menu-open');
	if (document.documentElement.classList.contains('show-search')) {
		document.documentElement.classList.remove('show-search')
	}
}

const iconPhone = document.querySelector('.phone__icon');
const crosshair = document.querySelector('.contacts-phone__button');

iconPhone.addEventListener('click', () => {
	iconPhone.closest('.phone').classList.add('_show');
});

crosshair.addEventListener('click', () => {
	iconPhone.closest('.phone').classList.toggle('_show');
});

const search = document.querySelector('.center-header__button--search');
const form = document.querySelector('.center-header__form');
search.addEventListener('click', () => {
	document.documentElement.classList.toggle('show-search');
});


const language = document.querySelector('.lang-top-header__current-link');
language.addEventListener('click', (e) => {
	e.preventDefault();
	language.closest('.lang-top-header').classList.toggle('_show');
});