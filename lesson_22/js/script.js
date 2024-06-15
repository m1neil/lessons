"use strict";

const text = document.querySelector('.task__text');

if (text) {
	let template = '';
	for (let i = 0; i < text.textContent.length; i++) {
		const letter = text.textContent[i];
		const valueDisplay = letter === ' ' ? 'inline' : 'inline-block';
		const delay = (i * 0.1).toFixed(1);
		const element = `<span style="display: ${valueDisplay}; animation-delay:${delay}s;">${letter}</span>`;
		template += element;
	}
	text.innerHTML = '';
	text.insertAdjacentHTML('beforeend', template);
}

console.log('Завдання №1');
task_01();
console.log('=====================================================');
console.log('Завдання №2');
task_02('.block-task__list');
console.log('=====================================================');
console.log('Завдання №3');
task_03();
console.log('=====================================================');

console.log('Завдання №4');
console.log(calcDivision());
console.log(calcDivision(3, 0));
console.log(calcDivision(NaN, true));
console.log(calcDivision(5, 'wefwefwefw'));
console.log(calcDivision('3', 2));
console.log(calcDivision(34, 0));
console.log(calcDivision(10, 2));
console.log(calcDivision(55, 33));
console.log('=====================================================');

console.log('Завдання №5');
const elements = ['Жека', 'Павло', 'Сергій', 10, 'Я'];
console.log('Масив:', elements);
elements.forEach((item, index) => {
	if (item === 10) {
		console.log(`Елемент: ${item}, індекс: ${index}`);
	}
})


function task_01() {
	let someVar = 0;
	++someVar;

	if (someVar) {
		console.log(someVar);
	}
}

function task_02(wrapperSelector, quantity = 10, className = 'block-task__item') {
	const wrapper = document.querySelector(wrapperSelector);
	if (!wrapper) return;

	for (let i = 0; i < quantity; i++) {
		const content = `Пункт №${i + 1}`;
		const element = `<li class=${className}>${content}</li>`;
		wrapper.insertAdjacentHTML('beforeend', element);
		console.log(content);
	}
}

function task_03() {
	if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
		console.log('000');
	} else {
		console.log('Умова не виконана');
	}
}

function calcDivision(a = 1, b = 1) {
	if (typeof a !== "number" || typeof b !== 'number') {
		return 'Один з аргументів не є числом'
	} else if (b === 0) {
		return 'На нуль ділити не можна!!!';
	}

	let result = a / b;
	if (result % 1 !== 0) {
		result = result.toFixed(2);
	}
	return `Результат ділення: ${result}`;
}