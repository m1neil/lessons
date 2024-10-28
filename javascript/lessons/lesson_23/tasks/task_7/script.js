'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const visitors = [
		"user123",
		"johnDoe",
		"janeSmith",
		"coolKid90",
		"techGuru",
		"johnDoe",
		"techGuru",
		"user123"
	]

	const amountVisitsVisitors = new Map()
	for (const visitor of visitors) {
		amountVisitsVisitors.set(visitor, (amountVisitsVisitors.get(visitor) ?? 0) + 1)
	}

	const container = document.querySelector('.page__container')
	const amountVisitsVisitorsElement = createListMap(amountVisitsVisitors, 'visitors', 'Логін', 'кількість візитів')
	container.append(amountVisitsVisitorsElement)
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