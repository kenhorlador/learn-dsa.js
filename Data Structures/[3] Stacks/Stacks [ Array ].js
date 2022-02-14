class Stacks {
  constructor() {
    this.array = []
  }
  peek() {
    return this.array[this.array.length - 1]
  }

  push(value) {
    this.array[this.array.length] = value
  }

  pop() {
    if (!this.array.length) {
      return null
    }
    return this.array.slice(0, this.array.length - 1)
  }
}
