import InputView from './View/InputView.js';

class App {
  async run() {
    await InputView.getDateUserInput();
    await InputView.getMenuUserInput();
  }
}

export default App;
