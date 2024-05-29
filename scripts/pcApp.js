import {cart} from '../data/cart.js';

import {items} from '../data/items.js';
let itemsHTML = '';

items.forEach((item) => {

  itemsHTML += `
  <div class="pr-10">
  <div class="container  mb-8 mr-16 duration-1000 ease-in-out hover:scale-110">
  <div class=" card">
    
    <div class="frontptd ">

      <img class="w-full h-full" src="${item.image}">
    

      
      <h2 class="ml-2 text-xl dishname">${item.name}&nbsp;€${item.price / 100}</h2>
      
      <p  class="float-right -mt-7">
        <button data-item-id="${item.id}" class="w-10  js-add-to-cart h-8 pl-2 pr-2 mr-2 text-lg font-extrabold text-black bg-green-300 border-2 border-white rounded-md shadow-2xl cart active:bg-red-300 active:text-slate-950 visited:bg-black visited:text-bg-400 hover:bg-rose-600 hover:text-white hover:scale-110 hover:border-green-600">+<div class="tooltip">Add to cart</div></button>
        
      </p>
    
      
        </div>
  </div>
</div>
</div>
  `;

});



document.querySelector('.js-items-grid').innerHTML = itemsHTML ;


document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const itemId = button.dataset.itemId;

    let matchingItem;

    cart.forEach((product) => {
      if(itemId === product.itemId) {
          matchingItem = product; 
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

    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
   
  });
});




















