import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMenu(orderInstance) {
    Console.print('<주문 메뉴>');
    Object.entries(orderInstance.getOrder()).forEach(
      ([MENU_ITEM, QUANTITY]) => {
        Console.print(`${MENU_ITEM} ${QUANTITY}개`);
      },
    );
  },
  printTotalPrice(orderInstance) {
    Console.print('<할인 전 총주문 금액>');
    Console.print(`${orderInstance.totalPrice()}원`);
  },
  printFreeGift(eventDay, totalPrice) {
    Console.print('<증정 메뉴>');
    if (eventDay.freeGift(totalPrice)) {
      Console.print('샴페인 1개');
    } else {
      Console.print('없음');
    }
  },
  printBenefits(orderInstance, eventDay) {
    const benefits = orderInstance.totalBenefits(eventDay);

    Console.print('<혜택 내역>');
    if (benefits.length === 0) {
      Console.print('없음');
    } else {
      for (const benefit of benefits) {
        Console.print(`${benefit.type}: -${benefit.amount}원`);
      }
    }
  },
  printTotalBenefits(orderInstance, eventDay) {
    const benefits = orderInstance.totalBenefits(eventDay);
    Console.print('<총혜택 금액>');
    if (benefits.length === 0) {
      Console.print('없음');
    } else {
      const totalDiscount = benefits.reduce(
        (total, benefit) => total + benefit.amount,
        0,
      );
      Console.print(`-${totalDiscount}원`);
    }
  },
  printExpectedPrice(orderInstance, eventDay) {
    const benefits = orderInstance.totalBenefits(eventDay);
    const totalBenefits = benefits.reduce((total, benefit) => {
      if (benefit.type !== '증정 이벤트') {
        return total + benefit.amount;
      }
      return total;
    }, 0);
    const expectedPrice = orderInstance.totalPrice() - totalBenefits;

    Console.print('<할인 후 예상 결제 금액>');
    Console.print(`${expectedPrice}원`);
  },
};

export default OutputView;
