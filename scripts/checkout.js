import {cart} from '../data/cart.js';
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
  <div class="shadow-xl cart-item-container">
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
                <span class="text-red-600 update-quantity-link link-primary">
                  Update
                </span>
                <span class="text-red-600 delete-quantity-link link-primary">
                  Delete
                </span>
              </div>
            </div>

            
          </div>
        </div>
  
  `;
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

console.log(cartSummaryHTML);