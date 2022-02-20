class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // add a node at the end of the list
  enqueue(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
    } else {
      this.tail.next = newNode
    }
    this.tail = newNode
    this.length++

    return this.length
  }

  // remove a node at the beginning of the list
  dequeue() {
    if (!this.head) return null
    const temp = this.head
    if (this.head === this.tail) {
      this.tail = null
    }
    this.head = this.head.next
    temp.next = null

    this.length--

    return temp.value
  }
}
