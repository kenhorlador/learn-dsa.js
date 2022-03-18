// Binary Heap is a data structure that stores data in a tree like structure
// The only rule it has is that, all parent node's value is greater than its child/children
// It fills the left first before the right
// To find the left child, we use 2n + 1
// To find the right child, we use 2n + 2
// To find the parent, we use n - 1 / 2 then floor it
// With that idea, we can be able to store heaps in array

class MaxBinaryHeap {
  constructor() {
    this.data = [41,39,33,18,27,12]
  }

  insert(value) {
    this.data.push(value)

    this._bubbleUp()

    console.log(this.data)
  }

  extractMax() {
    const max = this.data[0]
    const end = this.data.pop()

    // only set the first value of the end when,
    // length > 0
    // case 1: without if check, when only one element is left, the value is not poppped
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
      let leftChildIdx = 2 * idx + 1 // index of the element's left child
      let rightChildIdx = 2 * idx + 2 // index of the element's right child

      // declare left and right child but don't include values
      // because there is a possibility that its out of bounds
      let leftChild, rightChild

      let swap = null

      // if the element's left child index is not out of bounds
      if (leftChildIdx < length) {
        // set the value of leftChild
        leftChild = this.data[leftChildIdx]

        // if leftChild's value is greater than the element,
        // set swap's value to leftChild's index
        if (leftChild > element) {
          swap = leftChildIdx
        }
      }

      // if the element's right child index is not out of bounds
      if (rightChildIdx < length) {
        // set the value of rightChild
        rightChild = this.data[rightChildIdx]

        // if leftChild's value is less than element, and right child's value is greater than element
        // or
        // swap has a value, and right child is greater than left child
        if ((swap === null && rightChild > element) ||
            (swap !== null && rightChild > leftChild)) {

          // set swap to be right child
          swap = rightChildIdx
        }
      }

      // if there's no swap, break out of the loop
      if (swap === null) break

      // swap the values
      this.data[idx] = this.values[swap]
      this.values[swap] = element

      // update the value of index to be the child's index
      idx = swap
    }

  }

  // A function that pushes the value of in the heap
  _bubbleUp() {
    let index = this.data.length - 1
    const element = this.data[index] // last Element

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.data[parentIndex] // parent element

      // break out of the loop if current element is less than or equal to parent
      if (element <= parent) break

      // Will only run if parent is greater than element
      // Swap parent element with current element
      this.data[parentIndex] = element // set parent to current
      this.data[index] = parent // set current to parent
      index = parentIndex // update index, to avoid infinitely checking the same value
    }
  }
}

let heap = new MaxBinaryHeap()
heap.insert(55)
