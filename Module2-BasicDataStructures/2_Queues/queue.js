// Queue Data Structure is a linear data structure that follows FIFO (First In First Out) Principle 
// Queue Big O time complexities: 
//    Insert: O(1)
//    Remove: O(n)
//    Search: O(n), You must traverse the queue from front to end
//    Access: O(n)


// Let's build a simple queue using an array
let queue = [];

// Adding/Enqueue Queue: BigO O(1)
console.log("Adding to queue, BigO(1)"); 
queue.push("Student A");
queue.push("Student B");
queue.push("Student C");

console.log(queue); 

// Removing/Dequeue Queue: BigO(n): Every elements shift to right)
queue.shift();  
console.log("Deleting from Queue"); 
console.log(queue); 

// Searching in a Queue: BigO(n)
// There is no direct access to arbitrary elements in a queue (unlike arrays), so:
// You must traverse the queue from front to end
console.log(queue.includes("Student C")); // true



