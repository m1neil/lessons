window.addEventListener('load', () => {
	if (!localStorage.getItem('first-time')) {
		const str = 'О Великі Апостоли Розробки веб-інтерфейсів (Ментори)!! Каюся за дублі компонентів та загалом за кривизну роботи. Не хотів юзати JS (Зроблю це у 16 уроці) хотілося зробити, використовуючи лише html+css. Деякі я елементи сховав і до них можна з горем навпіл достукатися. Деякі я ховав просто display: none; З розрахунку, що вони типу будуть переміщуватися в меню бургер. Там дублювати код я вже не став. Вважаючи, що це буде вже занадто кринжово. Тому такі елементи як мова, категорії в один гарний момент, до них буде не достукатися 😊. Місцями переміщав елемента, як уже говорив, використовуючи дублі, тим самим імітуючи динамічний адаптив (За це мільйон разів каюся!!!!!!). Бургер працює, але в один бік. Було ліньки робити два. Для того щоб закрити меню потрібно клікнути на логотип або на посилання. Щиро дякую за вашу плідну працю!!!';
		alert(str);
		localStorage.setItem('first-time', true);
	}
});