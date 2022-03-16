function charCount(str) {
  const strArr = str.split('');
  strArr.forEach((item) => {
    const count = strArr.filter((elem) => elem === item);
    console.log(count.length);
    strArr.shift(item);
  });

  return undefined;
}
module.exports = charCount;
