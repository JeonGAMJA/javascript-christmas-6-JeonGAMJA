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
    await InputView.getDateUserInput();
    const order = await InputView.getMenuUserInput();
    OutputView.printPreviewMessage();
    OutputView.printMenu(order);
    OutputView.printTotalCost(order);
  }
}

export default PromotionController;
