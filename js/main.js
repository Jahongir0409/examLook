
let usersList = document.querySelector('.list-clients-left')
let formUsers = document.querySelector('.form-users')
let usernameInput = document.querySelector('#userAdd')
let telephoneInput = document.querySelector('#numAdd')
let selector = document.querySelector('#selector')
let userHeader = document.querySelector('.client-name-orders')
let userIdHeader = document.querySelector('#clientId')
let ordersList = document.querySelector('.list-orders')
let foodsForm = document.querySelector('.form-orders')
let foodsCount = document.querySelector('#orderCount') 


function userRenderer (array) {
	usersList.innerHTML = null
	array.map( user => {
		let userItem = document.createElement('li')
		let username =  document.createElement('span')
		let mobile =  document.createElement('a')

		userItem.classList.add('item-clients-left')
		username.classList.add('client-name')
		mobile.classList.add('client-number')
		mobile.setAttribute('href',`tel:+${user.telephone}`)

		username.textContent = user.first_name
		mobile.textContent = '+' + user.telephone

		userItem.appendChild(username)
		userItem.appendChild(mobile)
		usersList.appendChild(userItem)

		userItem.onclick = (event) => {
			userHeader.textContent = user.first_name
			userIdHeader.textContent = user.user_id

			
			ordersRenderer(user.user_id)		
		}
	})
}
function foodsRenderer (array) {
	array.map( (food) => {
		let option =  document.createElement('option')
		option.value = food.food_id
		option.textContent = food.food_name
		selector.appendChild(option)
	})
}

function ordersRenderer (userId) {
	 ordersList.innerHTML = null
	for (let food of foods) {
		for (let order of orders) {
			if(food.food_id == order.food_id && order.user_id == userId){
				let li = document.createElement('li')
				let img = document.createElement('img')
				let foodName = document.createElement('span')
				let foodCount = document.createElement('span')

				li.classList.add('item-orders')
				img.classList.add('img-order')
				foodName.classList.add('title-order')
				foodCount.classList.add('count-order')

				img.setAttribute('src', food.food_img)
				foodName.textContent = food.food_name
				foodCount.textContent = order.count

				li.appendChild(img)
				li.appendChild(foodName)
				li.appendChild(foodCount)
				ordersList.appendChild(li)
			}
		}
	}
}


formUsers.onsubmit = (event) => {
	event.preventDefault()
	let newUser = {
		user_id: users[users.length - 1].user_id + 1,
		first_name: usernameInput.value,
		telephone : telephoneInput.value
	}
	users.push(newUser)
	window.localStorage.setItem('usersData', JSON.stringify(users))
	userRenderer(users)
}

foodsForm.onsubmit = (event) => {
	event.preventDefault()
	if(userIdHeader.textContent) {
		let found  = orders.find( order => order.food_id == selector.value && order.user_id == userIdHeader.textContent)
		if (found) {
			found.count = parseInt(foodsCount.value) + parseInt(found.count)
		}
		else{
			let newOrder = {
				user_id : userIdHeader.textContent,
				food_id: selector.value,
				count: foodsCount.value
			}
			orders.push(newOrder)
		}
		
		selector.value = 1
		foodsCount.value = null
		window.localStorage.setItem('ordersData', JSON.stringify(orders))
		ordersRenderer(userIdHeader.textContent)
	}
}

userRenderer(users)
foodsRenderer(foods)
