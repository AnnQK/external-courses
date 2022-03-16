function stringSearch(mainStr, findStr) {
  return mainStr.split(' ').some((word) => word === findStr);
}
module.exports = stringSearch;
