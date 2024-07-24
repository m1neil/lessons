'use strict'

window.addEventListener('load', () => {
	const output = document.querySelector('.page__container');
	const quantity = +prompt('Кількість товару');
	const price = +prompt('Вартість одиниці товару')
	const RATE_PDV = 5;

	if (quantity && price && quantity > 0 && price > 0) {
		const totalPrice = quantity * price;
		const pdv = (totalPrice * RATE_PDV) / 100;
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
					<th>Загальна вартість</th>
					<td>${round(totalPrice)}₴</td>
				</tr>
				<tr>
					<th>ПДВ під 5%</th>
					<td>${round(pdv)}₴</td>
				</tr>
			</tbody>
		</table>
		`
		output.insertAdjacentHTML('beforeend', table)
	} else {
		output.insertAdjacentHTML('beforeend', `<div class="info">Ви не вказали кількість товару або його ціну!!!</div>`)
	}
})

function round(value, digitsAfterComa = 2) {
	return Number.isInteger(value) ? value : value.toFixed(digitsAfterComa)
}
