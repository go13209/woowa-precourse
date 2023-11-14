import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import OutputView from './OutputView.js';

class App {
  async run() {
    const EVENT_DAY = await InputView.readDate();
    const ORDER_INSTANCE = await InputView.readOrder();
    OutputView.printGreetings(EVENT_DAY);
    OutputView.printMenu(ORDER_INSTANCE);
    OutputView.printTotalPrice(ORDER_INSTANCE);
    OutputView.printFreeGift(EVENT_DAY, ORDER_INSTANCE);
    OutputView.printBenefits(EVENT_DAY, ORDER_INSTANCE);
    OutputView.printTotalBenefits(EVENT_DAY, ORDER_INSTANCE);
    OutputView.printExpectedPrice(EVENT_DAY, ORDER_INSTANCE);
    OutputView.printEventBadge(EVENT_DAY, ORDER_INSTANCE);
  }
}

export default App;
