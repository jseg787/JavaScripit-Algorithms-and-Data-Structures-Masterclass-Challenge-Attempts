function linearSearch(arr, val){
  for (let index = 0; index < arr.length; index++) {
      if (arr[index] === val) return index;
  }
  return -1;
}