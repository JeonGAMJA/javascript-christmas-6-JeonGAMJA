import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../View/InputView.js';
import { MENU } from '../constants.js';

class Menu {
  getOrderMenuName(order) {
    const orderMenu = [];
    for (const orderMenu in order) {
      orderMenu.push(orderMenu);
    }
    return orderMenu;
  }

  getOrderMenuQuantity(order) {
    console.log(order);
    const quantity = [];
    for (const orderMenu in order) {
      quantity.push(order[orderMenu]);
    }
    return quantity;
  }

  getCost() {}
}
export default Menu;
