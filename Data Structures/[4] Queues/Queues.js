// Queue is a Linear Data Structure
// FIFO - First in, First out

// There are only three methods to use
// Push, peek, and pop

// In implementing queues, in the background it uses arrays or linked list
// But the best way is to use Linked list since we're
// going to remove and add from the beginning and
// it will cost O(n) when used with array
// and O(1) with Linked list

/*
  lookup - O(n) = Traverse an entire queue
  enqyeye - O(1) - Add item infront of the queue
  dequeue - O(1) - Remove item from the queue
  peek - O(1) - View the front item
*/
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  // see the first value
  peek() {
    return this.first
  }


  // adds a node in the queue
  enqueue(value) {
    const newNode = new Node(value)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    }
    else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++

    return this
  }

  // removes a node in the queue
  dequeue() {
    if (!this.first) return null

    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.length--

    return this
  }
}
