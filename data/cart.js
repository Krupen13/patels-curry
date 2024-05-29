export const cart = [];

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