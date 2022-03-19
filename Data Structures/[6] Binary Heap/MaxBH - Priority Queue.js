
class Node {
  constructor(val, priority) {
    this.val = val
    this.priority = priority
  }
}


class PriorityQueue {
  constructor() {
    this.data = [41,39,33,18,27,12]
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority)

    this.data.push(newNode)

    this._bubbleUp()
  }

  // function that moves the end element to the front if its a root/has the highest priority
  _bubbleUp() {

    let index = this.data.length - 1 // index of last element
    const element = this.data[index] // last element

    // continue to run until index of last element is > 0
    while (index > 0) {
      // declare parent inside while because it will update every iteration
      let parentIndex = Math.floor((index - 1) / 2) // parent is = last element index - 1 / 2
      let parent = this.data[parentIndex]

      // if the end element's priority is greater than its parent, break out of the loop
      if (element.priority <= parent.priority) break

      // swap the value if parent's priority is less than of the current element
      this.data[parentIndex] = element // set parent to element
      this.data[index] = parent // set element to parent
      index = parentIndex // update the value of index to parent's index
    }
  }

  dequeue() {
    const max = this.data[0]
    const end = this.data.pop()

    if (this.data.length > 0) {

      this.data[0] = end
      this._sinkDown()

    }

    return max
  }

  // function that sinks down or moves the front element to the end if it has lowest priority
  _sinkDown() {
    const idx = 0
    const length = this.data.length
    const element = this.data[0]

    while (true) {
      let leftChildIdx = 2 * idx + 1 // left child is in 2(index) + 1
      let rightChildIdx = 2 * idx + 2 // right child is in 2(index) + 2

      let leftChild, rightChild // declare the variable first, check if its not out of bounds

      // we're going to use null whether the loop will run or to break
      // if it has a not falsy value, continue the loop else, break
      let swap = null

      // if left child's index is not out of bounds, set the value of left child
      if (leftChildIdx < length) {
        leftChild = this.data[leftChildIdx]

        // left child's priority is greater than the current element's priority
        // set swap to be the index of left child
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx
        }
      }

      // if right child's index is not out of bounds
      if (rightChildIdx < length) {
        rightChild = this.data[rightChildIdx] // set the value of right child

        // if swap === null is the same as, if element is greater than the left child's priority
        if ((swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)) {
        // if there's a value of swap, means left is greater than element so we should check if its greater than right
        // then identify the max value between left and right then swap to the largest

          swap = rightChildIdx
        }
      }

      // if current element has the highest value, means its the new root then break out of the loop
      if (swap === null) break


      // if there's a value of the swap
      this.data[idx] = this.values[swap] // set the new element's value and index
      this.values[swap] = element // set the parent's new index and value

      idx = swap // update the element's index to parent's index
    }
  }
}

let heap = new MaxBinaryHeap()
heap.insert(55)
