'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const studentAges = [15, 16, 14, 17, 15, 16];
	const mapAges = new Map()

	for (const age of studentAges) {
		mapAges.set(age, (mapAges.get(age) ?? 0) + 1)
	}

	const maxAge = Math.max(...mapAges.keys())

	const container = document.querySelector('.page__container')
	const amountAgesList = createListMap(mapAges, 'ages', 'Вік', 'кількість')
	container.append(amountAgesList)
	const maxAgeDiv = createElement(`Максимальний вік: ${maxAge}`, 'max-age')
	container.append(maxAgeDiv)
}

function createListMap(mapData, className = 'list', titleKey = 'key', titleValue = 'value', typeList = 'ul') {
	const list = document.createElement(typeList)
	list.className = className
	mapData.forEach((value, key) => {
		const item = document.createElement('li')
		item.className = `${className}__item`
		item.textContent = `${titleKey}: ${key}; ${titleValue}: ${value}`
		list.append(item)
	})
	return list
}

function createElement(textContent, className = 'element', tag = 'div') {
	const element = document.createElement(tag)
	element.className = className
	element.textContent = textContent
	return element
}