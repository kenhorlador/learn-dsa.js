// Selection sort is an algorithm that iterates through the array and finds the lowest value and insert it in
// the first element of the array through swapping.

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j // set the lowest to j.. if the index j < is less than index in lowest
      }
    }
    // prevents swapping if the value of i and lowest is the same
    if (i !== lowest) {
      let temp = array[i]
      array[i] = array[lowest]
      array[lowest] = temp
    }
  }
}

let array = [25, 21, 73, 49, 1, 42, 55]
selectionSort(array)

// = 0
// 25, 21 = 1
// 25, 73 = 1
// 25, 49 = 1
// 25, 1 = 4
// 25, 42 = 4
// 25, 55 = 4

function selectionSort1(array) {
  const swap = (arr, i, j) => (
    [arr[i], arr[j] = arr[j], arr[i]]
  )

  for (let i = 0; i < array.length; i++) {
    let lowest = i

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j
      }
    }
    if (i !== lowest) swap(array, i, lowest)
  }

  return array
}

// 0, 1 = 1
// 0, 2 = 1
// ...
// [25, 21, 73, 49, 1, 42, 55]
selectionSort1(array)
