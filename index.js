var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    let price = Math.floor(Math.random() * 100)
    cart.push({ itemName: item, itemPrice: price})
    return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0)
    return 'Your shopping cart is empty.'
  var contents = 'In your cart, you have '
  for (let i = 0; i < cart.length; i++){
    contents += `${cart[i].itemName} at $${cart[i].itemPrice}`
    if (i < cart.length - 1)
      contents += ', '
    if (i === cart.length - 1)
      contents += 'and'
  }
  return contents
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
