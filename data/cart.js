export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart) {
  cart = [];
}

export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }  



export function addToCart(itemId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if(itemId === cartItem.itemId) {
        matchingItem = cartItem; 
    }
  });
 

  if(matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      itemId: itemId,
      quantity: 1
    });
  }
saveToStorage();
}

export function deleteFromCart(itemId) {
   const newCart = [];

   cart.forEach((cartItem) => {
    if(cartItem.itemId != itemId) {
      newCart.push(cartItem);
    }
   });

   cart = newCart;

   saveToStorage();
  }
