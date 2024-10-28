'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const mathClub = ["Сидоренко", "Іванов", "Василенко", "Бондаренко", "Петрова"];
	const historyClub = ["Лисенко", "Петрова", "Тарасенко", "Шевченко", "Іванов"];
	const mathClubSet = new Set(mathClub)
	const historyClubSet = new Set(historyClub)

	const amountStudentsVisitMathHistory = historyClubSet.intersection(mathClubSet).size
	const amountStudentsVisitHowMinOneClub = historyClubSet.union(mathClubSet).size

	const container = document.querySelector('.page__container')

	const studentsVisitMathHistoryElement = createElement(
		`Кількість студентів, що відвідують два гуртка: ${amountStudentsVisitMathHistory}`
	)
	container.append(studentsVisitMathHistoryElement)

	const studentsVisitHowMinOneClubElement = createElement(
		`Кількість студентів, що відвідують хоча б один гурток: ${amountStudentsVisitHowMinOneClub}`
	)
	container.append(studentsVisitHowMinOneClubElement)
}

function createElement(textContent, className = 'element', tag = 'div') {
	const element = document.createElement(tag)
	element.className = className
	element.textContent = textContent
	return element
}