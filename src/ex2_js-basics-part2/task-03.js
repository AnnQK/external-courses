function arrayInfo(array) {
  const result = [0, 0, 0];
  array.forEach((item) => {
    if (typeof item === 'number') {
      if (item === 0) {
        result[2] += 1;
      } else if (item % 2 === 0) {
        result[0] += 1;
      } else if (item % 2 !== 0) {
        result[1] += 1;
      }
    }
  });
  return result;
}
module.exports = arrayInfo;
