function addWord(str, word, place) {
  const newArr = str.split(' ');
  newArr.splice(place + 1, 0, word);

  return newArr.join(' ');
}
module.exports = addWord;
