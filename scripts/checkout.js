import {cart, deleteFromCart} from '../data/cart.js';
import {items} from '../data/items.js';
import {currencyRound} from './utilities/currency.js';

let cartSummaryHTML = '';


cart.forEach((cartItem) => {

  const itemId = cartItem.itemId;

  let matchingProduct;

  items.forEach((item) => {
    if(item.id === itemId) {
      matchingProduct = item;
    }
  });

  cartSummaryHTML +=
  `
  <div class="shadow-xl cart-item-container js-cart-item-container-${matchingProduct.id}">
          <div class="mt-2 mb-6 text-lg font-bold text-pink-600">
            Delivery date: Tuesday, June 21
          </div>

          <div class="cart-item-details-grid">
            <img class="product-image"
              src="${matchingProduct.image}">

            <div class="grid cart-item-details">
              <div class="product-name">
                ${matchingProduct.name}
              </div>
              <div class="product-price">
                € ${currencyRound(matchingProduct.price)}
              </div>

              <div class="product-quantity">
                <span>
                  Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="text-green-600 hover:text-red-500 font-semibold update-quantity-link link-primary">
                  Update
                </span>
                <span class="text-red-600 hover:text-blue-500 font-semibold js-delete-link delete-quantity-link link-primary" data-item-id="${matchingProduct.id}">
                  Delete
                </span>
              </div>
            </div>

            
          </div>
        </div>
  
  `;
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link').forEach((link) => {
  link.addEventListener('click', () => {
    const itemId = link.dataset.itemId;
    deleteFromCart(itemId);
    

   const container = document.querySelector(`.js-cart-item-container-${itemId}`);
   container.remove();
  });

});