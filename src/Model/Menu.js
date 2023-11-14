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

  getTotalCost(order) {
    const orderDetail = this.getOrderDetail(order);
    let totalCost = 0;

    for (const menu in orderDetail) {
      const { cost, quantity } = orderDetail[menu];
      totalCost += cost * quantity;
    }
    return totalCost;
  }

  getGiftMenu(order) {
    const totalCost = this.getTotalCost(order);
    let giftMenu = null;

    if (totalCost > 120000) {
      giftMenu = `샴페인`;
    }

    if (totalCost < 120000) {
      giftMenu = `없음`;
    }

    return giftMenu;
  }

  getDessertCount(order) {
    const orderDetail = this.getOrderDetail(order);
    let count = 0;

    for (const menu in orderDetail) {
      const { type } = orderDetail[menu];
      if (type === '디저트') {
        count += orderDetail[menu].quantity;
      }
    }
    return count;
  }

  getMainCount(order) {
    const orderDetail = this.getOrderDetail(order);
    let count = 0;

    for (const menu in orderDetail) {
      const { type } = orderDetail[menu];
      if (type === '메인') {
        count += orderDetail[menu].quantity;
      }
    }
    return count;
  }
}
export default Menu;
