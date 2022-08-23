// Sum Without Highest and Lowest Number

// DESCRIPTION:
// Sum all the numbers of a given array (cq. list), except the highest and the lowest element (by value, not by index!). The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value. Mind the input validation.

// EXAMPLES:
// {6, 2, 1, 8, 10} => 16
// {1, 1, 11, 2, 3} => 6

// INPUT VALIDATION:
// If an empty value (null, none, nothing etc.) is given instead of an array, or the given array is an empty list, or a list with only 1 element, return 0.

// SOLUTION:
function sumArray(array){
  if(!array){
    return 0
  }else{
    return array.sort((a,b) => a - b).slice(1, array.length - 1).reduce((acc,c) => acc + c,0)
  }
}