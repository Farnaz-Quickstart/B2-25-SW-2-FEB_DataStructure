/* Recursion: The process in which a function calls itself 
   A method through which problems are broken down into smaller sub-problems.
   Key Parts of a Recursive Function
   Base Case: A condition that stops the recursion. Without this, the function would keep calling itself forever.
   Recursive Case: The part where the function calls itself with a modified argument, moving closer to the base case.
 
   countdown(3) is called -> pushed onto the stack
   n === 0? No → continue
   calls countdown(2) -> pushed onto the stack
   n === 0? No → continue
   calls countdown(1) -> pushed onto the stack
   n === 0? No → continue
   calls countdown(0) -> pushed onto the stack
   n === 0? Yes → return and stop recursion here
*/

function countdown(n) {
  debugger;
  if (n === 0) return;      // base case: stop when n is 0
  console.log (n)
  countdown(n - 1);         // recursive case: call the same function with n-1
}

countdown(4)

