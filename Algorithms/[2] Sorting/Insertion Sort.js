function insertionSort1(array) {

  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i]
    for (let j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j]
    }
    array[j+1] = currentVal
  }

  return array
}

insertionSort1([27,21,12,89,65,54,7,32])
