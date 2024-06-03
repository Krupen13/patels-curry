import {cart} from '../../data/cart.js';

export function reviewCheckout() {





let checkoutTextHTML = '';


checkoutTextHTML = `

<div class="mt-6 text-3xl font-semibold checkout-header-middle-section js-checkout-txt">
Checkout (${cart.length}) <a class="text-red-600 return-to-home-link"
  href="order.html"></a>
</div>

`;

document.querySelector('.js-checkout-txt').innerHTML = checkoutTextHTML;




}