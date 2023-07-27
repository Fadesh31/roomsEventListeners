class LargeRoom {
  constructor(
    name,
    length,
    width,
    height,
    windows,
    doorSize,
    doorType,
    floorType,
    doorClosed,
    wallColor
  ) {
    this.name = name;
    this.length = length;
    this.width = width;
    this.height = height;
    this.windows = windows;
    this.door = {
      Size: doorSize,
      Type: doorType,
    };
    this.floorType = floorType;
    this.doorClosed = doorClosed;
    this.wallColor = wallColor;
  }

  toggleDoor(doorStatus) {
    this.doorClosed = doorStatus;
  }

  setNewFloorType(floor) {
    this.floorType = floor;
  }
}

export default LargeRoom;
