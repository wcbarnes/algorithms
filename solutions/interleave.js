
function interleave(arr) {
  let newArr = [];
  for (let i = 0, j = arr.length / 2; j < arr.length; i++, j++) {
    newArr.push(arr[i]);
    newArr.push(arr[j]);
  }
  return newArr;
}

