import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import Coupon from '../Model/Coupon.js';
import Menu from '../Model/Menu.js';

class PromotionController {
  constructor() {
    this.coupon = new Coupon();
    this.menu = new Menu();
  }

  async setup() {
    OutputView.printGreetings();
    const day = await InputView.getDateUserInput();
    const order = await InputView.getMenuUserInput();
    //OutputView.printMenu(olderDetail);
  }
}

export default PromotionController;
