class Node {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
}

  // add a node in the bstree
  insert(value) {
    const newNode = new Node(value)

    // if there's no root node, set the newNode to root node
    if (!this.root) {
      this.root = newNode

      return this
    }

    const current = this.root

    // iterate through the tree DS
    while(true) {
      // return undefined when the value to be inserted, is equal to the current node's value
      if (value === current.value) return undefined

      // if the value to be inserted is greater than the current node's value,
      if (value > current.value) {
        // check whether the current node's right is null, if it is, set the right to the newNode
        if (current.right === null) {
          current.right = newNode

          return this
        }
        // if left is not null, set the current node to current node's right
        current = current.right
      } else { // if the value of the current node's value is less than the current node's value,
        // check whether the left is null, if it is, set the left to the newNode then return the tree DS
        if (current.left === null) {
          current.left = newNode

          return this
        }
        // if left is not null, set the current to current's left
        current = current.left
      }
    }
  }

}

const bstree = new BinarySearchTree()

/*

       10
    6      14
        12   15


*/
