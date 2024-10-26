'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	if (confirm('Розпочати тестування?')) {
		const todo = getToDoList()
		try {
			interval(todo)
		} catch (error) {
			alert(error.message)
			localStorage.removeItem('todo')
		}
	}
}

function interval(todo) {
	if (!todo.length)
		throw new Error("Список задач пустий")

	const randomIndex = getRandomValue(0, todo.length)
	const { id, description, priority, title } = todo[randomIndex]
	const randomTaskStr = `Задача: ${title}\nОпис: ${description}\nПріоритет: ${priority} `
	const isReadyTask = confirm(randomTaskStr)
	if (isReadyTask) {
		todo = removeElementFromArray(todo, id)
		localStorage.setItem('todo', JSON.stringify(todo))
	}

	if (todo.length) {
		setTimeout(() => {
			interval(todo)
		}, 1500)
	} else {
		localStorage.removeItem('todo')
		alert("Задачі скінчилися!")
	}
}

function getToDoList() {
	let toDoList = JSON.parse(localStorage.getItem('todo'))

	if (!toDoList) {
		toDoList = createTasks()
		localStorage.setItem('todo', JSON.stringify(toDoList))
	}

	return toDoList
}

function createTasks() {
	const tasks = [
		{
			id: 1,
			title: "Закінчити проект з оптимізації коду",
			description: "Оновити функції для покращення швидкодії",
			dueDate: "2024-10-30",
			priority: "висока",
		},
		{
			id: 2,
			title: "Написати документацію для API",
			description: "Описати всі методи та приклади використання",
			dueDate: "2024-11-05",
			priority: "середня",
		},
		{
			id: 3,
			title: "Провести рев'ю коду колеги",
			description: "Перевірити нові зміни в репозиторії",
			dueDate: "2024-10-25",
			priority: "висока",
		},
		{
			id: 4,
			title: "Підготувати звіт про продуктивність",
			description: "Зібрати дані та підготувати аналіз для зустрічі",
			dueDate: "2024-11-01",
			priority: "низька",
		}
	]
	return tasks
}

function getRandomValue(minValue = 0, maxValue = 10) {
	return Math.floor(Math.random() * (maxValue - minValue) + minValue)
}

function removeElementFromArray(array, idElement) {
	return array.filter(item => item.id !== idElement)
}