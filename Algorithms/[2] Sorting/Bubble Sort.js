function swap(array, j, i) {
  return [array[i], array[j] = array[j], array[i]]
}

function bubbleSort1(array) {
  const swap = (array, id1, id2) => [array[id1], array[id2] = array[id2], array[id1]]

  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[i] > array[i + 1]) swap(array, i, j)

    }
  }

  return array
}

function bubbleSort2(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
    }
  }

  return array
}
