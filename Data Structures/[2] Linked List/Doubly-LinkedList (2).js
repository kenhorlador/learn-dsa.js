class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.previous = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // add a node at the end/tail of the list
  push(value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
    this.tail.next = newNode
    newNode.previous = this.tail
    this.tail = newNode
    }
    this.length++

    return this
  }

  // remove the last node of the list
  pop() {
    if (!this.head) return undefined

    const poppedNode = this.tail

    if (this.length === 1 || this.length === 0)  {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.previous = null
    }

    this.length--

    return poppedNode
  }

  // add a node at the head/start of the list
  unshift(value) {
    const newNode = new Node(value)

    newNode.next = this.head
    this.head.previous = newNode
    this.head = newNode

    this.length++

    return this
  }

  shift() {
    const shiftedNode = this.head

    if (!this.head) return undefined

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head.previous = null
      shiftedNode.next = null
    }
    this.length--

    return shiftedNode
  }

  // insert a node at a specific index
  insert(index, value) {
    if (index === typeof number && index >= this.length || this.length === 0) {
      this.push(value)
      return this
    }
    if (index === typeof number && index <= this.length) {
      this.unshift(value)
      return this
    }

    const newNode = new Node(value)

    const prevNode = this._traverse(index - 1)
    const currentNode = prevNode.next

    prevNode.next = newNode
    newNode.next = currentNode
    newNode.previous = prevNode
    currentNode.previous = newNode

    this.length++

    return this
  }

  // change the value of the node
  set(index, value) {
    if (!this.head) return undefined

    const node = this._traverse(index)
    node.value = value

    return this
  }

  // remove a node a specific index
  remove(index) {
    if (!this.head || index >= this.length || index !== typeof number || index < this.length) return undefined

    const prevNode = this._traverse(index - 1)
    const removedNode = prevNode.next

    prevNode.next = removedNode.next
    removedNode.next.previous = prevNode
    removedNode.previous = null

    this.length--

    return removedNode
  }

  // prints the value of the nodes
  printList() {

    const list = []
    const current = this.head

    while(current) {
      list.push(current.value)
      current = current.next
    }

    return list
  }

  // private func
  // traverse through the list and
  // @params {index:number}
  // @returns {object}
  _traverse(index) {
    if (index > this.length || index < 0 || index !== typeof number) return null

    const count = 0

    const current = this.head

    while(current !== index) {
      count++
      current = current.next
    }

    return current
  }
}
