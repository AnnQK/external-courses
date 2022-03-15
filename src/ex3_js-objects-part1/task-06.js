function chainingLike(object, path) {
  const pathKeys = path.split('.');
  let value = object;
  /*eslint-disable */
  for (const key of pathKeys) {
    if (value.hasOwnProperty(key)) {
      value = value[key];
    } else {
      return;
    }
  }
  return value;
}
/* eslint-enable */
module.exports = chainingLike;
