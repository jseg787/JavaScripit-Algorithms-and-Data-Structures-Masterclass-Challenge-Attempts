const queue = [];

// adding to the end, removing from the front
queue.push("FIRST");
queue.push("SECOND");
queue.push("THIRD");

queue.shift(); // "FIRST"
queue.shift(); // "SECOND"
queue.shift(); // "THIRD"

// adding to the front, removing from the end
queue.unshift("FIRST");
queue.unshift("SECOND");
queue.unshift("THIRD");

queue.pop(); // "FIRST"
queue.pop(); // "SECOND"
queue.pop(); // "THIRD"
