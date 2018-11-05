let Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
  let x = Big(numberOne);
  let y = Big(numberTwo);
  let total = null;

  switch (operation) {
    case '%':
      total = x.mod(y);
      break;
    case '-':
      total = x.minus(y);
      break;
    case 'X':
      total = x.times(y);
      break;
    case '÷':
      if(numberTwo === '0') {
        total = 'undefined';
      } else {
        total = x.div(y);
      }
      break;
    default:
      total = x.plus(y);
      break;
  }

  if(total.toString().length > 10) {
    return total.toExponential(6).toString();
  } else {
    return total.toString();
  }
}

export default operate;
