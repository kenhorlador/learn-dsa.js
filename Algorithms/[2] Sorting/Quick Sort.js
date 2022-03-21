function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (array, i, j) => {
    return [array[i], array[j] = array[j], array[i]]
  }

  let pivot = arr[start]
  let swapIdx = start

  for (let i = start + 1; arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }

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
