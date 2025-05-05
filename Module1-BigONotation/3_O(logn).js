// O(log n) - Logarithmic Time Complexity
//            Algorithm's execution time increases logarithmically. A common example is binary search, where the input size is halved at each step.
//            Reference: https://www.youtube.com/watch?v=YzT8zDPihmc


function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === target) {
        return true;
      }
  
      if (target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  
    return false;
  }
  
  // Example:
  let numbers = [1, 3, 5, 7, 9, 11];
  console.log(binarySearch(numbers, 7)); // true
  console.log(binarySearch(numbers, 4)); // false
  



