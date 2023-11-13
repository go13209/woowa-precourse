import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMenu(ORDER) {
    Console.print('<주문 메뉴>');
    Object.entries(ORDER).forEach(([MENU_ITEM, QUANTITY]) => {
      Console.print(`${MENU_ITEM} ${QUANTITY}개`);
    });
  },
};

export default OutputView;
