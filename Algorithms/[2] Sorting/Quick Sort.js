
// pivot chooses an element to be evaluated
// filters all the high values in right and low values in left

function pivot(arr, start = 0, end = arr.length - 1) {

  // swap function
  const swap = (array, i, j) => {
    return [array[i], array[j] = array[j], array[i]]
  }

  let pivot = arr[start]
  let swapIdx = start

  // loop starts at 'start + 1' to avoid evaluating itself
  for (let i = start + 1; i < arr.length; i++) {
    // if pivot is greater than the current element, so we have to swap it to left
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }

  // after the entire loop, swap the pivot's index to the last element + 1 that was swapped
  swap(arr, swapIdx, start)

  return swapIdx
}

let arr = [4,8,2,1,7,5,6,3]

function quickSort(arr, left = 0, right = arr.length - 1) {

  if (left < right) {

    let pivotIdx = pivot(arr, left, right)

    // left
    quickSort(arr, left, pivotIdx - 1)

    // right
    quickSort(arr, pivotIdx + 1, right)
  }

  return arr
}
