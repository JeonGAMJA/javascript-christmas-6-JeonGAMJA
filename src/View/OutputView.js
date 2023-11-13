import { Console } from '@woowacourse/mission-utils';
import Menu from '../Model/Menu.js';

const menu = new Menu();

const OutputView = {
  printGreetings() {
    Console.print(`안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.`);
  },

  printPreviewMessage() {
    Console.print(`12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`);
  },

  printMenu(order) {
    const orderMenu = menu.getOrderMenus(order);
    Console.print(`<주문 메뉴>\n${orderMenu}`);
  },

  printTotalCost() {
    Console.print(`<할인 전 총주문 금액>`);
  },

  printGiftMenu() {
    Console.print(`<증정 메뉴>`);
  },

  printBenefitDetails() {
    Console.print(`<혜택 내역>`);
  },

  printTotalBenefitCost() {
    Console.print(`<총혜택 금액>`);
  },

  printaDiscoutCost() {
    Console.print(`<할인 후 예상 결제 금액>`);
  },

  printBadge() {
    Console.print(`<12월 이벤트 배지>`);
  },
};

export default OutputView;
