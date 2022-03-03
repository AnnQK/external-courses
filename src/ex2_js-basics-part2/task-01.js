function numberOrString(argument) {
  if (typeof argument !== 'number' && typeof argument !== 'string') {
    return undefined;
  }
  if (isNaN(argument)) {
    return 'undefined';
  }

  return typeof argument;
}
module.exports = numberOrString;
