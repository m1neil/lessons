'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const listPairNumbers = document.createElement('ul')
	listPairNumbers.className = 'numbers'

	for (const value of generateRandomPairNumbers(5, 2, 40)) {
		const listItem = document.createElement('li')
		listItem.className = 'numbers__item'
		listItem.textContent = value
		listPairNumbers.append(listItem)
	}
	const container = document.querySelector('.page__container')
	container.append(listPairNumbers)
}

function* generateRandomPairNumbers(amount, minValue = 2, maxValue = 100) {
	while (amount > 0) {
		let randomValue
		do {
			randomValue = getRandomValue(minValue, maxValue)
		} while (randomValue % 2 !== 0)
		amount--
		yield randomValue
	}
}

function getRandomValue(minValue = 2, maxValue = 100) {
	return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
}
