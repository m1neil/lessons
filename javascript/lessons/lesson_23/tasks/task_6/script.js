'use strict'

// .page__container
//  Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.

window.addEventListener('load', windowLoaded)

function windowLoaded() {
	const books = [
		{ title: "To Kill a Mockingbird", year: 1960, author: "Harper Lee" },
		{ title: "Go Set a Watchman", year: 2015, author: "Harper Lee" },
		{ title: "1984", year: 1949, author: "George Orwell" },
		{ title: "Animal Farm", year: 1945, author: "George Orwell" },
		{ title: "Pride and Prejudice", year: 1813, author: "Jane Austen" },
	];

	const amountBooksEveryAuthor = new Map()

	for (const book of books) {
		amountBooksEveryAuthor.set(book.author, (amountBooksEveryAuthor.get(book.author) ?? 0) + 1)
	}

	const container = document.querySelector('.page__container')
	const authorsListDiv = createListMap(amountBooksEveryAuthor, 'authors', 'Автор', 'кількість')
	container.append(authorsListDiv)
}

function createListMap(mapData, className = 'list', titleKey = 'key', titleValue = 'value', typeList = 'ul') {
	const list = document.createElement(typeList)
	list.className = className
	mapData.forEach((value, key) => {
		const item = document.createElement('li')
		item.className = `${className}__item`
		item.textContent = `${titleKey}: ${key}; ${titleValue}: ${value}`
		list.append(item)
	})
	return list
}

function createElement(textContent, className = 'element', tag = 'div') {
	const element = document.createElement(tag)
	element.className = className
	element.textContent = textContent
	return element
}
