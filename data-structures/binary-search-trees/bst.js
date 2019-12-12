class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      // if there is a repeated value, just return undefined
      if (val === current.value) return undefined;

      if (val < current.value) {
        // if there is no left child, put the new node there
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        // otherwise move to the left child
        current = current.left;
      } else if (val > current.value) {
        // if there is no right child, put the new node there
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        // otherwise move to the right child
        current = current.right;
      }
    }
  }

  find(val) {
    if (this.root === null) return undefined;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  contains(val) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // Breadth first search
  BFS() {
    const data = [];
    const queue = [];
    let node = this.root;

    // place the root node in the queue
    queue.push(node);
    // loop as long as there is anything in the queue
    while (queue.length) {
      // dequeue a node from the queue
      node = queue.shift();
      // push the value of the node into the variable that stores the nodes
      data.push(node.value);
      // If there is a left property, add it to the queue
      if (node.left) {
        queue.push(node.left);
      }
      // If there is a right property, add it to the queue
      if (node.right) {
        queue.push(node.right);
      }
    }
    // return the data
    return data;
  }

  DFSPreOrder() {
    const data = [];

    function traverse(node) {
      // visit, left, right
      data.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    const data = [];

    function traverse(node) {
      // left, right, visit
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.value);
    }

    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    const data = [];

    function traverse(node) {
      // left, visit, right
      if (node.left) {
        traverse(node.left);
      }
      data.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
