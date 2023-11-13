import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../View/InputView.js';

class Menu {
  getOrderMenuQuantity(order) {
    const quantity = [];
    for (const orderMenu in order) {
      quantity.push(order[orderMenu]);
    }
    return quantity;
  }
  getMenuInfo(order) {}

  getCost() {}
}
export default Menu;
