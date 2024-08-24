'use strict'

if (confirm('Розпочати тестування?')) {
	const paymentDuringYear = getPaymentDuringYear()
	const sumForAllYear = getSumForAllYear(paymentDuringYear)
	const sumForFirstHalfYear = getSumForFirstHalfYear(paymentDuringYear)
	const sumForSecondHalfYear = getSumForSecondHalfYear(paymentDuringYear)
	const sumForSummer = getSumForSummer(paymentDuringYear)
	const sumForSecondNeighborhood = getSumForSecondNeighborhood(paymentDuringYear)
	const sumForEvenMonths = getSumForEvenMonths(paymentDuringYear)
	const sumForMonthsStartingSeason = getSumForMonthsStartingSeason(paymentDuringYear)

	const output = document.querySelector('.page__container')
	output.insertAdjacentHTML('beforeend', `
		<div class="page__text">По місячна плата протягом року: ${paymentDuringYear.join(', ')}</div>
		<ol class="list-page">
			<li class="list-page__item">Сума за весь рік: ${sumForAllYear}</li>
			<li class="list-page__item">Сума у першій половині року: ${sumForFirstHalfYear}</li>
			<li class="list-page__item">Сума у другій половині року: ${sumForSecondHalfYear}</li>
			<li class="list-page__item">Сума за літо: ${sumForSummer}</li>
			<li class="list-page__item">Сума за ІІ квартал: ${sumForSecondNeighborhood}</li>
			<li class="list-page__item">Сума за парні місяці (з парними номерами): ${sumForEvenMonths}</li>
			<li class="list-page__item">Сума за місяці, які є початковими у сезоні (весна, літо, осінь, зима): ${sumForMonthsStartingSeason}</li>
		</ol>
	`)

	function getSumForAllYear(payment) {
		let sum = 0
		for (let i = 0; i < payment.length; i++) {
			sum += payment[i]
		}
		return sum
	}

	function getSumForFirstHalfYear(payment) {
		let sum = 0
		for (let i = 0; i < 6; i++) {
			sum += payment[i]
		}
		return sum
	}

	function getSumForSecondHalfYear(payment) {
		let sum = 0
		for (let i = 6; i < 12; i++) {
			sum += payment[i]
		}
		return sum
	}

	function getSumForSummer(payment) {
		let sum = 0
		for (let i = 5; i <= 7; i++) {
			sum += payment[i]
		}
		return sum
	}

	function getSumForSecondNeighborhood(payment) {
		let sum = 0
		for (let i = 3; i <= 5; i++) {
			sum += payment[i]
		}
		return sum
	}

	function getSumForEvenMonths(payment) {
		let sum = 0
		for (let i = 0; i < 12; i++) {
			if (isEvenNumber(i + 1))
				sum += payment[i]
		}
		return sum
	}

	function getSumForMonthsStartingSeason(payment) {
		let sum = 0
		for (let i = 2; i < 12; i += 3) {
			sum += payment[i]
		}
		return sum
	}

	function isEvenNumber(number) {
		return number % 2 === 0
	}


	function getPaymentDuringYear() {
		const payment = []
		for (let i = 0; i < 12; i++) {
			payment.push(getRandomValue(5, 10))
		}
		return payment
	}

	function getRandomValue(minValue, maxValue) {
		return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
	}
}