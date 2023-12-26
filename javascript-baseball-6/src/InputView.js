import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async inputNumber() {
    const USER_NUMBER = await Console.readLineAsync('숫자를 입력해주세요 : ');
    return USER_NUMBER;
  },

  async restartGame() {
    const NUMBER = await Console.readLineAsync(
      '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
    );
    return NUMBER;
  },
};

export default InputView;
