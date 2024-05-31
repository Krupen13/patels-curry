export let cart = [{
  itemId : '13',
  quantity: 1
}, {
  itemId: '17',
  quantity: 1
}];

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
}

export function deleteFromCart(itemId) {
   const newCart = [];

   cart.forEach((cartItem) => {
    if(cartItem.itemId != itemId) {
      newCart.push(cartItem);
    }
   });

   cart = newCart;
  }
