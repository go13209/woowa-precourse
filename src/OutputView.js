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
};

export default OutputView;
