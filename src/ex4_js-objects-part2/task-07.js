function stringPadding(str, userLenght) {
  return `${str.slice(0, userLenght - 1)}…`;
}
module.exports = stringPadding;
