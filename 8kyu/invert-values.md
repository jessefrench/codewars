## Invert Values

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.

```javascript
// Parameters: an array of positive and negative numbers
// Returns: a new array of inverted values
// Examples: invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// Pseudo code: Function invert() takes in an array. Using the .map() array method, 'n' is used as a variable for each number in the new array that will be returned. It loops through to multiply each number by -1 giving us the inverse number.

// Time to solve: 
function invert(array){
  return array.map(n => n * -1)
}
```
