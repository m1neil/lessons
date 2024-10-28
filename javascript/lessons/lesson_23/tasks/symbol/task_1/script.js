'use strict'

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const phoneNumber = new PhoneNumber('+38 049 567 8901')
	const container = document.querySelector('.page__container')
	const phoneNumberElement = createElement(phoneNumber, 'phone')
	container.append(phoneNumberElement)
}

function createElement(textContent, className = 'element', tag = 'div') {
	const element = document.createElement(tag)
	element.className = className
	element.textContent = textContent
	return element
}

class PhoneNumber {
	constructor(number) {
		this.number = number
	}

	getNameOperator(code) {
		let result

		switch (code) {
			case '067': result = 'Vodafone'
				break
			case '068': result = 'Kyivstar'
				break
			case '063': result = 'Lifecell'
				break
			case '044': result = 'Ukrtelecom'
				break
			case '049': result = 'Intertelecom'
				break
			default: result = 'unknown operator'
				break
		}

		return result
	}

	[Symbol.toPrimitive](hint) {
		let result

		switch (hint) {
			case 'string':
				const regexp = /(?<=\+38\s)(\d{3})/
				const codeOperator = this.number.match(regexp)

				if (codeOperator)
					result = this.getNameOperator(codeOperator[0])
				else
					result = this.number
				break
			default:
				result = this.number
				break
		}

		return result
	}
}
