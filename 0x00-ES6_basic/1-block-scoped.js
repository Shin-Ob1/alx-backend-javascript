export default function taskBlock(trueOrFalse) {
  const tsk = false;
  const tsk2 = true;

  /* eslint-disable no-unused-vars */
  if (trueOrFalse) {
    const tsk = true;
    const tsk2 = false;
  }
  /* eslint-enable no-unused-vars */

  return [tsk, tsk2];
}
