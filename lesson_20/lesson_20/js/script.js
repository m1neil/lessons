"use strict";

const buttonTopHeader = document.querySelector('.top-header__button');

if (buttonTopHeader) {
	buttonTopHeader.addEventListener('click', () => {
		document.documentElement.classList.add('_close-top-panel');
	});
}

const iconMenu = document.querySelector('.icon-menu');
iconMenu.addEventListener('click', () => {
	document.documentElement.classList.toggle('menu-open');
	document.documentElement.classList.toggle('lock');
});