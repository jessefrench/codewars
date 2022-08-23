// Convert a Number to a Reversed Array

// DESCRIPTION:
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// SOLUTION:
function digitize(n){
  let initialArray = ('' + n).split('')
  let reversedArray = []
  for(let i = initialArray.length - 1; i >= 0; i--){
    reversedArray[i] = parseInt(initialArray.shift(), 10)
  }
  return reversedArray
}