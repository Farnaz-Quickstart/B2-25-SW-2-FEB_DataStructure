// O(2n) - Exponential time complexity:  The number of operations doubles with 
//         each additional input, often seen in recursive algorithms that explore all combinations.

// Example: Climbing Stairs 
// This function calculates how many different ways you can climb to the top of a staircase with n steps, 
// where you can take either 1 step or 2 steps at a time.
// 🕒 Why it's O(2ⁿ):
// Each call makes 2 more calls (n-1 and n-2).
// So the number of calls doubles as n increases — exponential growth.


function climbStairs(n) {
  if (n <= 1) return 1;
  return climbStairs(n - 1) + climbStairs(n - 2);
}

console.log(climbStairs(5)); // Output: 8
