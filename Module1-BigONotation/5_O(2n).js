// O(2n) - Exponential time complexity:  The number of operations doubles with 
//         each additional input, often seen in recursive algorithms that explore all combinations.

// The Fibonacci sequence is a series of numbers where each number is the sum of the two before it.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
// F(0) = 0
// F(1) = 1
// F(n) = F(n - 1) + F(n - 2) for n > 1
// 2 * 2 * 2 ... (n times) = 2ⁿ
// Each call makes 2 more calls (n-1 and n-2).
// So the number of calls doubles as n increases — exponential growth.


function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
console.log(fibonacci(5)); // Output: 5

