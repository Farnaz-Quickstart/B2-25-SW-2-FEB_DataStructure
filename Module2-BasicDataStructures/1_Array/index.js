let studentsList = ["Roberto", "Bryan", "John", "Chase", "Kameron"]
let tasks = ["Buy groceries", "Finish homework", "Clean room"];
let playlist = ["Song A", "Song B", "Song C"];

// Add Elements at the end
// BigO: O(1)
console.log("Class List"); 
console.log(studentsList); 
console.log("Adding element to the end of array O(1):"); 
studentsList.push ("Erica")
console.log(studentsList); 

// Add Element to the beginig
// BigO: O(n)
// Creates Space at the Start, Inserts New Element at the Beginning, Updates the Array Length
console.log("Adding element to the beginning of array O(n):"); 
studentsList.unshift("Allie")
console.log(studentsList); 

// Delete Element from end
// BigO: O(1)
// Identifies the Last Element, Removes the Last Element
// Modifies the Original Array, Decreases Array Length
console.log("Deleting element form end of array o(1):"); 
studentsList.pop()
console.log(studentsList); 

// Delete Element from begining
// BigO: O(n)
// Identifies the First Element and Removes the First Element
// Shifts Remaining Elements, Updates the Array Length
// Modifies the Original Array, Decreases Array Length
console.log("Deleting element from beginning of array O(n):"); 
studentsList.shift()
console.log(studentsList); 


// Update elements
// Directly update one element (O(1))
console.log("Updatting one element of an array O(1):");
studentsList[0] = "Sebastian";
console.log(studentsList);

// The map() method creates a new array by applying a function to each element of an existing array.
// It does not change the original array (it's non-destructive), and it returns a new array of the same length.
studentsList = studentsList.map(item => item + " Hi");
console.log("Updatting all elements of array o(n):");
console.log(studentsList);


// Search Element
console.log("Searching for an element of an array O(n):");
console.log(studentsList.includes("John")); // true
console.log(studentsList.indexOf("Bryan")); // 1