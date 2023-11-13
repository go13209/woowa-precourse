class Receipt {
  #menu = {
    양송이수프: 6000,
    타파스: 5500,
    시저샐러드: 8000,
    티본스테이크: 55000,
    바비큐립: 54000,
    해산물파스타: 35000,
    크리스마스파스타: 25000,
    초코케이크: 15000,
    아이스크림: 5000,
    제로콜라: 3000,
    레드와인: 60000,
    샴페인: 25000,
  };

  #order;

  constructor(order) {
    this.#order = this.#validate(order);
  }

  #validate(order) {
    const ORDER_OBJECT = {};
    const ORDER_LIST = order.split(',');

    if (ORDER_LIST.length === 0) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }

    let hasFood = false;
    for (const ITEM of ORDER_LIST) {
      const PARTS = ITEM.split('-');

      if (PARTS.length !== 2) {
        throw new Error(
          '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
        );
      }

      const [MENU_ITEM, QUANTITY] = PARTS;

      if (!Object.hasOwn(this.#menu, MENU_ITEM)) {
        throw new Error(
          '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
        );
      }

      const NUMBER_QUANTITY = Number(QUANTITY);

      if (
        Number.isNaN(NUMBER_QUANTITY) ||
        NUMBER_QUANTITY < 1 ||
        !Number.isInteger(NUMBER_QUANTITY)
      ) {
        throw new Error(
          '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
        );
      }

      if (ORDER_OBJECT[MENU_ITEM]) {
        throw new Error(
          '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
        );
      }

      ORDER_OBJECT[MENU_ITEM] = NUMBER_QUANTITY;

      if (!['제로콜라', '레드와인', '샴페인'].includes(MENU_ITEM)) {
        hasFood = true;
      }
    }

    if (!hasFood) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }

    const TOTAL_QUANTITY = Object.values(ORDER_OBJECT).reduce(
      (cnt, QUANTITY) => cnt + QUANTITY,
      0,
    );
    if (TOTAL_QUANTITY > 20) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
    return ORDER_OBJECT;
  }

  getOrder() {
    return this.#order;
  }

  totalPrice() {
    let totalPrice = 0;

    Object.entries(this.#order).forEach(([MENU_ITEM, QUANTITY]) => {
      totalPrice += this.#menu[MENU_ITEM] * QUANTITY;
    });

    return totalPrice;
  }
}

export default Receipt;
