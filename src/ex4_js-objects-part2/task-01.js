function protoCheck(property, object) {
  return Object.getPrototypeOf(object)[property];
}
module.exports = protoCheck;
