var firstnumber = 0;
var secondnumber = 0;

function bubbleSort(array) {
  if (array.length <= 1) return array;
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        //   let temp = array[j];
        //   array[j] = array[j+1];
        //   array[j+1] = temp;
        swap(array[j], array[j + 1]);
        array[j] = firstnumber;
        array[j + 1] = secondnumber;
      }
      console.log(array);
    }
  }
  return array;
}

function swap(num1, num2) {
  firstnumber = num2;
  secondnumber = num1;

}
