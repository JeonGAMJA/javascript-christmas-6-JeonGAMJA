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

  test('입력한 날짜가 주말이면 true 반환', async () => {
    expect(coupon.isValidWeekend(2)).toBe(true);
  });

  test('입력한 날짜가 공휴일이면 true 반환', async () => {
    expect(coupon.isValidHoliday(25)).toBe(true);
  });

  test('입력한 날짜가 평일이고 디저트를 주문했을 경우 평일쿠폰 가격 반환', async () => {
    const order = { 해산물파스타: 2, 레드와인: 1, 초코케이크: 1 };
    const day = 3;

    expect(coupon.weekdayCoupon(day, order)).toBe(2023);
  });

  test('입력한 날짜가 주말이고 메인메뉴를 주문했을 경우 주말쿠폰 가격 반환', async () => {
    const order = { 해산물파스타: 2, 레드와인: 1, 초코케이크: 1 };
    const day = 2;

    expect(coupon.weekendCoupon(day, order)).toBe(4046);
  });

  test('입력한 날짜가 공휴일이면 특별할인 쿠폰 가격 반환', async () => {
    expect(coupon.holidayCoupon(25)).toBe(1000);
  });
});
