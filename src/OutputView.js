import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printResult(strike, ball) {
    if (strike === 3) {
      Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    } else if (ball === 0 && strike === 0) {
      Console.print('낫싱');
    } else if (ball === 0 && strike > 0) {
      Console.print(`${strike}스트라이크`);
    } else if (ball > 0 && strike === 0) {
      Console.print(`${ball}볼`);
    } else {
      Console.print(`${ball}볼 ${strike}스트라이크`);
    }
  },
};

export default OutputView;
