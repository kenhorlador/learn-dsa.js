function swap(array, j, i) {
  return [array[i], array[j] = array[j], array[i]]
}

// Bubble sort is an algorithm that bubbles or swaps the highest value at the very end of the array, then sements it there
// The only difference between the two implementations of bubble sort is the swap
function bubbleSort1(array) {
  const swap = (array, id1, id2) => [array[id1], array[id2] = array[id2], array[id1]]
  let noSwaps

  for (let i = array.length; i > 0; i--) {
    noSwaps = true // every iteration, the noSwaps will be true / this is great on the on the nearly sorted arrays
    // it will not have to iterate through the array if the array is already sorted

    for (let j = 0; j < i - 1; j++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, j)
        noSwaps = false // and there's a swap, set it to false
      }
    }
    if (noSwaps) break // if there's no swap, break out of the loop
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
