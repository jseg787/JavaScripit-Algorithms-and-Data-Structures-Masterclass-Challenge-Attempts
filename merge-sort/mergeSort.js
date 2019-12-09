function merge(arr1, arr2) {
  let results = [];
  let i = 0; // index for arr1
  let j = 0; // index for arr2

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // while there is anything left in arr1 push the rest in
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  // while there is anything left in arr2 push the rest in
  while (j < arr2.length) {
    results.push(arr2[i]);
    i++;
  }

  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
