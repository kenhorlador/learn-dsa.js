/*
  Javascript Array Methods
  - Arrays provides a set of methods to manipulate its data
*/

// Adding or extracting/removing item
array.unshift(...item) // adds an item at the beginning of the array
array.push(...item) // adds an item at the end of the array
array.shift() // extracts an item from the beginning of the array
array.pop() // extracts an item from the end of the array

// Splice - Removing items from the array => returns removed items from array
array.splice([include-start], [exclude-end]) // removes item/s from index 'start' to 'end'
const array = [1,2,3,4]
const newArray = array.splice(0,2) // returns [1,2]

// Slice - Removing items from the array => returns the original array not including removed items
array.slice([including-start], [excluding-end])
const array = [1,2,3,4]
array.slice(0,2) // returns [3,4]

// We can  also use slice to duplicate an existing array
const duplicateArray = array.slice() // dont include a parameter, then it creates a duplicate of the original array

// Concatentaion - merges arrays into another array
const evenArray = [2,4,6,8]
const oddArray = [1,3,5,7,9]
evenArray.concat(oddArray) // 1,2,3,4,5,6,7,8,9
