import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Game from './Game.js';

class App {
  async play() {
    Console.print('숫자 야구 게임을 시작합니다.');
    let continueGame = true;
    while (continueGame) {
      continueGame = await this.oneGame();
    }
  }

  async oneGame() {
    const GAME = new Game();
    let continueRound = true;

    while (continueRound) {
      const USER_NUMBER = await InputView.inputNumber();
      const USER_NUMBER_ARRAY = GAME.checkNumber(USER_NUMBER);
      continueRound = OutputView.printResult(
        GAME.gameResult(USER_NUMBER_ARRAY),
      );
    }

    const RESTART_CHOICE = await InputView.restartGame();
    return GAME.playOrNot(RESTART_CHOICE);
  }
}

const app = new App();
app.play();

export default App;
