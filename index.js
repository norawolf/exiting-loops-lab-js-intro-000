function breakOut(array, changeValue, stopValue) {
  for (i = 0; i < array.length; i++) {
    array[i] = changeValue;
    if (i === stopValue) {
      break;
    }
    return array;
  }
}
