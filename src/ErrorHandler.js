import { MENU } from './constants.js';
import Menu from './Model/Menu.js';

const verifyNumber = /^[0-9]+$/;

class ErrorHandler {
  validateDay(day) {
    if (day < 1 || day > 31) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  }

  validateNumber(day) {
    if (verifyNumber.test(day) === false) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  }

  validateOrder(order) {
    for (const quantity in order) {
      if (
        order[quantity] === 0 ||
        verifyNumber.test(order[quantity]) === false ||
        order[quantity] === undefined
      ) {
        throw new Error(
          '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
        );
      }
    }
  }
}

export default ErrorHandler;
