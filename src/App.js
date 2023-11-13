import PromotionController from './Controller/PromotionController.js';

class App {
  constructor() {
    this.promotionController = new PromotionController();
  }
  async run() {
    this.promotionController.setup();
  }
}

export default App;
