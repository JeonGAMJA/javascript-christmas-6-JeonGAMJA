import { MENU } from './constants.js';
import Menu from './Model/Menu.js';

const verifyNumber = /^[0-9]+$/;
const menu = new Menu();

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

  validateOrderQuantity(order) {
    const quantity = menu.getOrderMenuQuantity(order);

    if (quantity.reduce((acc, cur) => acc + cur) > 20) {
      throw new Error(`[ERROR] 주문은 20개 까지 가능합니다.`);
    }
  }

  validateDuplicateMenu(order, orders) {
    if (Object.keys(order).length !== orders.length) {
      throw new Error(`[ERROR] 유효하지 않은 주문입니다. 다시 입력해주세요.`);
    }
  }

  validateOnlyDrink(order) {
    if (order) {
    }
  }
}

export default ErrorHandler;
