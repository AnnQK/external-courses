class Room {
  constructor(devices, roomName) {
    this.devices = devices;
    this.roomName = roomName;
  }

  calcPower() {
    let power = 0;
    this.devices.forEach((device) => {
      if (device.isTurnOn) {
        power += device.getPower();
      }
    });
    return power;
  }

  findDevice(deviceName) {
    return this.devices.forEach((device) => {
      if (device.getModel().toLowerCase() === deviceName.toLowerCase()) {
        console.log(`${deviceName} in ${this.roomName}`);
        return true;
      }
      return false;
    });
  }
}

class House extends Room {
  constructor(rooms, devices) {
    super(devices);
    this.rooms = rooms;
  }

  calcPowerHouse() {
    let totalPower = 0;
    this.rooms.forEach((room) => {
      if (room.devices.length > 0) {
        totalPower += room.calcPower();
      }
    });
    return totalPower;
  }

  findDeviceHouse(deviceName) {
    this.rooms.forEach((room) => {
      if (room.findDevice(deviceName)) {
        return room.findDevice(deviceName);
      }
      return false;
    });
  }
}

module.exports = { Room, House };
