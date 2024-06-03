import {cart, saveToStorage} from '../../data/cart.js';
import {getItems} from '../../data/items.js';
import { currencyRound } from '../utilities/currency.js';



export function renderPaymentSummary() {


  let itemPrice = 0;
  let deliveryCharges = 0;

  if(cart.length === 0) {
    deliveryCharges = 0;
  } else {
    deliveryCharges = 499;
  }
 
  
  cart.forEach((cartItem) => {
     const item = getItems(cartItem.itemId);
     itemPrice += item.price * cartItem.quantity;
    });
  
  const totalIncludingTax = itemPrice + deliveryCharges;
  const tax = totalIncludingTax * 0.1;
  const total = totalIncludingTax;



 
   const paymentSummaryHTML = ` 
   
              <div class="payment-summary-title">
              Order Summary
              </div>

            <div class="payment-summary-row">
              <div>Items (${cart.length}):</div>
              <div class="payment-summary-money total-money">€ 
              ${currencyRound(itemPrice)}</div>
            </div>

            <div class="payment-summary-row">
              <div>Delivery&nbsp;charges:</div>
              <div class="payment-summary-money delivery-money">€ ${currencyRound(deliveryCharges)}</div>
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

            <button  class="w-full pt-2 pb-2 pl-6 pr-6  mb-3 text-2xl font-bold text-black bg-pink-300 rounded-xl hover:text-white placed-your-order hover:bg-pink-200 active:bg-pink-100 button-primary">
              Place your order
            </button>
 
 `;
 
 document.querySelector('.js-os-summary').innerHTML = paymentSummaryHTML;



 let placedYourOrderHTML = '';

 placedYourOrderHTML = `
 
 <div class="text-5xl pt-20 pr-10 pl-10 pb-4 mb-28 text-pink-400 font-bold "><p> Thank you for Stopping by. </p>
 
 <p class="text-blue-800"> Enjoy your meal. </p> </div>
 
 `;

 document.querySelector('.placed-your-order').addEventListener('click', () => {
  document.querySelector('.js-os-summary').innerHTML = placedYourOrderHTML;

  


 document.querySelector('.js-order-summary').innerHTML = '';


 document.querySelector('.js-checkout-txt').innerHTML = '';

 document.querySelector('.js-order-delivery-txt').innerHTML = '';

 document.querySelector('.js-review-your-order-txt').innerHTML = '';


 });

 localStorage.clear();

 

}


