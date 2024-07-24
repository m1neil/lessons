'use strict'

//  З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

window.addEventListener('load', () => {
	const output = document.querySelector('.page__container')
	const goods = []
	for (let i = 0; i < 3; i++) {
		const product = {}
		product.id = i + 1
		product.label = prompt('Назва товару:', 'No name')
		product.price = +prompt('Вартість товару')
		product.quantity = +prompt('Кількість одиниць товару')
		product.totalPrice = product.price * product.quantity
		goods.push(product)
	}

	const totalPriceAllGoods = goods.reduce((sum, { totalPrice }) => sum + totalPrice, 0);
	let rows = ''
	goods.forEach(item => {
		rows += `
			<tr>
				<th>${item.id}</th>
				<td>${item.label}</td>
				<td>${round(item.quantity)}</td>
				<td>${round(item.price)}₴</td>
				<td>${round(item.totalPrice)}₴</td>
			</tr>
		`
	})

	const table = `
		<table class="page__table table">
			<thead class="table__thead">
				<tr>
					<th>Номер</th>
					<th>Назва</th>
					<th>Кількість</th>
					<th>Ціна за одиницю товару</th>
					<th>Загальна ціна</th>
				</tr>
			</thead>
			<tbody class="table__tbody">
				${rows}
			</tbody>
			<tfoot class="table__tfoot">
				<th colspan="4">До оплати</th>
				<td>${round(totalPriceAllGoods)}₴</td>
			</tfoot>
		</table>
	`
	output.insertAdjacentHTML('beforeend', table)
})

function round(value, digitsAfterComa = 2) {
	return Number.isInteger(value) ? value : value.toFixed(digitsAfterComa)
}
