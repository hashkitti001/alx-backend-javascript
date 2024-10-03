export default function appendToEachArrayValue(array, appendString) {
  const newArray = [...array];

  for (const idx in newArray) {
    if (newArray.hasOwnProperty(idx)) {
      newArray[idx] = appendString + newArray[idx];
    }
  }

  return newArray;
}
