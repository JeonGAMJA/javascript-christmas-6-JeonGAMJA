import InputView from '../View/InputView';

class Coupon {
  christmasDdayCoupon() {
    if (day >= 1 && day <= 25) {
      const christmasDdayCoupon = 1000 + 100 * (day - 1);
    }
  }
}
export default Coupon;
