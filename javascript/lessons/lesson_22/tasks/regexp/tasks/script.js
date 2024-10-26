'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	try {
		task_1()
		task_2()
		task_3()
		task_4()
		task_5()
		task_6()
		task_7()
		task_8()
		task_9()
		task_10()
		task_11()
		task_12()
		task_13()
		task_14()
		task_15()
		task_16()
		task_17()
	} catch (error) {
		console.error(error);
	}
}

function task_1() {
	const container = getElementBySelector('#task-1')

	const arrayStrings = [
		"Hello world",
		"Python 3.10",
		"OpenAI ChatGPT",
		"Version 2",
		"12345",
		"Data science",
		"No numbers here",
		"C++ 20",
		"10x improvement"
	]

	const regexp = /\d/
	const arrayWithDigits = arrayStrings.filter(str => regexp.test(str))

	const arrayNotFilterDiv = createElementWithContent(`Масив до змін: ${arrayStrings.join('; ')}`)
	container.append(arrayNotFilterDiv)

	const arrayFilterDiv = createElementWithContent(`Відфільтрований масив: ${arrayWithDigits.join('; ')}`)
	container.append(arrayFilterDiv)
}

function task_2() {
	const container = getElementBySelector('#task-2')
	const arrayStrings = [
		"Hello world",
		"Python 3.10",
		"OpenAI ChatGPT",
		"Version 2",
		"12345",
		"Data science",
		"No numbers here",
		"C++ 20",
		"10x improvement"
	]
	const regexp = /\d/
	const arrayWithoutDigits = arrayStrings.filter(str => !regexp.test(str))
	const arrayDiv = createElementWithContent(`Масив без цифр: ${arrayWithoutDigits.join('; ')}`)
	container.append(arrayDiv)
}

function task_3() {
	const container = getElementBySelector('#task-3')
	const words = [
		"Дім",
		"Мрія",
		"Кіт",
		"Сонце",
		"Час",
		"Мить",
		"Звук",
		"Брр",
		"Штрих",
		"Крч"
	]

	const startArray = createElementWithContent(`Стартовий Масив: ${words.join('; ')}`)
	container.append(startArray)
	const regexp = /[ауєиіїоуюя]/i
	const wordsWithVowels = words.filter(word => regexp.test(word))
	const arrayDiv = createElementWithContent(`Слова із головними літерами: ${wordsWithVowels.join('; ')}`)
	container.append(arrayDiv)
}

function task_4() {
	const container = getElementBySelector('#task-4')
	const words = [
		"Дім",
		"Мрія",
		"Кіт",
		"Сонце",
		"Час",
		"Мить",
		"Звук",
		"Брр",
		"Штрих",
		"Крч"
	]

	const startArray = createElementWithContent(`Стартовий Масив: ${words.join('; ')}`)
	container.append(startArray)
	const regexp = /[ауєиіїоуюя]/i
	const wordsWithVowels = words.filter(word => !regexp.test(word))
	const arrayDiv = createElementWithContent(`Слова із головними літерами: ${wordsWithVowels.join('; ')}`)
	container.append(arrayDiv)
}

function task_5() {
	const container = getElementBySelector('#task-5')
	const strings = [
		"Apple 13",
		"Hello 1",
		"Version 3",
		"No numbers",
		"Task 31",
		"Example",
		"Run 13",
		"World"
	]

	const regexp = /\b[13]\b/
	const strWithDigitOneOrThree = strings.filter(str => regexp.test(str))
	const arrayDiv = createElementWithContent(`Масив: ${strWithDigitOneOrThree}`)
	container.append(arrayDiv)
}

function task_6() {
	const container = getElementBySelector('#task-6')
	const string = 'Apple 13, Hello 1, Version 3, No numbers, Task 31, Example, Run 13, World'
	const regexp = /\D/g
	const stringOnlyDigits = string.replace(regexp, '')
	const element = createElementWithContent(`Числа: ${stringOnlyDigits}`)
	container.append(element)
}

