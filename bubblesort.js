function bubbleSort(array) {
  if (array.length <= 1) return array;
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = swap(array[j], array[j + 1]);
        array[j] = temp[0];
        array[j + 1] = temp[1];
      }
    }
  }
  return array;
}

function swap(num1,num2) {
  return [num2,num1]
}
