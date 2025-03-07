// main parent
function ElectricDevice(power = 0, isTurnOn = false) {
  this.power = power;
  this.isTurnOn = isTurnOn;
}

ElectricDevice.prototype.turnOnOff = () => {
  this.isTurnOn = !this.isTurnOn;
  return console.log('Changed turn');
};

ElectricDevice.prototype.getInfo = () => console.log(Object.entries(this));

// all cleaners
function VacuumCleaner(power = 0, isTurnOn = false, cleaningMode = 'dry') {
  ElectricDevice.call(this, power, isTurnOn);
  this.cleaningMode = cleaningMode;
}

VacuumCleaner.prototype = Object.create(ElectricDevice.prototype);
VacuumCleaner.prototype.changeMode = (mode) => {
  if (this.isTurnOn) {
    this.cleaningMode = mode;

    return console.log('Mode changed');
  }
  return console.log('Turn it on');
};
// robot functionality
function RobotDevice(power = 0, isTurnOn = false, hasMap = false) {
  ElectricDevice.call(this, power, isTurnOn);
  this.hasMap = hasMap;
}

RobotDevice.prototype = Object.create(ElectricDevice.prototype);
RobotDevice.prototype.addMap = () => {
  if (this.isTurnOn) {
    this.hasMap = true;

    return console.log('Added map');
  }
  return console.log('Turn it on');
};

function RobotCleaner(
  power = 0,
  isTurnOn = false,
  cleaningMode = 'dry',
  hasMap = false,
) {
  VacuumCleaner.call(this, power, isTurnOn, cleaningMode);
  this.hasMap = hasMap;
}

RobotCleaner.prototype = Object.create(VacuumCleaner.prototype);
RobotCleaner.prototype.addMap = () => {
  RobotDevice.prototype.addMap.call(this);
};

function RobotSoldier(
  power = 0,
  isTurnOn = false,
  hasMap = false,
  isShooting = false,
) {
  RobotDevice.call(this, power, isTurnOn, hasMap);
  this.isShooting = isShooting;
}
RobotSoldier.prototype = Object.create(RobotDevice.prototype);
RobotSoldier.prototype.startShooting = () => {
  if (this.isTurnOn) {
    this.isShooting = true;

    return console.log('Started shooting');
  }
  return console.log('Turn it on');
};

RobotSoldier.prototype.stopShooting = () => {
  if (this.isTurnOn) {
    this.isShooting = false;

    return console.log('Stopped shooting');
  }
  return console.log('Turn it on');
};

RobotSoldier.prototype.shootingStatus = () => {
  if (this.isTurnOn) {
    return console.log(`Shooting status is ${this.isShooting}`);
  }
  return console.log('Turn it on');
};
