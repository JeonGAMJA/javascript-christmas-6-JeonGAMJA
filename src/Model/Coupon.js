import InputView from '../View/InputView.js';
import Menu from './Menu.js';
import { Console } from '@woowacourse/mission-utils';

const menu = new Menu();

class Coupon {
  christmasDdayCoupon(day) {
    if (this.isValidChristmasDday(day)) {
      const christmasDdayCoupon = 1000 + 100 * (day - 1);

      return christmasDdayCoupon;
    }
  }

  isValidChristmasDday(day) {
    return day >= 1 && day <= 25;
  }

  getDayOfWeek(day) {
    const date = new Date(2023, 11, day);
    const dayOfWeek = date.getDay();
    return dayOfWeek;
  }

  weekdayCoupon(day, order) {
    const dessertCount = menu.getDessertCount(order);
    if (this.isValidWeekday(day) && dessertCount > 0) {
      this.getDayOfWeek(day);
      const weekdayCoupon = 2023 * dessertCount;

      return weekdayCoupon;
    }
  }

  isValidWeekday(day) {
    const dayOfWeek = this.getDayOfWeek(day);
    return dayOfWeek >= 0 && dayOfWeek <= 4;
  }

  weekendCoupon(day, order) {
    const mainCount = menu.getMainCount(order);
    if (this.isValidWeekend(day) && mainCount > 0) {
      this.getDayOfWeek(day);
      const weekendCoupon = 2023 * mainCount;

      return weekendCoupon;
    }
  }

  isValidWeekend(day) {
    const dayOfWeek = this.getDayOfWeek(day);
    return dayOfWeek >= 5 && dayOfWeek <= 6;
  }

  holidayCoupon(day) {
    if (this.isValidHoliday(day)) {
      this.getDayOfWeek(day);
      const holidayCoupon = 1000;

      return holidayCoupon;
    }
  }

  isValidHoliday(day) {
    const dayOfWeek = this.getDayOfWeek(day);
    return dayOfWeek === 0 && day === 25;
  }

  giftMenuDiscount(order) {
    if (menu.getGiftMenu(order) === '샴페인') {
      const giftMenuDiscount = 25000;

      return giftMenuDiscount;
    }
  }
}

export default Coupon;
