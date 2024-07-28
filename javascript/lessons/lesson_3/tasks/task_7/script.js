'use strict'

const numberMonth = parseInt(prompt('Ведіть номер місяця щоб дізнатися пору року: '))
const december = 12,
	january = 1,
	february = 2,
	march = 3,
	june = 6,
	september = 9
const output = document.querySelector('.page__container')

if (numberMonth === december || numberMonth >= january && numberMonth < march)
	output.insertAdjacentHTML('beforeend', `<div>Це - Зима</div>`)
else if (numberMonth >= march && numberMonth < june)
	output.insertAdjacentHTML('beforeend', `<div>Це - Весна</div>`)
else if (numberMonth >= june && numberMonth < september)
	output.insertAdjacentHTML('beforeend', `<div>Це - Літо</div>`)
else if (numberMonth >= september && numberMonth < december)
	output.insertAdjacentHTML('beforeend', `<div>Це - Осінь</div>`)
else
	output.insertAdjacentHTML('beforeend', `<div class="info">Такого місяця не існує!!!</div>`)