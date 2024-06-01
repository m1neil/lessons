'use strict';

const iconMenu = document.querySelector('.icon-menu');

if (iconMenu) {
	iconMenu.addEventListener('click', e => {
		const target = e.target;
		if (target.closest('.icon-menu')) {
			document.documentElement.classList.toggle('menu-open');
			document.documentElement.classList.toggle('lock');
		}
	})
}