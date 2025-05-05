// O(n²) - Quadratic Time Complexity
//         Algorithm grows quadratically with input size. This often occurs with nested loops, 
//         where each loop iterates over the entire input.
// Example 1
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
          console.log(arr[i], arr[j]);
      }
  }
}

// Example 2
function hasPairWithSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === target) {
              return true;
          }
      }
  }
  return false;
}

// Example 3
function compareAllPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        console.log(`Comparing ${arr[i]} and ${arr[j]}`);
      }
    }
  }
  

  

const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(numbers)); // O(n²), as it uses nested loops to sort the array
printPairs(numbers); // O(n²), because we have two nested loops
console.log(hasPairWithSum(numbers, 10)); // O(n²), as we check each pair of elements
compareAllPairs([1, 2, 3]);
