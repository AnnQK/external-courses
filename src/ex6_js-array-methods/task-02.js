function someLike(array, callbackFn) {
  /* eslint-disable */
  for (const [i, item] of array.entries()) {
    if (callbackFn(item, i, array)) {
      return true;
    }
  }
  /* eslint-enable */

  return false;
}
module.exports = someLike;
