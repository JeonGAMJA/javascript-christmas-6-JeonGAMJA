class ErrorHandler {
  constructor(ele) {
    this.validateDay(ele);
    this.validateNumber(ele);
  }

  validateDay(day) {
    if (day < 1 || day > 31) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  }

  validateNumber(day) {
    const verifyNumber = /^[0-9]+$/;
    if (verifyNumber.test(day) === false) {
      throw new Error(`[ERROR] 숫자만 입력 가능합니다.`);
    }
  }
}

export default ErrorHandler;
