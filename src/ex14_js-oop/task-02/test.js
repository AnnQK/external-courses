const { Toaster, Phone, IPhone } = require('./Devices.js');
const { Room, House } = require('./House');

const toaster = new Toaster(10, 'TOASTER', 4);

const dadPhone = new IPhone(5, 'oldPhone', 54, 2);
const homePhone = new Phone(20, 'homephone2000', [
  'alec',
  'dog-sitter',
  'work',
]);
const ivanPhone = new IPhone(2, 'newPhone', 10, 50);

const kitchen = new Room([toaster, homePhone], 'kitchen');
const office = new Room([dadPhone], 'office');
const playRoom = new Room([ivanPhone], 'playRoom');
const familyHouse = new House([kitchen, office, playRoom]);

toaster.turnOnOff();
homePhone.turnOnOff();
dadPhone.turnOnOff();

console.log(kitchen.calcPower());
console.log(office.calcPower());
console.log(familyHouse.calcPowerHouse());
familyHouse.findDeviceHouse('newPhone');
kitchen.findDevice('toaster');
homePhone.makeCall(1);
toaster.getToast();
ivanPhone.makePhoto();
ivanPhone.makePhoto();
