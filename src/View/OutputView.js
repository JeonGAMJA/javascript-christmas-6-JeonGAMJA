import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printGreetings() {
    Console.print(`안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.`);
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

  printMenu() {
    Console.print('<주문 메뉴>');
  },
};

export default OutputView;
