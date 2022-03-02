function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let lowest = i

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j
      }

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
