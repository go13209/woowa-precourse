import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { EOL as LINE_SEPARATOR } from 'os';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => logSpy.mock.calls.flat().join(LINE_SEPARATOR);

const expectedOutput = [
  [
    '12월 17일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
    '<주문 메뉴>',
    '타파스 2개',
    '바비큐립 1개',
    '해산물파스타 1개',
    '초코케이크 1개',
    '아이스크림 2개',
    '<할인 전 총주문 금액>',
    '125,000원',
    '<증정 메뉴>',
    '샴페인 1개',
    '<혜택 내역>',
    '크리스마스 디데이 할인: -2,600원',
    '평일 할인: -6,069원',
    '특별 할인: -1,000원',
    '증정 이벤트: -25,000원',
    '<총혜택 금액>',
    '-34,669원',
    '<할인 후 예상 결제 금액>',
    '115,331원',
    '<12월 이벤트 배지>',
    '산타',
  ],
  [
    '12월 29일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
    '<주문 메뉴>',
    '크리스마스파스타 1개',
    '<할인 전 총주문 금액>',
    '25,000원',
    '<증정 메뉴>',
    '없음',
    '<혜택 내역>',
    '주말 할인: -2,023원',
    '<총혜택 금액>',
    '-2,023원',
    '<할인 후 예상 결제 금액>',
    '22,977원',
    '<12월 이벤트 배지>',
    '없음',
  ],
];

describe('기능 테스트', () => {
  test('올바른 결과 출력 테스트1', async () => {
    const logSpy = getLogSpy();
    mockQuestions([
      '17',
      '타파스-2,바비큐립-1,해산물파스타-1,초코케이크-1,아이스크림-2',
    ]);
    const app = new App();
    await app.run();
    const receivedOutput = getOutput(logSpy)
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);
    expect(receivedOutput).toEqual(expectedOutput[0]);
  });

  test('올바른 결과 출력 테스트2', async () => {
    const logSpy = getLogSpy();
    mockQuestions(['29', '크리스마스파스타-1']);
    const app = new App();
    await app.run();
    const receivedOutput = getOutput(logSpy)
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);
    expect(receivedOutput).toEqual(expectedOutput[1]);
  });
});
