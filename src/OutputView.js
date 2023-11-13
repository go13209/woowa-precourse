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
};

export default OutputView;
