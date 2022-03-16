function capitalizeAll(string) {
  return string
    .split(' ')
    .map((item) => item[0].toLowerCase() + item.slice(1))
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(' ');
}
module.exports = capitalizeAll;
