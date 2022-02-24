// Bonary search
// array should be sorted
function binarySearch(array, value) {
  // initial check, if the length is 0, return -1
  if (!array.length) return -1

  // declare initial values
  let start = 0
  let end = array.length - 1
  let middle = Math.floor((left + right) / 2)

  // will run until middle value !== seeking value, and
  // if start is less than or equal to end
  while (array[middle] !== value && start <= end) {
    if (value > array[middle]) start = middle + 1
    else if (value < array[middle]) end = middle - 1
    middle = Math.floor((left + right) / 2) // recalculate middle value
  }
  // ternary operator
  // if the statement is true, return the middle value.. else, return -1
  return array[middle] === value ? middle : -1
}
