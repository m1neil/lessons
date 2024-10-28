'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
	const amountEntriesEveryTemperature = new Map()

	for (const temperature of temperatures) {
		amountEntriesEveryTemperature.set(temperature,
			(amountEntriesEveryTemperature.get(temperature) ?? 0) + 1)
	}

	const amountDifferentTemperatures = new Set(temperatures.map(temperature => Math.ceil(temperature))).size

	const container = document.querySelector('.page__container')
	const temperaturesList = createListMap(
		amountEntriesEveryTemperature, 'temperatures', 'Температура', 'Кількість входжень'
	)
	container.append(temperaturesList)
	const amountDifferentTemperaturesElement = createElement(
		`Кількість різних температур: ${amountDifferentTemperatures}`
	)
	container.append(amountDifferentTemperaturesElement)
}

function createElement(textContent, className = 'element', tag = 'div') {
	const element = document.createElement(tag)
	element.className = className
	element.textContent = textContent
	return element
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
