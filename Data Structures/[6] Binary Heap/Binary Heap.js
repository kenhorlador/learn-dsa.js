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
