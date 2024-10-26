'use strict'

// .page__container

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const inputColor = document.querySelector('#color')
	if (inputColor)
		inputColor.addEventListener('input', changeColor)

	window.addEventListener('storage', changeColorOtherTabs)
	changeColorOtherTabs()
}

function changeColor(e) {
	const color = e.target.value
	localStorage.setItem('color', color)
	changeColorBackgroundSite(color)
	const amountChangeColor = parseInt(sessionStorage.getItem('amountChangeColor'))
	sessionStorage.setItem('amountChangeColor', isNaN(amountChangeColor) ? 1 : amountChangeColor + 1)
}

function changeColorBackgroundSite(value) {
	if (value)
		document.body.style.backgroundColor = value
}

function changeColorOtherTabs() {
	const currentColor = localStorage.getItem('color') ?? '#333333'
	changeColorBackgroundSite(currentColor)
	const inputColor = document.querySelector('#color')
	if (inputColor)
		inputColor.value = currentColor
}