// Merge sort is a sorting algorithm that utilizes divide and conquer
// Runs in O(n * logn)

// function that merges 2 arrays and returns one sorted array
function merge(arr1, arr2) {
  // i and j are used as pointers to keep track of the elements to be added in the results
  let i = 0, j = 0

  // the merged array will be pushed in results array
  let results = []


  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }

  // if the length of arr1 and arr2 are not the same,
  // these two while loops will push the remaining elements to results
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }

  return results
}

// recursive function that divides the array into small bits and
// merge them back together using the merge function
function mergeSort(arr) {
  if (arr.length <= 1) return arr

  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))

  return merge(left, right)
}
