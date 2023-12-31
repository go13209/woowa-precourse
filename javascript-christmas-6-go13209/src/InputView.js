import { Console } from '@woowacourse/mission-utils';
import EventDay from './EventDay.js';
import Receipt from './Receipt.js';

const InputView = {
  async readDate() {
    try {
      const INPUT = await Console.readLineAsync(
        '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.\n12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
      );
      const DAY = new EventDay(Number(INPUT));
      return DAY;
    } catch (e) {
      Console.print(e.message);
      return this.readDate();
    }
  },

  async readOrder() {
    try {
      const INPUT = await Console.readLineAsync(
        '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
      );
      const ORDER = new Receipt(INPUT);
      return ORDER;
    } catch (e) {
      Console.print(e.message);
      return this.readOrder();
    }
  },
};

export default InputView;
