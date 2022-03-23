function mapLike(array, callback) {
  const newArray = [];

  array.forEach((item, i) => {
    newArray.push(callback(item, i, array));
  });

  return newArray;
}
module.exports = mapLike;
