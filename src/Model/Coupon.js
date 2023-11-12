import InputView from '../View/InputView';

class Coupon {
  christmasDdayCoupon() {
    if (day >= 1 && day <= 25) {
      const christmasDdayCoupon = 1000 + 100 * (day - 1);
    }
  }

  weekdayCoupon(day) {
    const date = new Date(2023, 11, day);

    if (dayOfWeek >= 0 && dayOfWeek <= 4) {
      const weekdayCoupon = 2023;
    }
  }
}

export default Coupon;
