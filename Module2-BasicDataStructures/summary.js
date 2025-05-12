function getFirstItem(arr) {
  return arr[0];  // O(1)
}


function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;    // O(n)
  }
  return sum;
}



function printAllPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
}


function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}


function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}


function factorial(n) {
  if (n === 0) return 1;       // base case
  return n * factorial(n - 1); // recursive case
}
