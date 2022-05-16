const Calculator = {
  result: 0,

  add(numb = 0) {
    this.result += numb;
    return this;
  },

  reset() {
    this.result = 0;
    return this;
  },

  subtract(numb = 0) {
    this.result -= numb;
    return this;
  },

  divide(numb = 1) {
    this.result /= numb;
    return this;
  },

  multiply(numb = 1) {
    this.result *= numb;
    return this;
  },

  getResult() {
    return this.result;
  },

  setState(numb = '') {
    if (numb === undefined || numb === '') {
      return this;
    }
    this.result = numb;
    return this;
  },

  fetchData(cb) {
    setTimeout(() => cb(500), 2000);
  },
};

module.exports = Calculator;
