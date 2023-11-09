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
}

export default EventDay;
