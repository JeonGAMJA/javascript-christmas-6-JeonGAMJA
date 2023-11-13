import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../View/InputView.js';

class Menu {
  getOrderMenuQuantity(order) {
    for (const orderMenu in order) {
      const quantity = order[orderMenu];
      console.log(quantity);
    }
  }
  getMenuInfo(order) {}

  getCost() {}
}
export default Menu;
