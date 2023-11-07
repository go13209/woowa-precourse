import { Random, Console } from "@woowacourse/mission-utils";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  // TODO: 추가 기능 구현
}

function lottoNumbersGenerator(amount) {
  const randomNumbers = [];
  for (let i = 0; i < amount; i++) {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    randomNumbers.push(numbers);
  }
  return randomNumbers;
}

function printBuyingLottoNumbers(numberList) {
  Console.print(`${numberList.length}개를 구매했습니다.`);
  for (let i = 0; i < numberList.length; i++) {
    Console.print(numberList[i].sort((a, b) => a - b));
  }
}

function calculator(buyingNumberList, winningNumbers, bonusNumber) {
  const result = [0, 0, 0, 0, 0];

  for (const oneLotto of buyingNumberList) {
    const intersection = [oneLotto.filter((x) => winningNumbers.includes(x))];
    const bonusMatch = oneLotto.includes(bonusNumber);

    if (intersection.length === 6) {
      result[0]++;
    } else if (intersection.length === 5) {
      if (bonusMatch) {
        result[1]++;
      } else {
        result[2]++;
      }
    } else if (intersection.length === 4) {
      result[3]++;
    } else if (intersection.length === 3) {
      result[4]++;
    }
  }
  return result;
}

function printResult(result) {
  Console.print("당첨 통계\n---");
  Console.print(`3개 일치 (5,000원) - ${result[4]}개`);
  Console.print(`4개 일치 (50,000원) - ${result[3]}개`);
  Console.print(`5개 일치 (1,500,000원) - ${result[2]}개`);
  Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[1]}개`);
  Console.print(`6개 일치 (2,000,000,000원) - ${result[0]}개`);
}

export default Lotto;
