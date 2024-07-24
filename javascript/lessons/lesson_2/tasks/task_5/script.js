'use strict'

window.addEventListener('load', () => {
	const output = document.querySelector('.page__container')
	const seconds = +prompt('Ведіть кількість секунд, що пройшли від початку доби')

	if (seconds >= 0) {
		const minutes = seconds / 60
		const hours = Math.floor(minutes / 60) % 24
		const minutesOfHours = Math.floor(minutes) % 60
		const table = `
		<table class="page__table table">
			<thead class="table__thead">
				<tr>
					<th>Шуканий результат</th>
					<th>Отримане значення</th>
				</tr>
			</thead>
			<tbody class="table__tbody">
				<tr>
					<th>Хвилини</th>
					<td>${round(minutes, 0)} хв</td>
				</tr>
				<tr>
					<th>Години</th>
					<td>${hours} г. ${minutesOfHours} хв.</td>
				</tr>
			</tbody>
		</table>
		`
		output.insertAdjacentHTML('beforeend', table)
	} else {
		output.insertAdjacentHTML('beforeend', '<div class="info">Ведіть секунди щоб вони були більше або рівні 0</div>')
	}

})

function round(value, digitsAfterComa = 2) {
	return Number.isInteger(value) ? value : value.toFixed(digitsAfterComa)
}
