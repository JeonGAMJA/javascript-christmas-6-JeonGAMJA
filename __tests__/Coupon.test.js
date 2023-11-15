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

  test('입력한 날짜에 해당하는 요일에 해당하는 숫자를 반환', async () => {
    expect(coupon.getDayOfWeek(3)).toBe(0);
  });

  test('입력한 날짜가 평일이면 true 반환', async () => {
    expect(coupon.isValidWeekday(5)).toBe(true);
  });
});
