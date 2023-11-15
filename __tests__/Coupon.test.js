import Coupon from '../src/Model/Coupon';

describe('Coupon 클래스 테스트', () => {
  const coupon = new Coupon();

  test('입력한 숫자가 1~25사이면 true 반환', async () => {
    const day = 15;

    expect(coupon.isValidChristmasDday(day)).toBe(true);
  });

  test('christmasDdayCoupon 함수 테스트', async () => {
    expect(coupon.christmasDdayCoupon(11)).toBe(2000);
    expect(coupon.christmasDdayCoupon(26)).toBeUndefined();
  });
});
