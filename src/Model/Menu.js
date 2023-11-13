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
    const quantity = [];
    for (const orderMenu in order) {
      quantity.push(order[orderMenu]);
    }
    return quantity;
  }

  getOrderDetail(order) {
    const orderDetails = {};

    for (const orderMenu in order) {
      if (order.hasOwnProperty(orderMenu) && MENU.hasOwnProperty(orderMenu)) {
        orderDetails[orderMenu] = {
          const: MENU[orderMenu].cost,
          type: MENU[orderMenu].type,
          quantity: order[orderMenu],
        };
      }
    }

    console.log(orderDetails);

    return orderDetails;
  }

  getCost() {}
}
export default Menu;