function task_7() {
	const string = `Привіт! Це тестовий рядок: він містить крапки. Точки, коми, знаки питання? І знаки оклику! А також тире - та дужки (такі як ці). Не забудь про лапки: "Цей рядок" має все необхідне; навіть крапки з комою`
	const regexp = /[-!:.,?()";]/g
	const result = string.match(regexp)

	const uniqResult = result.filter((item, index, arr) => {
		return arr.indexOf(item) === index
	})

	const container = getElementBySelector('#task-7')
	container.append(uniqResult.join(' '))
}

function task_8() {
	const str = `The sun is shining; the sky is clearer and the wind is light! We are constantly on the move: mountains, foxes, rivers - everything is focused on us`
	const reg = /\b(\w|\s)+(?=[-!:.,?()";])?\b/gi
	const container = getElementBySelector('#task-8')
	container.append(str.match(reg).join(', '))
}

function task_9() {
	const str = '15.12.2019 01.01.2020'
	const reg = /([0-2]\d|3[01])(?<separator>[-./])(0[1-9]|1[0-2])\k<separator>\d{4,4}\b/g
	const result = reg.test(str) ? 'Так' : 'Ні'
	const container = getElementBySelector('#task-9')
	container.append(`Чи є дата: ${result}`)
}

function task_10() {
	const str = 'У магазині було 12 яблук, 25 груш, 34 апельсини і 47 бананів.'
	const reg = /(\d{2})/g
	const amountTwoDigits = str.match(reg).length
	const strDiv = createElementWithContent(`Кількість двоцифрових чисел: ${amountTwoDigits}`)
	const container = getElementBySelector('#task-10')
	container.append(strDiv)
}

function task_11() {
	const str = "Приклад номерів карт: 1234 5678 9123 4567, 9876 5432 1098 7654."
	const reg = /\b(\d{4}\b\s){3}\d{4}\b/g
	const numbersCards = str.match(reg)

	const strIncludesCard = numbersCards.length ? 'Так' : 'Ні'
	const answerDiv =
		createElementWithContent(`Чи присутні номери карт: ${strIncludesCard}. Номери: ${numbersCards.join(', ')}`)

	const container = getElementBySelector('#task-11')
	container.append(answerDiv)
}

function task_12() {
	const str = 'https://www.usa.gov'
	const reg = /.gov\b/ig
	const isIncludesGov = reg.test(str)
	const answerDiv = createElementWithContent(`Чи урядовий сайт? ${isIncludesGov ? 'Так' : 'Ні'}`)
	const container = getElementBySelector('#task-12')
	container.append(answerDiv)
}

function task_13() {
	const text = "У 2018 році розпочалося планування проекту, і в 2019 році затвердили бюджет. У 2020 провели дослідження, а до кінця 2021 підготували необхідні документи. У 2022 стартувала перша фаза, яка тривала до 2023. В 2024-2025 роках відбулася друга фаза, а у 2026 запланували завершальні роботи. Після аналізу в 2027 році, у 2028 проект передали для громадського користування. Нарешті, у 2029-2030 провели остаточний аудит результатів."
	const reg = /\b20(2[2-9]|[3-9]\d)\b/g
	const result = text.match(reg)
	const answerDiv = createElementWithContent(`Усі роки після 2021: ${result.join(', ')}`)
	const container = getElementBySelector('#task-13')
	container.append(answerDiv)
}

function task_14() {
	const text = "Для отримання додаткової інформації ви можете звернутися до наших представників:\nНімеччина: +44-20-7946 09-58\nСполучені Штати: +1-555-123-45-67\nУкраїна: +38-067-123-45-67\nВелика Британія: +49-30-9876-5432\nНаші менеджери готові відповісти на ваші запитання у зручний для вас час."
	const reg = /\+38-(\d{3,3}-){2}\d{2,2}-\d{2,2}\b/g

	const ukraineNumbers = text.match(reg)
	const isIncludesUkraineNumber = ukraineNumbers.length ? 'Так' : 'Ні'

	const ukraineNumbersDiv =
		createElementWithContent(`Чи є в тексті український номер телефона - ${isIncludesUkraineNumber}; Номера: ${ukraineNumbers.join('; ')}`)
	const container = getElementBySelector('#task-14')
	container.append(ukraineNumbersDiv)
}

// task 15 ========================================
function task_15() {
	const button = getElementBySelector('#transform')
	const inputUsername = getElementBySelector('#username')
	inputUsername.addEventListener('focusin', () => {
		const error = inputUsername.parentElement.querySelector('.error')
		if (error) error.remove()
	})

	button.addEventListener('click', () => {
		try {
			const username = transformUsername()
			const output = getElementBySelector('.transform-username span')
			output.textContent = username
		} catch (error) {
			const prevError = inputUsername.parentElement.querySelector('.error')
			if (prevError) {
				prevError.textContent = `Помилка: ${error.message}`
			} else {
				const errorDiv = createElementWithContent(`Помилка: ${error.message}`)
				errorDiv.className = 'error'
				inputUsername.parentElement.append(errorDiv)
			}
		}
	})
}

function transformUsername() {
	const value = getElementBySelector('#username').value.trim()
	if (!value) return

	if (!value.split(' ')[1])
		throw new Error("Ви не вели прізвище")

	const regexp = /(?<surname>\w+)\s(?<name>\w+)/g
	const transformUsername = value.replace(regexp, '$<surname>-$<name>')
	return transformUsername
}

//===========================================================================

function task_16() {
	const inputDate = getElementBySelector('#date')
	inputDate.addEventListener('input', checkInput)
	inputDate.addEventListener('focusin', () => {
		const error = inputDate.parentElement.querySelector('.error')
		if (error) error.remove()
	})
	const button = getElementBySelector('#change-dots')
	button.addEventListener('click', replaceDotsOnSlash)
}

function replaceDotsOnSlash() {
	const input = getElementBySelector('#date')
	const value = input.value
	if (!value) return

	const reg = /(0[1-9]|[1-2]\d|[3][01]).(0[1-9]|1[0-2]).(\d{4})\b/

	if (!reg.test(value))
		addError(input.parentElement, 'Не вірний формат. Формат повинен бути: day.month.year')
	else {
		const output = getElementBySelector('#date-new-separator')
		if (output)
			output.textContent = `Новий формат: ${value.replace(reg, '$1/$2/$3')}`
	}
}

function addError(container, msg) {
	const prevError = container.querySelector('.error')
	if (prevError)
		prevError.textContent = msg
	else {
		const error = createElementWithContent(msg)
		error.className = 'error'
		container.append(error)
	}
}

function checkInput(e) {
	const target = e.target
	target.value = target.value.trim().replace(/[^\d.]/i, '')
}

//===========================================================================
function task_17() {
	const inputDayOfWeek = getElementBySelector('#day-week')
	inputDayOfWeek.addEventListener('focusin', () => {
		const error = inputDayOfWeek.parentElement.querySelector('.error')
		if (error) {
			error.parentElement.parentElement.classList.remove('--error')
			error.remove()
		}
	})
	const button = getElementBySelector('#weekend-day')
	button.addEventListener('click', calcWeekendDay)
}

function calcWeekendDay() {
	const inputDayOfWeek = getElementBySelector('#day-week')
	if (!inputDayOfWeek) return
	const value = inputDayOfWeek.value
	if (!value) return
	const isCorrectData = checkInputDayWeek(value)

	inputDayOfWeek.parentElement.parentElement.classList.toggle('--error', !isCorrectData)

	if (!isCorrectData)
		addError(inputDayOfWeek.parentElement, 'Не коректний день тижня!')
	else {
		const regWeekendDay = /([06]|sun|sat)/
		const dayOfWeek = isCorrectData[0]

		const isWeekend = regWeekendDay.test(dayOfWeek)
		const answerDiv = getElementBySelector('#is-weekend')
		answerDiv.textContent = `Цей день ${isWeekend ? 'вихідний' : 'не вихідний'}`
	}
}

function checkInputDayWeek(initValue) {
	const value = initValue.trim()
	if (!value) return
	const reg = /\b([0-6]|sun|mon|tue|wed|thu|fri|sat)\b/
	const weekendDay = value.match(reg)

	return weekendDay ?? false
}


// functions ===========================================================================

function getElementBySelector(selector) {
	const element = document.querySelector(selector)
	if (!element)
		throw new ReferenceError(`Not found element by selector - ${selector}`)
	return element
}


function createElementWithContent(content = '') {
	const element = document.createElement('div')
	element.textContent = content
	return element
}