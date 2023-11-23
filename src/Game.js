import { Random } from '@woowacourse/mission-utils';
import OutputView from './OutputView.js';

class Game {
  #computerNumber;

  constructor() {
    this.#computerNumber = this.generateComputerNumber();
  }

  generateComputerNumber() {
    const COMPUTER_NUMBER_ARRAY = [];
    while (COMPUTER_NUMBER_ARRAY.length < 3) {
      const NUMBER = Random.pickNumberInRange(1, 9);
      if (!COMPUTER_NUMBER_ARRAY.includes(NUMBER)) {
        COMPUTER_NUMBER_ARRAY.push(NUMBER);
      }
    }
    return COMPUTER_NUMBER_ARRAY;
  }

  checkNumber(userNumber) {
    const USER_NUMBER_ARRAY = (userNumber || '').split('').map(Number);

    if (
      USER_NUMBER_ARRAY.some((num) => isNaN(num) || num < 1 || num > 9) ||
      USER_NUMBER_ARRAY.length !== 3 ||
      new Set(USER_NUMBER_ARRAY).size !== USER_NUMBER_ARRAY.length
    ) {
      throw new Error('[ERROR] 잘못된 형식의 숫자입니다.');
    }
    return USER_NUMBER_ARRAY;
  }

  gameResult(userNumberArray) {
    let BALL = 0;
    let STRIKE = 0;

    for (let i = 0; i < userNumberArray.length; i++) {
      if (userNumberArray[i] === this.#computerNumber[i]) {
        STRIKE += 1;
      } else if (this.#computerNumber.includes(userNumberArray[i])) {
        BALL += 1;
      }
    }
    return { BALL, STRIKE };
  }

  playOrNot(number) {
    if (number === '1') {
      return true;
    } else if (number === '2') {
      return false;
    } else {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }
  }
}

export default Game;
