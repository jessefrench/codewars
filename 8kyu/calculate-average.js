// Calculate Average

// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list. Empty arrays should return 0.

// SOLUTION:
function find_average(array){
    let sum = 0
    array.forEach(n => {sum += n})
    let avg = sum/array.length
    return avg || 0
}