class EventDay {
  #number;

  constructor(number) {
    this.#validate(number);
    this.#number = number;
  }

  #validate(number) {
    if (
      number < 0 ||
      number > 31 ||
      !Number.isInteger(number) ||
      Number.isNaN(number) ||
      !number
    ) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  }

  getNumber() {
    return this.#number;
  }

  christmasDDay() {
    if (this.#number >= 1 && this.#number <= 25) {
      return 1000 + 100 * (this.#number - 1);
    }
  }

  weekday(orderList) {
    if (this.#number % 7 !== 1 && this.#number % 7 !== 2) {
      const DESSERT_CNT = orderList.reduce(
        (cnt, menu) => cnt + (menu === '초코케이크' || menu === '아이스크림'),
        0,
      );
      return 2023 * DESSERT_CNT;
    }
  }
}

export default EventDay;
