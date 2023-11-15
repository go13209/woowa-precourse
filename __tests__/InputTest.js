import EventDay from '../src/EventDay.js';
import Receipt from '../src/Receipt.js';

describe('입력값 예외 테스트', () => {
  describe('날짜 예외 테스트', () => {
    const INVALID_DATES = [32, 0, 3.5, 'five', ''];
    test.each(INVALID_DATES)(
      '방문 날짜가 1과 31 사이의 정수가 아닐 경우 예외 처리',
      (date) => {
        expect(() => new EventDay(date)).toThrowError();
      },
    );

    const VALID_DATES = [1, 25];
    test.each(VALID_DATES)(
      '방문 날짜가 1과 31 사이의 정수인 경우 테스트 통과',
      (date) => {
        expect(() => new EventDay(date)).not.toThrowError();
      },
    );
  });

  describe('주문 예외 테스트', () => {
    const INVALID_ORDERS = [
      '제로콜라-2',
      '시저샐러드-5,해산물파스타-5,아이스크림-5,제로콜라-6',
      '딸기케이크-1',
      '타파스:1',
      '양송이스프-1,티본스테이크-1,양송이스프-1',
      '바비큐립-0,크리스마스파스타-1',
      '초코케이크-two',
    ];
    test.each(INVALID_ORDERS)('유효하지 않은 주문 예외 처리', (order) => {
      expect(() => new Receipt(order)).toThrowError();
    });

    const VALID_ORDERS = [
      '양송이수프-2,타파스-3,티본스테이크-1',
      '크리스마스파스타-1,아이스크림-1,제로콜라-1',
    ];
    test.each(VALID_ORDERS)('유효한 주문 테스트 통과', (order) => {
      expect(() => new Receipt(order)).not.toThrowError();
    });
  });
});
