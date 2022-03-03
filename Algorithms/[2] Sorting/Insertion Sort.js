// Implementation 1
// Insertion sort is an algorithm that steps one through each element forward while also iterating backwards
function insertionSort1(array) {

  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i]
    for (let j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j]
    }
    array[j + 1] = currentVal
  }

  return array
}

insertionSort1([27,21,12,89,65,54,7,32])


// Implementation 2
const insertionSort2 = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1
    let temp = nums[i]
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j]
      j--
    }
    nums[j+1] = temp
  }
  return nums
}
console.log(insertion_Sort([3, 0, 2, 5, -1, 4, 1]));
console.log(insertion_Sort([2,6,5,12,-1,3,8,7,1,-4,0,23,1,-55,20,37,54,210,-23,7,483,9339,29,-3,90,-2,81,54,7372,-92,93,93,18,-43,21]));
