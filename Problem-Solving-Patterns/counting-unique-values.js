/* Count Unique Values Challenge

Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. */

function countUniqueValues(arr){
    if (arr.length === 0) {
        return 0;
    }
    
    let p = 0; // pointer to compare to
    let uniqueValues = 1;
    
    // i in the for loop is the second pointer in the pattern
    for (let i = 0; i < arr.length; i++) {
        // if there is a value differnt from the one pointed at
        // increment and set the pointer to that value
        if (arr[p] !== arr[i]) {
            uniqueValues++;
            p = i;
        }
    }
    
    return uniqueValues;
}


countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4