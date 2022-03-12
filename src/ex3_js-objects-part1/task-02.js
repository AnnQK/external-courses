function showKeyValue(object) {
  Object.entries(object).forEach(([key, value]) => {
    console.log(key, value);
  });

  return undefined;
}
module.exports = showKeyValue;
