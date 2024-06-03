import {cart, deleteFromCart, saveToStorage} from '../../data/cart.js';
import {items, getItems} from '../../data/items.js';
import {currencyRound} from '../utilities/currency.js';
import {renderPaymentSummary} from './paymentSummary.js';
import { reviewCheckout } from './reviewPage.js';



export function renderOrderSummary() {

  if(cart.length === 0) {
    document.querySelector('.js-order-delivery-txt').innerHTML = 'Your cart is empty :(';
  }

      let cartSummaryHTML = '';

      cart.forEach((cartItem) => {

        const itemId = cartItem.itemId;

         let matchingProduct = getItems(itemId);

        cartSummaryHTML +=
        `

        <div class="shadow-xl cart-item-container mb-6 rounded-2xl hover:scale-105 transition-all duration-700 hover:shadow-md hover:shadow-pink-300 delay-50 js-cart-item-container-${matchingProduct.id}">
                

                <div class="cart-item-details-grid">
                  <img class="product-image rounded-2xl shadow-2xl"
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
                     <!-- <span class="text-green-600 hover:text-red-500 font-semibold update-quantity-link link-primary">
                        Update
                      </span>  -->
                      <span class="text-red-600 hover:text-green-600 font-semibold js-delete-link delete-quantity-link link-primary" data-item-id="${matchingProduct.id}">
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
          saveToStorage();
          

        const container = document.querySelector(`.js-cart-item-container-${itemId}`);
        container.remove();

        

        saveToStorage();
        renderPaymentSummary();
        renderOrderSummary();
        reviewCheckout();
        
        
        });
        
      });

    }