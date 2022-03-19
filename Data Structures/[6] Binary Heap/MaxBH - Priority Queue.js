
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

  _bubbleUp() {
    let index = this.data.length - 1
    const element = this.data[index]
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.data[parentIndex]

      if (element.priority <= parent.priority) break

      this.data[parentIndex] = element
      this.data[index] = parent
      index = parentIndex
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

  _sinkDown() {
    const idx = 0
    const length = this.data.length
    const element = this.data[0]

    while (true) {
      let leftChildIdx = 2 * idx + 1
      let rightChildIdx = 2 * idx + 2

      let leftChild, rightChild

      let swap = null

      if (leftChildIdx < length) {
        leftChild = this.data[leftChildIdx]

        if (leftChild.priority > element.priority) {
          swap = leftChildIdx
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.data[rightChildIdx]

        if ((swap === null && rightChild.priority > element.priority) ||
            (swap !== null && rightChild.priority > leftChild.priority)) {

          swap = rightChildIdx
        }
      }

      if (swap === null) break

      this.data[idx] = this.values[swap]
      this.values[swap] = element

      idx = swap
    }
  }
}

let heap = new MaxBinaryHeap()
heap.insert(55)
