// Find Nearest Square Number

// DESCRIPTION:
// Your task is to find the nearest square number, nearestSq(n), of a positive integer n.

// SOLUTION:
function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)),2)
}