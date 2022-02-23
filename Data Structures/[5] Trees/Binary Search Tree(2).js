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

    if (!this.root) {
      this.root = newNode

      return this
    }

    const current = this.root

    while(true) {
      if (value === current.value) return undefined

      if (value > current.value) {
        if (current.right === null) {
          current.right = newNode

          return this
        }
        current = current.right
      } else {
        if (current.left === null) {
          current.left = newNode

          return this
        }

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
