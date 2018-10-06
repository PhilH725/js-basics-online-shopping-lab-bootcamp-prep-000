var cart = [];
var randomPrice = Math.floor(Math.random() * 100) + 1

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = { 'itemName': item, 'itemPrice': randomPrice }
 cart.push(newItem)
 return cart
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

console.log(Math.floor(Math.random() * 100) + 1)