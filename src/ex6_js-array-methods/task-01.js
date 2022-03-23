function sliceLike(array, begin, end) {
  const newArr = [];
  let beginArr = begin;
  let endArr = end;

  if (end === undefined || end === '' || end > array.length) {
    endArr = array.length;
  }

  if (begin === undefined || begin === '') {
    beginArr = 0;
  }

  if (begin < 0 && Math.abs(begin) <= array.length) {
    beginArr = array.length + begin;
  }

  if (begin < 0 && Math.abs(begin) > array.length) {
    beginArr = 0;
  }

  if (end < 0 && Math.abs(begin) <= array.length) {
    endArr = array.length + end;
  }

  for (let i = beginArr; i < endArr; i += 1) {
    newArr.push(array[i]);
  }

  return newArr;
}
module.exports = sliceLike;
