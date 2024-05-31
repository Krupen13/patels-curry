import {cart, deleteFromCart} from '../data/cart.js';
import {items, getItems} from '../data/items.js';
import {currencyRound} from './utilities/currency.js';

export function renderOrderSummary() {

      let cartSummaryHTML = '';

     

      cart.forEach((cartItem) => {

        const itemId = cartItem.itemId;

        const matchingProduct = getItems(itemId);

        cartSummaryHTML +=
        `
        <div class="shadow-xl cart-item-container mb-6 rounded-3xl hover:scale-105 transition-all duration-700 hover:shadow-md hover:shadow-pink-300 delay-50 js-cart-item-container-${matchingProduct.id}">
                

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

        renderOrderSummary();
        });

      });

   

  

    }

    renderOrderSummary();


    /*




             let itemPrice = 0;
      let deliveryCharges = 499;

      cart.forEach((cartItem) => {
         const item = getItems(cartItem.itemId);
         itemPrice += item.price * cartItem.quantity;
      });

      const totalIncludingTax = itemPrice + deliveryCharges;
      const tax = totalIncludingTax * 0.1;
      const total = totalIncludingTax;


    
              <div class="payment-summary-title">
              Order Summary
            </div>

            <div class="payment-summary-row">
              <div>Items (0):</div>
              <div class="payment-summary-money total-money">€ 
              ${currencyRound(itemPrice)}</div>
            </div>

            <div class="payment-summary-row">
              <div>Delivery&nbsp;charges:</div>
              <div class="payment-summary-money delivery-money">€ 4.99</div>
            </div>

            <div class="payment-summary-row subtotal-row">
              <div>Total including tax:</div>
              <div class="payment-summary-money">€ 
              ${currencyRound(totalIncludingTax)}</div>
            </div>

            <div class="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div class="payment-summary-money tax-money">€ 
              ${currencyRound(tax)}</div>
            </div>

            <div class="payment-summary-row total-row">
              <div>Order total:</div>
              <div class="payment-summary-money">€ 
              ${currencyRound(total)}</div>
            </div>

            <button class="w-full pt-2 pb-2 pl-6 pr-6 mb-3 text-2xl font-bold text-black bg-pink-300 rounded-xl hover:text-white hover:bg-pink-200 active:bg-pink-100 button-primary">
              Place your order
            </button>
    */ 