function breakOut(array, changeValue, stopValue) {
  let i = 0;

  if (i != stopValue) {
  for (i = 0; i < array.length; i++) {
    array[i] = changeValue;
  }
  } else 
    break;
return array;
}
