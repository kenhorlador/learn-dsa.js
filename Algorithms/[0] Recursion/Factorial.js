
// program to find the factorial of a number
function factorial(x) {

  // if number is less than or equal to 0
  // base case
  if (x <= 0) {
      return 1;
  }

  // if number is greater than 0
  // recursion
  else {
      return x * factorial(x - 1);
  }
}

const num = 3;

console.log(factorial(num))
