function reduceLike(array, callback, init) {
  let result = 0;

  if (init === undefined || init === '') {
    result = array[0];
    for (let i = 1; i < array.length; i += 1) {
      result = callback(result, array[i], i, array);
    }
  } else {
    result = init;
    for (let i = 0; i < array.length; i += 1) {
      result = callback(result, array[i], i, array);
    }
  }

  return result;
}
module.exports = reduceLike;
