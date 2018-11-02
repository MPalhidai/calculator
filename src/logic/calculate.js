import operate from './operate';

const calculate = (data, button) => {
  switch (button) {

    case 'AC':
      data.total = '';
      data.next = '';
      break;

    case '+/-':
      if (data.next !== '') {
        data.next = (parseFloat(data.next) * -1).toString();
      } else if (data.total !== '') {
        data.total = (parseFloat(data.total) * -1).toString();
      }
      break;

    case '%':
    case '÷':
    case 'X':
    case '-':
    case '+':
      data.operation = button;
      if(data.total !== '' && data.next !== '') {
        data.total = operate(data.total, data.next, data.operation);
      } else if(data.total === '' && data.next !== '') {
        data.total = data.next;
      }
      data.next = '';
      break;

    case '=':
      if(data.total !== '' && data.next !== '') {
        data.total = operate(data.total, data.next, data.operation);
        data.next = '';
      }
      break;

    case '.':
      if (!data.next.includes(button)) data.next += button;
      break;

    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      data.next += button;
      break;

    default:
      break;
  }

  return data;
}

export default calculate;
