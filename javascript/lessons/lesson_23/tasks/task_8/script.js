'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const students = [
		{ name: "Іван Іванов", course: 2, faculty: "Інформатика" },
		{ name: "Марія Петрова", course: 1, faculty: "Філологія" },
		{ name: "Олександр Сидоренко", course: 3, faculty: "Математика" },
		{ name: "Анна Коваленко", course: 4, faculty: "Інформатика" },
		{ name: "Дмитро Тарасенко", course: 2, faculty: "Хімія" },
		{ name: "Олена Кравченко", course: 1, faculty: "Інформатика" },
		{ name: "Микола Василенко", course: 4, faculty: "Фізика" },
		{ name: "Андрій Бондаренко", course: 3, faculty: "Медицина" },
		{ name: "Юлія Лисенко", course: 2, faculty: "Інформатика" },
		{ name: "Тетяна Шевченко", course: 1, faculty: "Соціологія" }
	]

	const amountDifferentFaculties = new Set(students.map(({ faculty }) => faculty)).size
	const amountStudentsEveryCourse = new Map()

	for (const student of students) {
		amountStudentsEveryCourse.set(student.course, (amountStudentsEveryCourse.get(student.course) ?? 0) + 1)
	}

	const container = document.querySelector('.page__container')
	const amountStudentsEveryCourseElement = createListMap(
		amountStudentsEveryCourse, 'students', 'Курс', 'кількість студентів'
	)
	container.append(amountStudentsEveryCourseElement)

	const amountDifferentFacultiesElement = createElement(`Кількість різни факультетів: ${amountDifferentFaculties}`)
	container.append(amountDifferentFacultiesElement)
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
