function maxElement(array) {
  let maxItem = array[0];
  array.forEach((item) => {
    if (item > maxItem) {
      maxItem = item;
    }
  });
  return maxItem;
}
module.exports = maxElement;
