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

  search(value) {

    if (!this.root) {
      return false
    }

    let found = false
    let current = this.root

    while(current && !found) {

      if (value > current.value) current = current.right
      else if (value < current.value) current = current.left
      else found = true

    }

    if (!found) return false

    return current
  }



  bfSearch() {

    let queue = [],
        data = [],
        node = this.root

    queue.push(node)

    while (queue.length) {
      node = queue.shift()
      data.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    return data
  }

}

const bstree = new BinarySearchTree()