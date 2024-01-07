export default function appendToEachArrayValue(array, appendString) {
  const aryEnd = [];
  for (const idx of array) {
    aryEnd.push(`${appendString}${idx}`);
  }

  return aryEnd;
}
