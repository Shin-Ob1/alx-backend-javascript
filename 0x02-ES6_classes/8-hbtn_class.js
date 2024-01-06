export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  valOf() {
    return this._size;
  }

  toStr() {
    return this._location;
  }
}
