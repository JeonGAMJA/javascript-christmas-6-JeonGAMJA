import { MissionUtils } from '@woowacourse/mission-utils';
import Menu from '../Model/Menu.js';
import Coupon from '../Model/Coupon.js';

const { Console } = MissionUtils;

const menu = new Menu();
const coupon = new Coupon();

const OutputView = {
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
    // const printDiscount = (discount, label) => {
    //   if (discount !== undefined) {
    //     Console.print(`${label}: -${discount.toLocaleString('ko-KR')}원`);
    //   }
    // };

    const printDiscount = data => {
      const isValid = Object.values(data).filter(ele => ele);
      if (isValid.length < 1) {
        Console.print('<혜택 내역>\n없음');
        return;
      }

      for (const key in data) {
        if (data[key] !== undefined) {
          Console.print(`${key}: -${data[key].toLocaleString('ko-KR')}원`);
        }
      }
    };

    // printDiscount(coupon.christmasDdayCoupon(day), '크리스마스 디데이 할인');
    // printDiscount(coupon.weekdayCoupon(day, order), '평일 할인');
    // printDiscount(coupon.weekendCoupon(day, order), '주말 할인');
    // printDiscount(coupon.holidayCoupon(day), '특별 할인');
    // printDiscount(coupon.giftMenuDiscount(order), '증정 이벤트');

    printDiscount({
      '크리스마스 디데이 할인': coupon.christmasDdayCoupon(day),
      '평일 할인': coupon.weekdayCoupon(day, order),
      '주말 할인': coupon.weekendCoupon(day, order),
      '특별 할인': coupon.holidayCoupon(day),
      '증정 이벤트': coupon.giftMenuDiscount(order),
    });
  },

  printTotalBenefitCost(day, order) {
    const totalCouponCost = coupon.getTotalCouponCost(day, order);

    Console.print(
      `\n<총혜택 금액>\n-${totalCouponCost.toLocaleString('ko-KR')}원\n`,
    );
  },

  printaDiscoutCost(day, order) {
    const discountedAmount = coupon.getDiscountedAmount(day, order);

    Console.print(
      `<할인 후 예상 결제 금액>\n${discountedAmount.toLocaleString(
        'ko-KR',
      )}원\n`,
    );
  },

  printBadge(day, order) {
    const badge = coupon.getBadge(day, order);
    Console.print(`<12월 이벤트 배지>\n${badge}`);
  },
};

export default OutputView;
