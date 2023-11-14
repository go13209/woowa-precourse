import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printGreetings(eventDay) {
    Console.print(
      `12월 ${eventDay.getNumber()}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,
    );
  },

  printMenu(orderInstance) {
    Console.print('<주문 메뉴>');
    orderInstance.getOrder().forEach(({ menu, quantity }) => {
      Console.print(`${menu} ${quantity}개`);
    });
    Console.print('');
  },

  printTotalPrice(orderInstance) {
    Console.print('<할인 전 총주문 금액>');
    Console.print(`${orderInstance.totalPrice().toLocaleString()}원\n`);
  },

  printFreeGift(eventDay, orderInstance) {
    const TOTAL_PRICE = orderInstance.totalPrice();
    Console.print('<증정 메뉴>');
    if (eventDay.freeGift(TOTAL_PRICE)) {
      Console.print('샴페인 1개\n');
    } else {
      Console.print('없음\n');
    }
  },

  printBenefits(eventDay, orderInstance) {
    const BENEFITS = orderInstance.totalBenefits(eventDay);
    Console.print('<혜택 내역>');
    if (BENEFITS.length === 0) {
      Console.print('없음');
    } else {
      BENEFITS.forEach((benefit) => {
        Console.print(`${benefit.type}: -${benefit.amount.toLocaleString()}원`);
      });
    }
    Console.print('');
  },

  printTotalBenefits(eventDay, orderInstance) {
    const BENEFITS = orderInstance.totalBenefits(eventDay);
    Console.print('<총혜택 금액>');
    if (BENEFITS.length === 0) {
      Console.print('없음\n');
    } else {
      const TOTAL_DISCOUNT = BENEFITS.reduce(
        (total, benefit) => total + benefit.amount,
        0,
      );
      Console.print(`-${TOTAL_DISCOUNT.toLocaleString()}원\n`);
    }
  },

  printExpectedPrice(eventDay, orderInstance) {
    const BENEFITS = orderInstance.totalBenefits(eventDay);
    const TOTAL_BENEFITS = BENEFITS.reduce((total, benefit) => {
      if (benefit.type !== '증정 이벤트') {
        return total + benefit.amount;
      }
      return total;
    }, 0);
    const EXPECTED_PRICE = orderInstance.totalPrice() - TOTAL_BENEFITS;
    Console.print('<할인 후 예상 결제 금액>');
    Console.print(`${EXPECTED_PRICE.toLocaleString()}원\n`);
  },

  printEventBadge(eventDay, orderInstance) {
    const EVENT_BADGE = orderInstance.eventBadge(eventDay);
    Console.print('<12월 이벤트 배지>');
    Console.print(EVENT_BADGE);
  },
};

export default OutputView;
