class Calculator {
  calculate(input) {
    // 입력값이 공백이면 0을 반환한다.
    if (!input.trim()) {
      return 0;
    }

    // 입력받은 문자열을 분리한다.
    let stringNumbers = [];

    const customDelimiter = input.match("/^//(.)\\n(.*)$/");
    if (customDelimiter) {
      const delimiter = customDelimiter[1];
      stringNumbers = customDelimiter[2].split(delimiter);
    } else {
      stringNumbers = input.split(/[,|:]/);
    }

    for (let s in stringNumbers) {
      if (isNaN(s)) {
        throw new Error("[ERROR] 숫자를 입력해 주세요.");
      }
    }

    // 문자열 배열 숫자 배열로 바꾸기
    let numbers = stringNumbers.map(Number);

    for (let number in numbers) {
      if (number < 0) {
        throw new Error("[ERROR] 음수 값은 입력할 수 없습니다.");
      }
    }
  }
}
