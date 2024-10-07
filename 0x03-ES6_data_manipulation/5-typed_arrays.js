function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const arr = new ArrayBuffer(length);
  const int8arr = new DataView(arr, 0, length);
  int8arr.setInt8(position, value);
  return int8arr;
}

export default createInt8TypedArray;
