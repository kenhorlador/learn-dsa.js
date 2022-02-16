class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // push a value at the tail of the linked list
  append(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++

    return this
  }

  // add a value at the head of the linked list
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode

    this.length++

    return this
  }

  // remove the value at the tail of the linked list
  pop() {
    if (!this.head) return undefined

    const current = this.head
    const newTail = current
    while(current.next) {
      newTail = current
      current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return current
  }

  // removes an item at the head of the linked list
  shift() {
    if (this.length === 0) {
      this.tail = null
    }
    if (!this.head) return undefined

    const currentHead = this.head
    this.head = currentHead.next
    this.length--

    return currentHead
  }

  // add a node at the beginning of the list
  unshift(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.tail = newNode
    } else {
      newNode.next = this.head
    }
    this.head = newNode
    this.length++

    return this
  }
}