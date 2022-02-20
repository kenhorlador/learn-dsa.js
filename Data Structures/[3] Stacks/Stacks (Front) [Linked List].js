class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// stack implementation that adds node
// at the beginning of the list, instead of tail
class Stack {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // add a node at the beginning of the list
  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      const temp = this.head
      this.head = newNode
      this.head.next = temp
    }

    return ++this.length
  }

  // remove a node at the beginning of the list
  pop() {
    if(!this.head) return null

    const temp = this.head

    if(this.head === this.tail) {
      this.tail = null
    }
    this.head = this.head.next
    this.length--

    return temp.value
  }
}
