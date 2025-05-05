// Recursion: The process in which a function calls itself 
//            A method through which problems are broken down into smaller sub-problems.
// Key Parts of a Recursive Function
//           Base Case: A condition that stops the recursion. Without this, the function would keep calling itself forever.
//           Recursive Case: The part where the function calls itself with a modified argument, moving closer to the base case.

// Example: Factorial
//          5! = 5 * 4 * 3 * 2 * 1   
//          5! = 5 * 4!  
//          0! = 1

function factorial (n) {
  // Base Case
  if (n===0) return 1;
  return (n * factorial (n-1))
}

console.log (factorial(3))

//  factorial (4)
//  factorial (4) = return (4 * factorial (3))
//  factorial (3) = return (3 * factorial (2))
//  factorial (2) = return (2 * factorial (1))
//  factorial (1) = return (1 * factorial (0))
//  factorial (0) = return (0) 

