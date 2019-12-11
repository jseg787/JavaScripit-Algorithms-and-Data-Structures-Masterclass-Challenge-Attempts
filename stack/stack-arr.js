// Implement a stack with an array

const stack = [];

// Using push and pop (faster O(1))
// using push to add to the top of the stack (end of the array)
stack.push("Google");
stack.push("Instagram");
stack.push("Youtube");

// using pop to remove from the top of the stack (end of the array)
stack.pop() // "Youtube"
stack.pop() // "Instagram"

stack.push("Amazon");

stack.pop(); // "Amazon"
stack.pop(); // "Google"

// shift and unshift from the front of the array (is slower O(n) all the items have to be moved over)
stack.unshift("create new file");
stack.unshift("resize file");
stack.unshift("cloned out wrinkle");

stack.shift();  // "cloned out wrinkle"
stack.shift();  // "resized file"
stack.shift();  // "create new file"