
function collectOdds(numsArray) {

  const oddList = []

  function helper(helperInput) {

    // if there is no element in the array, break out of the function
    if (!helperInput.length) {
      return
    }
    // if the element in the array is an odd number, push it in the array
    if (helperInput[0] % 2 === 1) {
      oddList.push(helperInput[0])
    }
    // slice the array
    // sample:
    // const nums = [1,2,3,4,5,6,7,8,9]
    // nums.slice(1) = [2,3,4,5,6,7,8,9]
    helper(helperInput.slice(1))
  }

  // run helper function
  helper(numsArray)

  // return the oddList at the end
  return oddList
}

const odds = [1, 2, 3, 4, 5, 6, 7, 8, 9]

collectOdds(odds)
