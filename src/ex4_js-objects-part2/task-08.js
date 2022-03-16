function toCamelCase(str) {
  const strArr = str
    .split(' ')
    .map((item) => item.toLowerCase())
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('');

  return strArr[0].toLowerCase() + strArr.slice(1);
}
module.exports = toCamelCase;
