function isPrimeNumber(number) {
  if (number <= 1000) {
    for (let i = 2; i <= number; i += 1) {
      if (number % i === 0) {
        return `Число ${number} - составное число`;
      }
      return `Число ${number} - простое число`;
    }
    if (number === 1 || number === 0) {
      return 'Не причисляется ни к простым, ни к составным числам';
    }
  }
  return 'Данные неверны';
}
module.exports = isPrimeNumber;
