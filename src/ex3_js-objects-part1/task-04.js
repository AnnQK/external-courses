function propertyUpdate(prop, object) {
  if (!object.hasOwnProperty(`${prop}`)) {
    const newObject = {};
    newObject[`${prop}`] = 'new';
    return newObject;
  }

  return object;
}
module.exports = propertyUpdate;
