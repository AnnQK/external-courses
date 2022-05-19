class ElectricDevice {
  constructor(power = 0, model = '') {
    this.power = power;
    this.isTurnOn = false;
    this.model = model;
  }

  turnOnOff() {
    this.isTurnOn = !this.isTurnOn;
    return console.log('Changed turn');
  }

  getModel() {
    return this.model;
  }

  getPower() {
    return this.power;
  }
}

class Toaster extends ElectricDevice {
  constructor(power = 0, model = '', breadSlots) {
    super(power, model);
    this.breadSlots = breadSlots;
    this.isTurnOn = false;
  }

  getToast() {
    return console.log(`Cooked ${this.breadSlots} toasts`);
  }
}

class Phone extends ElectricDevice {
  constructor(power = 0, model = '', phoneBook = []) {
    super(power, model);
    this.phoneBook = phoneBook;
    this.isTurnOn = false;
  }

  makeCall(index) {
    return console.log(`Clalling ${this.phoneBook[index]}...`);
  }
}

class IPhone extends Phone {
  constructor(power = 0, model = '', phoneBook = [], cameraMPx = 0) {
    super(power, model);
    this.phoneBook = phoneBook;
    this.isTurnOn = false;
    this.cameraMPx = cameraMPx;
    this.galary = [];
  }

  makePhoto() {
    if (this.cameraMPx < 3) {
      this.galary.push('Very bad photo');
      return console.log(this.galary);
    }
    this.galary.push('Nice photo');
    return console.log(this.galary);
  }
}

module.exports = { Toaster, Phone, IPhone };
