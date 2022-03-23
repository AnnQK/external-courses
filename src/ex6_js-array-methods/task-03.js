function everyLike(array, callbackFn) {
  /* eslint-disable */
  for (const [i, item] of array.entries()) {
    if (!callbackFn(item, i, array)) {
      return false;
    }
  }
  /* eslint-enable */

  return true;
}
module.exports = everyLike;
