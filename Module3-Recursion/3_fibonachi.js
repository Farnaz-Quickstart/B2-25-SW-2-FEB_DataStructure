// Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...


function fibonacci(n) {
  if (n <= 1) return n; // base cases: 0 or 1
  return fibonacci(n - 1) + fibonacci(n - 2); // recursive case
}

console.log(fibonacci(5)); // Output: 5