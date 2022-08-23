// Square N Sum

// DESCRIPTION:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// SOLUTION:
function squareSum(n){
  let sum = 0
  n.forEach(n => {
    sum += Math.pow(n,2)
  })
  return sum
}