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
      orderDetails[orderMenu] = {
        cost: MENU[orderMenu]?.cost || 0,
        type: MENU[orderMenu]?.type || '',
        quantity: order[orderMenu],
      };
    }

    return orderDetails;
  }

  getOrderMenus(order) {
    const orderDetail = this.getOrderDetail(order);
    let orderMenus = '';

    for (const menu in orderDetail) {
      const { quantity } = orderDetail[menu];
      orderMenus += `${menu} ${quantity}개\n`;
    }

    return orderMenus.trim();
  }

  getCost() {}
}
export default Menu;
