"use strict";

window.addEventListener('load', loaded);
window.addEventListener('DOMContentLoaded', () => {
	const scrollWidth = getWidthScroll();
	const video = document.querySelector('.video');

	if (video) {
		video.style.paddingRight = `${scrollWidth}px`;
	}

	document.documentElement.classList.add('loading');
	document.body.style.paddingRight = `${scrollWidth}px`;
	document.body.style.overflow = 'hidden';
})

function loaded() {
	document.addEventListener('click', documentActions);

	const header = document.querySelector('header');
	header.addEventListener('mouseenter', changeStyleFooter);
	header.addEventListener('mouseleave', changeStyleFooter);

	initObserver();

	const video = document.querySelector('.video');

	setTimeout(() => {
		document.body.classList.add('loaded');
	}, 1000);

	setTimeout(() => {
		document.body.style.removeProperty('padding-right');
		document.body.style.overflow = ''
		if (video) {
			video.style.paddingRight = 0;
		}
		document.documentElement.classList.remove('loading');
	}, 1300);

}

function documentActions(e) {
	const target = e.target;

	if (target.closest('.item')) {
		const currentTarget = target.closest('.item');
		currentTarget.classList.toggle('active');
	}
}

function changeStyleFooter(e) {
	const footer = document.querySelector('footer');
	if (e.type === 'mouseenter') {
		footer.classList.add('active');
	} else if (e.type === 'mouseleave') {
		footer.classList.remove('active');
	}
}

function initObserver() {
	const options = {
		root: null,
		rootMargin: '0px 0px 0px 0px',
		threshold: 0.7
	}

	const observer = new IntersectionObserver(initItems, options);
	const items = document.querySelectorAll('[class*=--observer]');
	items.forEach(item => observer.observe(item));

	function initItems(entries, observer) {
		entries.forEach(entry => {
			const currentTarget = entry.target;
			if (entry.isIntersecting && currentTarget.hasAttribute('data-timer-delay')) {
				if (document.documentElement.classList.contains('loading')) {
					console.log(true);
					setTimeout(() => {
						initTimer(currentTarget);
					}, 1300);
				} else {
					initTimer(currentTarget);
				}
				observer.unobserve(currentTarget);
			}
		});
	}
}

function initTimer(target) {
	const delay = target.dataset.timerDelay >= 0 ? +target.dataset.timerDelay : 1000;
	const endValue = target.dataset.timerEndValue >= 0 ? +target.dataset.timerEndValue : 0;
	console.log(endValue);
	const boxValue = target.querySelector('span');
	let counter = 0;

	if (boxValue) {
		const timer = setInterval(() => {
			if (counter >= endValue) {
				clearInterval(timer);
			} else {
				boxValue.textContent = ++counter;
			}
		}, delay);
	}
}

function getWidthScroll() {
	const div = document.createElement('div');
	div.style.cssText = `
		position: fixed;
		width: 200px;
		height: 200px;
		top: 0;
		left: -100%;
		overflow-y: scroll;
		opacity: 0;
		visibility: hidden;
	`;
	document.body.append(div);
	const widthScroll = div.offsetWidth - div.clientWidth;
	div.remove();
	return widthScroll;
}