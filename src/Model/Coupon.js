import InputView from '../View/InputView';

class Coupon {
  christmasDdayCoupon() {
    if (day >= 1 && day <= 25) {
      const christmasDdayCoupon = 1000 + 100 * (day - 1);
    }
  }

  getDayOfWeek() {
    const date = new Date(2023, 11, day);
    const dayOfWeek = date.getDay();

    return dayOfWeek;
  }

  weekdayCoupon(day) {
    this.getDayOfWeek(day);

    if (dayOfWeek >= 0 && dayOfWeek <= 4) {
      const weekdayCoupon = 2023;
    }
  }

  weekendCoupon(day) {
    this.getDayOfWeek(day);

    if (dayOfWeek >= 5 && dayOfWeek <= 6) {
      const weekendCoupon = 2023;
    }
  }
}

export default Coupon;
