function chainingLike(object, path) {
  const pathKeys = path.split('.');
  let value = object;
  pathKeys.forEach((key) => {
    try {
      value = value[key];
    } catch (error) {
      value = undefined;
    }
  });
  return value;
}
module.exports = chainingLike;
