/*
Linear Search Pseudocode
- This fuction accepts an array and a value
- Loop through the array and check if the current array element is equal to the value
= If it is, return the index at which the element is found
- If the value is never found, return -1
*/

function indexOf(array, value) {
  if (!array.length) return null

  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) return index
  }

  return -1
}

function includes(array, value) {
  if (!array.length) return null

  for (let index = 0; index < array.length; index++) {
    if (array[index] === value) return true
  }
  return false
}
