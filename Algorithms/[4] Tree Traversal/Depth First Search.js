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

  dfSearchPreOrder() {
    let data = []
    let current = this.root

    // recursive function
    // traverses the left side first and goes back traverses the right side
    function traverse(mode) {
      data.push(node.value) // as it traverses every node, it stores the value in the array
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(current) // we can also just use this.root here instead of current

    return data
  }

  dfSearchPostOrder() {
    let data = []
    let current = this.root

    // traverses until the very bottom of the tree then
    // goes back to the top then pushes the value of the node to the array
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }

    traverse(current)

    return data
  }

  dfSearchInOrder() {
    let data = []

    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)

    return data
  }
}

const bstree = new BinarySearchTree()
