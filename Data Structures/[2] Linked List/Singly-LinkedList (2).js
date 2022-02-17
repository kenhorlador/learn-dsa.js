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

    let current = this.head
    let newTail = current
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

    let currentHead = this.head
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

    let counter = 0
    let current = this.head

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

    newNode.next = previousNode.next
    previousNode.next = newNode
    this.length++

    return this
  }

  // change the value of the node
  set(index, value){
    const currentNode = this.get(index)
    currentNode.value = value

    return true
  }

  // remove a node on a specific index
  remove(index) {
    if (index >= this.length - 1) return this.pop()
    if (index < 0) return this.unshift()
    if (index !== typeof number) return undefined

    const previousNode = this.get(index - 1)
    const currentNode = previousNode.next

    previousNode.next = currentNode.next
    this.length--

    return currentNode
  }

  // reverse the linked list
  reverse() {
    if (!this.head || !this.head.next) {
      return this.head
    }

    let node = this.head
    this.head = this.tail
    this.tail = node

    let next, prev = null

    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }

    return this
  }

  printList() {
    if (!this.head) return null

    const list = []
    let current = this.head

    while(current) {
      list.push(current.value)
      current = current.next
    }

    return list
  }
}

const myLL = new SinglyLinkedList()
myLL.push(1)
myLL.push(2)
myLL.push(3)
myLL.push(4)
myLL.push(5)
console.log(myLL.printList())
myLL.reverse()
console.log(myLL.head)
