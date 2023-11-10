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

  weekend(orderList) {
    if (this.#number % 7 === 1 || this.#number % 7 === 2) {
      const MAIN_CNT = orderList.reduce(
        (cnt, menu) =>
          cnt +
          (menu === '티본스테이크' ||
            menu === '바비큐립' ||
            menu === '해산물파스타' ||
            menu === '크리스마스파스타'),
        0,
      );
      return 2023 * MAIN_CNT;
    }
  }

  special() {
    if (this.#number % 7 === 3 || this.#number === 25) {
      return 1000;
    }
  }

  freeGift(totalPrice) {
    if (totalPrice >= 120000) {
      return 25000;
    }
  }
}

export default EventDay;
