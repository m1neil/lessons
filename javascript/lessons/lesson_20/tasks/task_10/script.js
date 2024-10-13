'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const goods = [
		{
			id: 0,
			title: 'Миша Logitech G102 Lightsync USB Black',
			link: 'https://rozetka.com.ua/ua/logitech_910_005823/p213709267/',
			srcImg: 'https://content1.rozetka.com.ua/goods/images/big/24709323.jpg',
			amount: 1,
			price: 1399
		},
		{
			id: 1,
			title: 'Телевізор Hisense QLED 43E7KQ',
			link: 'https://rozetka.com.ua/ua/hisense-43e7kq/p416904030/',
			srcImg: 'https://content.rozetka.com.ua/goods/images/big/407199878.jpg',
			amount: 2,
			price: 15999
		},
		{
			id: 2,
			title: 'Навушники Hator Hypergang 2 USB 7.1 Black',
			link: 'https://rozetka.com.ua/ua/hator-hta-940/p391482618/',
			srcImg: 'https://content2.rozetka.com.ua/goods/images/big/357433796.jpg',
			amount: 1,
			price: 2299
		},
	]

	const cart = new ProductManager(goods)
	cart.render('.page__container')
}

class ProductManager {
	constructor(goods) {
		this.goods = goods.map(({ id, title, link, srcImg, amount, price }) => new Product(
			id,
			title,
			link,
			srcImg,
			amount,
			price
		))
		this.totalPrice = this.getTotalPrice()
	}

	getTotalPrice() {
		return this.goods.reduce((prevSum, product) => prevSum + product.totalPrice, 0)
	}

	updateTotalPrice() {
		this.totalPrice = this.getTotalPrice()
		this.totalPriceDiv.setAttribute('data-price', this.totalPrice)
	}

	removeProductById(id) {
		const indexRemoveElement = this.goods.findIndex(product => product.id === id)
		if (indexRemoveElement !== -1) {
			this.goods.splice(indexRemoveElement, 1)
			this.updateTotalPrice()
		}
	}

	render(selectorContainer) {
		const container = document.querySelector(selectorContainer)
		if (!container)
			throw new Error(`Not found element by selector - ${selectorContainer}`);

		const cart = document.createElement('div')
		cart.className = 'cart'
		cart.addEventListener('update-price', this.updateTotalPrice.bind(this))
		cart.addEventListener('delete-product', e => this.removeProductById(e.detail.id))

		const cartItems = document.createElement('div')
		cartItems.className = 'cart__items'
		this.goods.forEach(product => product.render(cartItems))
		cart.append(cartItems)

		const totalPriceDiv = document.createElement('div')
		totalPriceDiv.className = 'cart__total-price'
		totalPriceDiv.textContent = 'Загалом до оплати:'
		totalPriceDiv.setAttribute('data-price', this.totalPrice)
		this.totalPriceDiv = totalPriceDiv
		cart.append(totalPriceDiv)

		container.append(cart)
	}
}

class Product {

	constructor(id, title, link, srcImg, amount, price) {
		this.id = id
		this.link = link
		this.title = title
		this.srcImg = srcImg
		this.amount = new Quantity('amount-product', 'product-cart', amount)
		this.price = price
		this.totalPrice = this.getTotalPrice()
	}

	getTotalPrice() {
		return this.amount.currentValue * this.price
	}

	updateTotalPrice() {
		this.totalPrice = this.getTotalPrice()
		this.totalPriceDiv.setAttribute('data-price', this.totalPrice)
		const eventUpdate = new CustomEvent('update-price', {
			bubbles: true
		})
		this.totalPriceDiv.dispatchEvent(eventUpdate)
	}

	createCard() {
		const wrapper = document.createElement('div')
		wrapper.addEventListener('update-quantity', this.updateTotalPrice.bind(this))
		wrapper.className = 'cart__product product-cart'

		const imageDiv = document.createElement('div')
		imageDiv.className = 'product-cart__preview'

		const img = document.createElement('img')
		img.src = this.srcImg
		img.alt = this.title
		imageDiv.append(img)
		wrapper.append(imageDiv)

		const title = document.createElement('h4')
		title.className = 'product-cart__title'

		const link = document.createElement('a')
		link.href = this.link
		link.target = '_blank'
		link.textContent = this.title
		title.append(link)
		wrapper.append(title)

		this.amount.render(wrapper)

		const totalPriceDiv = document.createElement('div')
		totalPriceDiv.className = 'product-cart__total-price'
		totalPriceDiv.textContent = 'До оплати:'
		totalPriceDiv.setAttribute('data-price', this.totalPrice)
		this.totalPriceDiv = totalPriceDiv
		wrapper.append(totalPriceDiv)

		const buttonDelete = document.createElement('button')
		buttonDelete.className = 'product-cart__delete'
		buttonDelete.type = 'button'
		buttonDelete.addEventListener('click', e => this.removeProduct(e.currentTarget))
		wrapper.append(buttonDelete)

		return wrapper
	}

	removeProduct(trigger) {
		const eventDelete = new CustomEvent('delete-product', {
			detail: {
				id: this.id
			},
			bubbles: true
		})
		trigger.dispatchEvent(eventDelete)
		this.card.remove()
	}

	render(container) {
		const card = this.createCard()
		this.card = card
		container.append(card)
	}

}

class Quantity {
	constructor(name, bemClass = '', starValue = 1, minValue = 1, autocomplete = 'off', type = 'number') {
		this.name = name
		this.bemClass = bemClass
		this.type = type
		this.currentValue = starValue
		this.autocomplete = autocomplete
		this.minValue = minValue
	}

	createButton(modify = 'decrease') {
		const button = document.createElement('button')
		button.className = `quantity__button quantity__button--${modify}`
		return button
	}

	quantityEvents(e) {
		const target = e.target

		if (
			target.closest('.quantity__button--decrease') &&
			this.currentValue > this.minValue
		) {
			this.input.value = --this.currentValue
			this.createEvent()
		} else if (target.closest('.quantity__button--increase')) {
			this.input.value = ++this.currentValue
			this.createEvent()
		}
	}

	createEvent() {
		const event = new CustomEvent('update-quantity', {
			bubbles: true
		})
		this.input.dispatchEvent(event)
	}

	changeValue() {
		let value = parseInt(this.input.value)

		if (isNaN(value)) {
			// console.log('is Nan');
			return
		} else if (value < this.minValue) {
			value = this.minValue
			this.input.value = value
		}

		this.currentValue = value
		this.createEvent()
		// console.log(this.currentValue);
	}

	fillEmptyField() {
		const value = this.input.value

		if (!value) {
			this.currentValue = this.minValue
			this.input.value = this.currentValue
			this.createEvent()
		}
	}

	render(container) {
		const wrapper = document.createElement('div')
		const wrapperClass = this.bemClass ? `${this.bemClass}__quantity quantity` : 'quantity'
		wrapper.className = `${wrapperClass} `
		wrapper.addEventListener('click', this.quantityEvents.bind(this))

		const inputDiv = document.createElement('div')
		inputDiv.className = 'quantity__input'

		const input = document.createElement('input')
		input.type = this.type
		input.value = this.currentValue
		input.autocomplete = this.autocomplete
		input.name = this.name
		input.min = this.minValue
		input.addEventListener('input', this.changeValue.bind(this))
		input.addEventListener('focusout', this.fillEmptyField.bind(this))
		this.input = input
		inputDiv.append(input)
		wrapper.append(inputDiv)

		wrapper.prepend(this.createButton())
		wrapper.append(this.createButton('increase'))
		container.append(wrapper)
	}
}

