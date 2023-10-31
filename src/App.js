import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    try {
      let carsInfo = {};

      const carNameList = await this.inputCarNames();
      this.checkNames(carNameList);

      const roundNumber = await this.inputRoundNumber();
      this.checkNumber(roundNumber);

      this.createObject(carNameList, carsInfo);

      Console.print("\n실행 결과");

      for (let n = 0; n < roundNumber; n++) {
        this.oneRoundGame(carsInfo);
        Console.print("\n");
      }

      this.printResult(carsInfo);
    } catch (error) {
      throw error;
    }
  }

  async inputCarNames() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return carNames.split(",");
  }

  async inputRoundNumber() {
    return Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  }

  checkNames(carNameList) {
    for (let i = 0; i < carNameList.length; i++) {
      if (carNameList[i].length > 5) {
        throw new Error("[ERROR] 사용할 수 없는 이름입니다");
      }
    }
  }

  checkNumber(roundNumber) {
    if (isNaN(roundNumber)) {
      throw new Error("[ERROR] 숫자를 입력해주세요");
    }
  }

  randomNumber() {
    const number = Random.pickNumberInRange(0, 9);
    return number;
  }

  createObject(carNameList, carsInfo) {
    for (let j = 0; j < carNameList.length; j++) {
      carsInfo[carNameList[j]] = { score: 0 };
    }
  }

  oneRoundGame(carsInfo) {
    const carNames = Object.keys(carsInfo);
    for (let k = 0; k < carNames.length; k++) {
      const number = this.randomNumber();
      if (number >= 4) {
        carsInfo[carNames[k]].score += 1;
      }
    }

    carNames.forEach((carName) => {
      const score = carsInfo[carName].score;
      Console.print(`${carName} : ${"-".repeat(score)}`);
    });
  }

  printResult(carsInfo) {
    let winners = [];
    let maxScore = 0;

    const carNames = Object.keys(carsInfo);

    carNames.forEach((carName) => {
      const score = carsInfo[carName].score;

      if (score > maxScore) {
        maxScore = score;
        winners = [carName];
      } else if (score === maxScore) {
        winners.push(carName);
      }
    });

    Console.print("최종 우승자 : " + winners.join(", "));
  }
}

export default App;
