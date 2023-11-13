import { Console } from '@woowacourse/mission-utils';
import ErrorHandler from '../ErrorHandler.js';
import { MENU } from '../constants.js';

const errorHandler = new ErrorHandler();

const InputView = {
  async getDateUserInput() {
    try {
      const day = await Console.readLineAsync(
        '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)',
      );
      errorHandler.validateDay(day);
      errorHandler.validateNumber(day);

      return day;
    } catch (e) {
      Console.print(e.message);
      return this.getDateUserInput();
    }
  },

  async getMenuUserInput() {
    try {
      const ordersInput = await Console.readLineAsync(
        `주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)`,
      );

      const orders = ordersInput.split(',').map(order => order.split('-'));
      const order = Object.fromEntries(
        orders.map(([menu, quantity]) => [menu, Number(quantity)]),
      );
      errorHandler.validateOrder(order);
      errorHandler.validateOrderQuantity(order);
      errorHandler.validateDuplicateMenu(order, orders);
      errorHandler.validateOnlyDrink(order);

      return order;
    } catch (e) {
      Console.print(e.message);
      return this.getMenuUserInput();
    }
  },
};

export default InputView;
