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

  christmasDDay(totalPrice) {
    if (this.#number >= 1 && this.#number <= 25 && totalPrice >= 10000) {
      return 1000 + 100 * (this.#number - 1);
    }
  }

  weekday(orderArray, totalPrice) {
    if (
      this.#number % 7 !== 1 &&
      this.#number % 7 !== 2 &&
      totalPrice >= 10000
    ) {
      const DESSERT_CNT = orderArray.reduce(
        (cnt, { menu, quantity }) =>
          cnt + (menu === '초코케이크' || menu === '아이스크림' ? quantity : 0),
        0,
      );
      return 2023 * DESSERT_CNT;
    }
  }

  weekend(orderArray, totalPrice) {
    const isWeekend = this.#number % 7 === 1 || this.#number % 7 === 2;
    const isTotalPriceValid = totalPrice >= 10000;
    if (isWeekend && isTotalPriceValid) {
      const MAIN_MENU_LIST = [
        '티본스테이크',
        '바비큐립',
        '해산물파스타',
        '크리스마스파스타',
      ];
      const MAIN_CNT = orderArray
        .filter(({ menu }) => MAIN_MENU_LIST.includes(menu))
        .reduce((cnt, { quantity }) => cnt + quantity, 0);
      return 2023 * MAIN_CNT;
    }
  }

  special(totalPrice) {
    if (
      (this.#number % 7 === 3 || this.#number === 25) &&
      totalPrice >= 10000
    ) {
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
