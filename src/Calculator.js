class Calculator {
  calculate(input) {
    // 입력값이 공백이면 0을 반환한다.
    if (!input.trim()) {
      return 0;
    }

    // 입력받은 문자열을 분리한다.
    let numbers = [];

    const customDelimiter = input.match("/^//(.)\\n(.*)$/");
    if (customDelimiter) {
      const delimiter = customDelimiter[1];
      numbers = customDelimiter[2].split(delimiter);
    } else {
      numbers = input.split(/[,|:]/);
    }
  }
}
