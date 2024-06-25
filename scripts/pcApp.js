import {cart, addToCart} from '../data/cart.js';

import {items} from '../data/items.js';

import {currencyRound} from './utilities/currency.js';

let itemsHTML = '';


items.forEach((item) => {

  itemsHTML += `
  <div class="pr-14 ">
  <div class="container mt-8 mb-8 mr-2 duration-1000 ease-in-out hover:scale-110">
  <div class=" card">
    
    <div class="frontptd ">

      <img class="w-full h-full" src="${item.image}">
    
      <h2 class="ml-2 text-green-600 font-medium -mb-5 text-xl dishname">${item.name}<br><span class="text-red-600 font-semibold">€${currencyRound(item.price)} </span> </h2>
      
      <p  class="float-right -mt-7">
        <button data-item-name="${item.name}" data-item-id="${item.id}" class="w-12  js-add-to-cart h-12  pl-2 pb-2 pr-2 mr-2 text-5xl font-extrabold text-black bg-green-300 border-2 border-white rounded-md shadow-2xl cart  active:bg-red-300 active:text-slate-950 visited:bg-black visited:text-bg-400 hover:bg-rose-600 hover:text-white hover:scale-110 hover:border-green-600">+<div class="tooltip">Add to cart</div></button>

        
        
      </p>

        </div>
  </div>
</div>
</div>
  `;

});

document.querySelector('.js-items-grid').innerHTML = itemsHTML ;

 function updateCartQuantity() {
  let cartQuantity = 0;

  if(cart.length === 0) {
    document.querySelector('.js-cart-total').innerHTML = '0';
  } else {
    document.querySelector('.js-cart-total').innerHTML = cartQuantity;

  }

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });  

  document.querySelector('.js-cart-total').innerHTML = cartQuantity;
  
}



document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const itemId = button.dataset.itemId;

  

    alert(`${items["name"]} has been added to cart.`);
    addToCart(itemId);
    updateCartQuantity(itemId);

  });

});





















