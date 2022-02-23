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

  // search for a value in the bstree
  search(value) {
    // if there is no root node, return false
    if (!this.root) {
      return false
    }

    let found = false
    let current = this.root

    // iterate through the BSTree
    while(current && !found) {

      // if the newNode's value is greater than the curret node's value, set the current to current's right
      if (value > current.value) current = current.right
      // if the newNode's value is less than the curret node's value, set the current to current's left
      else if (value < current.value) current = current.left
      // else, or if the newNode's value is equal to the current node's value, set found  to true
      else found = true

    }
    // the loop will run until the node is not null and found is false
    // if found is true, then we stop iterating or if it encounters a null value in the children, loop will also terminate

    // if not found, return false
    if (!found) return false


    // if found, return the current node
    return current
  }


}

const bstree = new BinarySearchTree()

/*

       10
    6      14
        12   15


*/
