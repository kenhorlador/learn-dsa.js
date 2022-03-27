// Stacks is a Linear Data Structure
// LIFO - Last in, First out

// There are only three methods to use
// Push, peek, and pop

// In implementing stacks, in the background it uses arrays or linked list

/*
  lookup - O(n) = Traverse an entire stack
  pop - O(1) - Remove the top most item
  push - O(1) - Add an item at the end
  peek - O(1) - View the topmost item
*/

// Stack back

class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.previous = null
  }
}

class Stacks {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // push a node at the back
  push(value) {
    const newNode = new Node(vallue)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.previous = this.tail
      this.tail = newNode
    }

    return ++this.length
  }

  // remove a node at the back
  pop() {

    if (!this.head) return null

    const temp = this.tail

    if (this.length === 1) {

      temp = this.head
      this.tail = null
      this.head = null

    } else {

      this.tail = this.tail.previous

    }

    this.length--

    return temp
  }
}
