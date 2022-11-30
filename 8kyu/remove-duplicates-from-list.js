// Remove Duplicates from List

// DESCRIPTION:
// Define a function that removes duplicates from an array of numbers and returns it as a result. The order of the sequence has to stay the same.

// SOLUTION:
function distinct(a){
    return a.filter((e,i) => a.indexOf(e) === i)
}