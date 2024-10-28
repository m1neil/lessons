'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const products = [
		new Product('Product A', 100, 10),
		new Product('Product B', 150, 5),
		new Product('Product C', 200, 20),
		new Product('Product D', 250, 15),
		new Product('Product E', 300, 8)
	]

	const shop = new Shop(products)
	const list = document.createElement('ul')
	list.className = 'products'

	for (const product of shop) {
		const itemList = document.createElement('li')
		itemList.className = 'products__item'
		itemList.textContent = product
		list.append(itemList)
	}
	document.querySelector('.page__container').append(list)
}

class Shop {
	constructor(productsList = []) {
		this.productsList = productsList
	}

	*[Symbol.iterator]() {
		for (const product of this.productsList) {
			yield `${product.name}: ${product.TotalPrice} грн.`
		}
	}
}

class Product {
	#price
	#amount

	constructor(name = 'title product', price = 0, amount = 0) {
		this.name = name
		this.Price = price
		this.Amount = amount
	}

	// set get
	get Price() {
		return this.#price
	}
	set Price(newPrice) {
		this.isPositiveValue(newPrice)
		this.#price = newPrice
	}

	get Amount() {
		return this.#amount
	}
	set Amount(newAmount) {
		this.isPositiveValue(newAmount)
		this.#amount = newAmount
	}

	get TotalPrice() {
		return this.Price * this.Amount
	}

	isPositiveValue(value) {
		if (value < 0)
			throw new RangeError("The price value cannot be negative!")
		return true
	}

}