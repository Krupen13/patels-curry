import {currencyRound} from '../scripts/utilities/currency.js';

if(currencyRound(549) === '5.49') {
  console.log('passed');
} else {
  console.log('failed');
}

if(currencyRound(0) === '0.00') {
  console.log('passed');
} else {
  console.log('failed');
}

if(currencyRound(105) === '1.05') {
  console.log('passed');
} else {
  console.log('failed');
}
