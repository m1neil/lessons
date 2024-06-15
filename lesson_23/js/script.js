"use strict";

// Задача №1
console.log('Задача №1');
const elementBody = document.body;
console.log(elementBody);
// Задача №2
createList(3);

// Задача №3
elementBody.classList.add('loaded');
if (elementBody.classList.contains('loaded')) {
	elementBody.style.color = 'green';
}

// Задача №4
const items = document.querySelectorAll('.item');
if (items.length > 0) {
	items.forEach((item, index) => {
		item.classList.add('active');
		item.textContent = `Елемент №${index + 1}`;
	});
}

// Задача №5
const button = document.querySelector('.about__button');
const buttonTop = button.getBoundingClientRect().top + scrollY - 25;
// variant one
window.scrollTo({
	top: buttonTop,
	behavior: 'smooth'
});
// variant two
// button.scrollIntoView({
// 	inline: "nearest",
// 	behavior: "smooth"
// });

// Задача №6
const link = document.querySelector('.some-block__link');
link.dataset.someAttribute = 100;
const linkAttribute = +link.dataset.someAttribute;
if (linkAttribute < 200) {
	link.style.color = 'red';
}

function createList(quantityElements = 0) {
	const list = document.createElement('ul');
	list.classList.add('list');
	for (let i = 0; i < quantityElements; i++) {
		list.innerHTML += `<li class="list__item">${i + 1}</li>`;
	}
	elementBody.append(list);
}