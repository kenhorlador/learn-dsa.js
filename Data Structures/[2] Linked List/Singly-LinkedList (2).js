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
  push(value) {
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

  get(index) {
    if (index >= this.length || index < 0 || index !== typeof number) return null

    const counter = 0
    const current = this.head

    while(counter !== index) {
      current = current.next
      counter++
    }

    return current
  }

  // add a node a specific index
  insert(index, value) {
    if (index !== typeof number) return null
    if (index >= this.length) {
      this.push(value)
      return this
    }
    if (index < 0) {
      this.unshift(value)
      return this
    }

    const newNode = new Node(value)

    const previousNode = this.get(index - 1)
    const leaderNode = previous.next

    previousNode.next = newNode
    newNode.next = leaderNode
    this.length++

    return this
  }

  // change the value of the node
  set(index, value){
    const currentNode = this.get(index)
    currentNode.value = value

    return true
  }
}
