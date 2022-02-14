// Template for nodes in Linked List
class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.previous = null // for Doubly Linked List
  }
}

class SinglyLinkedList {
  constructor(value) {
    // initial value of the list
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }


  // add item in the tail of the linked list
  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }

  // Add items in the head of the linked list
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
  }

  // Add items in between in between of nodes
  insert(index, value) {

    // Chech if index is > length,
    if (index >= this.length) {
      return this.append(value)
    }

    const follower = this._traverseToIndex(index-1)
    const leader = follower.next
    const newNode = new Node(value)

    follower.next = newNode
    newNode.next = leader
    this.length++
  }

  // remove item from the list
  remove(index) {

    if (index === 0) {
      const follower = this.head
      this.head = follower.next
      break
    }
    const follower = this._traverseToIndex(index - 1)
    const unwantedNode = follower.next
    follower.next = unwantedNode.next
    this.length--
  }

  reverse() {
    if (!this.head.next) {
      return this.head
    }

    let first = this.head
    this.tail = this.head
    let second = first.next
    while (second) {
      const third = second.next
      second.next = first
      first = second
      second = third
    }
    this.head.next = null
    this.head = first
  }

  // Traverse to a specidic index
  // Private function //
  _traverseToIndex(index) {
    let counter = 0
    let currentNode = this.head
    while(index !== counter) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }
}

const myList = new SinglyLinkedList(1)
myList.append(2)
myList.append(3)
