'use strict'

const schoolboy = 6,
	student = 17,
	worker = 22,
	pensioner = 60

const output = document.querySelector('.page__container')
const personAge = parseInt(prompt('Ведіть ваш вік, щоб дізнатися хто ви:', ''))
let result = 'Ваш вік відповідає - '

if (personAge < schoolboy)
	result += 'дитині у садочку'
else if (personAge >= schoolboy && personAge < student)
	result += 'школяру'
else if (personAge >= student && personAge < worker)
	result += 'студенту'
else if (personAge >= worker && personAge < pensioner)
	result += 'працівнику'
else if (personAge >= pensioner)
	result += 'пенсіонеру'

output.insertAdjacentHTML('beforeend', `<div>${result}</div>`)






