let users = window.localStorage.getItem('usersData')
let foods = window.localStorage.getItem('foodsData')
let orders = window.localStorage.getItem('ordersData')

if (!users) {
	users = [
	{ user_id: 1, first_name:'Muhammadjon', telephone:'998912231313'},
	{ user_id: 2, first_name:'Umarjon', telephone:'998945631313'},
	{ user_id: 3, first_name:'Muhammad Ali', telephone:'998912235689'},
	]
} else {
	users =JSON.parse(users)
}


if (!foods) {
	foods = [
	{ food_id:1, food_name:'spinner', food_img:'img/spinner.png'},
	{ food_id:2, food_name:'hamburger', food_img:'img/hamburger.jpg'},
	{ food_id:3, food_name:'crispy', food_img:'img/crispy.jpg'},
	{ food_id:4, food_name:'fries', food_img:'img/fries.png'},
	{ food_id:5, food_name:'coca-cola', food_img:'img/cola.jpg'},
	]
} else {
	foods = JSON.parse
}



if (!orders) {
	orders = [
	{ user_id:1, food_id:1, count :1 },
	{ user_id:1, food_id:2, count :1 },
	{ user_id:2, food_id:3, count :1 },
	{ user_id:3, food_id:2, count :1 },
	{ user_id:3, food_id:4, count :1 },
	]
} else {
	orders = JSON.parse(orders)
}
