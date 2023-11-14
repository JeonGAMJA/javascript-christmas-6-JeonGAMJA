import { Console } from '@woowacourse/mission-utils';
import Menu from '../Model/Menu.js';
import Coupon from '../Model/Coupon.js';

const menu = new Menu();
const coupon = new Coupon();

const OutputView = {
  printGreetings() {
    Console.print(`안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.`);
  },

  printPreviewMessage() {
    Console.print(`12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`);
  },

  printMenu(order) {
    const orderMenu = menu.getOrderMenus(order);
    Console.print(`<주문 메뉴>\n${orderMenu}\n`);
  },

  printTotalCost(order) {
    const totalCost = menu.getTotalCost(order);
    Console.print(
      `<할인 전 총주문 금액>\n${totalCost.toLocaleString('ko-KR')}원\n`,
    );
  },

  printGiftMenu(order) {
    const giftMenu = menu.getGiftMenu(order);
    Console.print(`<증정 메뉴>\n${giftMenu}\n`);
  },

  printBenefitDetails(day, order) {
    Console.print(`<혜택 내역>`);
    const printDiscount = (discount, label) => {
      if (discount !== undefined) {
        Console.print(`${label}: -${discount.toLocaleString('ko-KR')}원`);
      }
    };

    printDiscount(coupon.christmasDdayCoupon(day), '크리스마스 디데이 할인');
    printDiscount(coupon.weekdayCoupon(day, order), '평일 할인');
    printDiscount(coupon.weekendCoupon(day, order), '주말 할인');
    printDiscount(coupon.holidayCoupon(day), '특별 할인');
    printDiscount(coupon.giftMenuDiscount(order), '증정 이벤트');
  },

  printTotalBenefitCost(day, order) {
    Console.print(`\n<총혜택 금액>\n`);
  },

  printaDiscoutCost() {
    Console.print(`<할인 후 예상 결제 금액>\n`);
  },

  printBadge() {
    Console.print(`<12월 이벤트 배지>\n`);
  },
};

export default OutputView;
