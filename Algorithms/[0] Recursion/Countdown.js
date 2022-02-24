
// program to count downwards until 0
function countDown(num) {
  // base case
  // if the num is less than or equal to zero, then break out of the function
  if (num <= 0) {
    return // can also use break here
  }

  // call the self then decrement the value by 1
  return countDown(num - 1)
}
