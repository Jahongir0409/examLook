// let clients = [
// 	{ user_id: 1, ism:'Muhammadjon', nomer:'998912231313'},
// 	{ user_id: 2, ism:'Jasur', nomer:'998917891313'},
// 	{ user_id: 3, ism:'Muhammad Ali', nomer:'998912215313'}
// ]

// let menu = [
// 	{ food_id:1, title:'spinner', img:'img/spinner.png', count:1},
// 	{ food_id:2, title:'hamburger', img:'img/hamburger.jpg', count:1},
// 	{ food_id:3, title:'crispy', img:'img/crispy.jpg', count:1},
// 	{ food_id:4, title:'fries', img:'img/fries.png', count:1},
// 	{ food_id:5, title:'coca-cola', img:'img/cola.jpg', count:1},
// ]
// window.localStorage.setItem('dataMenu', JSON.stringify(menu))
let menu = window.localStorage.getItem('dataMenu')
if(!menu) menu = []
else menu = JSON.parse(menu)

// let orders = [
// 	{order_id:1 , user_id: 1, food_id:1, count:1}
// ]

// window.localStorage.setItem('data', JSON.stringify(clients))
let clients = window.localStorage.getItem('data')
if(!clients) clients = []
else clients = JSON.parse(clients)

let selector = document.querySelector('#selector')
let listClients = document.querySelector('.list-clients-left')
let formUsers = document.querySelector('.form-users')
let userAdd = document.querySelector('#userAdd')
let numAdd = document.querySelector('#numAdd')
let buttonAddUser =  document.querySelector('#buttonAddUser')

let listOrders = document.querySelector('.list-orders')
let formOrders = document.querySelector('.form-orders')
let orderCount = document.querySelector('#orderCount') 

function menuRenderer (array) {
	selector.innerHTML = null
	for( let element  of array) {
		let option = document.createElement('option')
		option.innerText = element.title 
		option.value = element.food_id
		selector.appendChild(option)
	}
}
menuRenderer(menu)

function clientRenderer(array) {
	listClients.innerHTML = null
	for (let element of array) {
		let userLi = document.createElement('li')
		let clientName =  document.createElement('span')
		let clientNumber =  document.createElement('span')

		userLi.classList.add('item-clients-left')
		clientName.classList.add('client-name')
		clientNumber.classList.add('client-number')
		clientName.textContent = element.ism
		clientNumber.textContent = element.nomer

		userLi.appendChild(clientName)
		userLi.appendChild(clientNumber)
		listClients.appendChild(userLi)
	}
}
clientRenderer(clients)

function orderRenderer(array) {
	listOrders.innerHTML = null
	for( let element of array) {
		let orderLi = document.createElement('li')
		let orderImg = document.createElement('img')
		let orderTitle = document.createElement('span')
		let orderCounter = document.createElement('span')

		orderLi.classList.add('item-orders')
		orderImg.classList.add('img-order')
		orderTitle.classList.add('title-order')
		orderCounter.classList.add('count-order')


		orderImg.setAttribute('src', element.img)

		orderCounter.textContent = element.count
		orderTitle.textContent = element.title

		orderLi.appendChild(orderImg)
		orderLi.appendChild(orderTitle)
		orderLi.appendChild(orderCounter)
		listOrders.appendChild(orderLi)

	}
}
orderRenderer(menu)

formUsers.onsubmit = function (event) {
	event.preventDefault()
	let obj = {
		user_id : clients.length + 1,
		ism: userAdd.value,
		nomer : numAdd.value + ''
	}
	clients.push(obj)
	window.localStorage.setItem('data', JSON.stringify(clients))
	userAdd.value = null 
	numAdd.value = null
}
clientRenderer(clients)

formOrders.onsubmit = function (event) {
	event.preventDefault()
	let found = menu.find(e => e.food_id == selector.value)
	let founder = menu.find(e => e.food_id == selector.value)
	let obj = {
		food_id : menu.length + 1,
		title: found.title,
		img: founder.img,
		count : orderCount.value  
	}
	menu.push(obj)
	window.localStorage.setItem('dataMenu', JSON.stringify(menu))
	orderCount.value = null 
}
orderRenderer(menu)