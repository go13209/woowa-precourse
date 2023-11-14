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
    const ORDER_ARRAY = [];
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

      ORDER_ARRAY.push({ menu: MENU_ITEM, quantity: NUMBER_QUANTITY });

      if (!['제로콜라', '레드와인', '샴페인'].includes(MENU_ITEM)) {
        hasFood = true;
      }
    }

    if (!hasFood) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }

    const TOTAL_QUANTITY = Object.values(ORDER_ARRAY).reduce(
      (cnt, QUANTITY) => cnt + QUANTITY,
      0,
    );
    if (TOTAL_QUANTITY > 20) {
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
    return ORDER_ARRAY;
  }

  getOrder() {
    return this.#order;
  }

  totalPrice() {
    let TOTAL_PRICE = 0;
    this.#order.forEach(order => {
      TOTAL_PRICE += this.#menu[order.menu] * order.quantity;
    });
    return TOTAL_PRICE;
  }

  totalBenefits(eventDay) {
    const BENEFITS = [
      {
        type: '크리스마스 디데이 할인',
        amount: eventDay.christmasDDay(this.totalPrice()),
      },
      { type: '평일 할인', amount: eventDay.weekday(this.totalPrice()) },
      { type: '주말 할인', amount: eventDay.weekend(this.totalPrice()) },
      { type: '특별 할인', amount: eventDay.special(this.totalPrice()) },
      { type: '증정 이벤트', amount: eventDay.freeGift(this.totalPrice()) },
    ];
    return BENEFITS.filter(
      benefit => benefit.amount !== undefined && benefit.amount !== 0,
    );
  }

  eventBadge(eventDay) {
    const TOTAL_BENEFITS = this.totalBenefits(eventDay);
    const TOTAL_DISCOUNT = TOTAL_BENEFITS.reduce(
      (total, benefit) => total + benefit.amount,
      0,
    );
    if (TOTAL_DISCOUNT >= 20000) {
      return '산타';
    } else if (TOTAL_DISCOUNT >= 10000) {
      return '트리';
    } else if (TOTAL_DISCOUNT >= 5000) {
      return '별';
    } else {
      return '없음';
    }
  }
}

export default Receipt;
