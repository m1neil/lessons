'use strict'

window.addEventListener('load', () => {
	const output = document.querySelector('.page__container')
	const widthInCentimeters = +prompt('Ширина в сантиметрах')

	if (widthInCentimeters >= 0) {
		const meters = widthInCentimeters / 100
		const kilometers = meters / 1000
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
					<th>Ширина в метрах</th>
					<td>${round(meters)} м.</td>
				</tr>
				<tr>
					<th>Ширина в кілометрах</th>
					<td>${round(kilometers)} км.</td>
				</tr>
			</tbody>
		</table>
		`
		output.insertAdjacentHTML('beforeend', table)
	} else {
		output.insertAdjacentHTML(
			'beforeend',
			'<div class="info">Ведіть коректне значення і щоб воно було більше або рівне 0</div>'
		)
	}

})

function round(value, digitsAfterComa = 2) {
	return Number.isInteger(value) ? value : value.toFixed(digitsAfterComa)
}
