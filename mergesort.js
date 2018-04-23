function split(wholeArray){
  let firstHalf, secondHalf;
  if(!wholeArray.length % 2){
    firstHalf = wholeArray.slice(0,(wholeArray.length)/2);
    secondHalf = wholeArray.slice(wholeArray.length/2);
  } else {
    firstHalf = wholeArray.slice(0,Math.ceil((wholeArray.length)/2));
    secondHalf = wholeArray.slice(Math.ceil(wholeArray.length/2));
  }
//  console.log(firstHalf, secondHalf);
  return [firstHalf,secondHalf]
}

function merge(firstArray, secondArray){
  let mergedArray = [];
//  console.log(firstArray, secondArray);
  if(firstArray.length === 0){
    return mergedArray.concat(secondArray);
  }
  if(secondArray.length === 0){
    return mergedArray.concat(firstArray);
  }
  if(firstArray[0] < secondArray[0]){
    mergedArray.push(firstArray[0]);
    return mergedArray.concat(merge(firstArray.slice(1), secondArray))
  } else if(firstArray[0] > secondArray[0]) {
    mergedArray.push(secondArray[0])
    return mergedArray.concat(merge(firstArray, secondArray.slice(1)));
  }
}

function mergeSort(arr){
  if(arr.length <= 1){
    return arr;
  }
  let sortedArray = [];
  sortedArray.concat(split(arr));
  // arr.forEach((item) => {
  //   mergeSort(item);
  // })
  merge(arr[0],arr[1]);
  return arr;
}
