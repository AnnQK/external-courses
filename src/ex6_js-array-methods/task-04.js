function filterArray(array, callback) {
  const filteredArray = [];

  array.forEach((item, i) => {
    if (callback(item, i, array)) {
      filteredArray.push(item);
    }
  });

  return filteredArray;
}
module.exports = filterArray;
