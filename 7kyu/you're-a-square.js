// You're a Square

// DESCRIPTION:
// Given an integral number, determine if it's a square number.

// SOLUTION:
function isSquare(n){
  if(Math.sqrt(n) % 1 === 0){
    return true
  }else{
    return false
  }
}