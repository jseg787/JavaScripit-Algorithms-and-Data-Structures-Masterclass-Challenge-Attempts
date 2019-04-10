function binarySearch(arr, val){
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      
      if (arr[middle] < val) {
          left = middle + 1;
      } else if (arr[middle] > val) {
          right = middle - 1;
      } else if (arr[middle] === val) {
          return middle;
      }
  } 
  return -1;  
}

// colt's solution

/*
function binarySearch(arr, elem) {
	var start = 0;
	var end = arr.length - 1;
	var middle = Math.floor((start + end) / 2);
	while (arr[middle] !== elem && start <= end) {
		if (elem < arr[middle]) end = middle -1;
		else start = middle + 1;
		middle = Math.floor((left + right) / 2);
	}
	return arr[middle] === elem ? middle: -1;
}


*/