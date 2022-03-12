function deepCopy(object) {
  if (typeof object === 'object' && object !== null) {
    if (Array.isArray(object)) {
      const copyArr = [];
      for (let i = 0; i < object.length; i += 1) {
        copyArr[i] = deepCopy(object[i]);
      }
      return copyArr;
    }
    const copyObject = {};
    Object.keys(object).forEach((key) => {
      copyObject[key] = deepCopy(object[key]);
    });
    return copyObject;
  }
  return object;
}
module.exports = deepCopy;
