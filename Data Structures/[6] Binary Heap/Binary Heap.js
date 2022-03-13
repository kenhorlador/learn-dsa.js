class MaxBinaryHeap {
  constructor() {
    this.data = [41,39,33,18,27,12]
  }

  insert(value) {
    this.data.push(value)

    this._bubbleUp()

    console.log(this.data)
  }

  _bubbleUp() {
    let index = this.data.length - 1
    const element = this.data[index]

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parent = this.data[parentIndex]

      if (element <= parent) break

      this.data[parentIndex] = element
      this.data[index] = parent
      index = parentIndex
    }
  }
}

let heap = new MaxBinaryHeap()
heap.insert(55)
