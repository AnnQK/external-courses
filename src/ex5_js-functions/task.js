function Calculator() {
  let result = 0;

  function add(val = 0) {
    result += val;

    return add;
  }

  function subtract(val = 0) {
    result -= val;

    return subtract;
  }

  function divide(val = 1) {
    result /= val;

    return divide;
  }

  function multiply(val = 1) {
    result *= val;

    return multiply;
  }

  return {
    add,

    subtract,

    divide,

    multiply,

    getResult() {
      return result;
    },

    reset() {
      result = 0;
    },
  };
}
const calculator = Calculator();
module.exports = calculator;
