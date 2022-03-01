function swap(array, j, i) {
  return [array[i], array[j] = array[j], array[i]]
}

function bubbleSort1(array) {
  const swap = (array, id1, id2) => [array[id1], array[id2] = array[id2], array[id1]]
  let noSwaps

  for (let i = array.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, j)
        noSwaps = false
      }
    }
    if (noSwaps) break
  }

  return array
}

function bubbleSort2(array) {
  let noSwaps
  for (let i = array.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
        noSwaps = false
      }
    }
    if (noSwaps) break
  }

  return array
}
