import { Console } from '@woowacourse/mission-utils';
import EventDay from './Christmas.js';

const InputView = {
  async readDate() {
    try {
      const INPUT = await Console.readLineAsync(
        '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
      );
      const DAY = new EventDay(Number(INPUT)).getNumber();
      return DAY;
    } catch (e) {
      Console.print(e.message);
      return this.readDate();
    }
  },
};

export default InputView;
