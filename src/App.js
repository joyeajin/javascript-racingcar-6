import { Console, Random } from '@woowacourse/mission-utils';

class App {
  //자동차 이름 초기화
  constructor() {
    this.carNames = [];
  }

  async play() {}

  //사용자가 입력한 자동차 이름 가져오기
  async userInputCarNames() {
    const INPUT = await Console.readLineAsync();
    // Console.print(INPUT);
    const CAR_NAMES = INPUT.split(',');

    this.carNames = CAR_NAMES;
  }
}

export default App;