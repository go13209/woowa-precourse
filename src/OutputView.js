import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printResult({ BALL, STRIKE }) {
    if (STRIKE === 3) {
      Console.print('3스트라이크\n3개의 숫자를 모두 맞히셨습니다! 게임 종료');
    } else if (BALL === 0 && STRIKE === 0) {
      Console.print('낫싱');
    } else if (BALL === 0 && STRIKE > 0) {
      Console.print(`${STRIKE}스트라이크`);
    } else if (BALL > 0 && STRIKE === 0) {
      Console.print(`${BALL}볼`);
    } else {
      Console.print(`${BALL}볼 ${STRIKE}스트라이크`);
    }
    return STRIKE !== 3;
  },
};

export default OutputView;
