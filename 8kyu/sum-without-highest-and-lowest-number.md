## Sum Without Highest and Lowest Number

Task:
Sum all the numbers of a given array (cq. list), except the highest and the lowest element (by value, not by index!).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Examples:
{6, 2, 1, 8, 10} => 16
{1, 1, 11, 2, 3} => 6

Input validation:
If an empty value (null, none, nothing etc.) is given instead of an array, or the given array is an empty list, or a list with only 1 element, return 0.

```javascript
// Parameters: an array of numbers or an empty value
// Returns: sum of array without highest or lowest numbers
// Examples: {6, 2, 1, 8, 10} => 16; {1, 1, 11, 2, 3} => 6
// Pseudo Code: Function sumArray() takes in an array. Using conditional logic, it first checks to see if the array passed in is empty or not. If it is , it returns 0. Otherwise, it moves on to the next condition. Here, it sorts the array using the .sort() method, slices the array's first and last indexs off using the .slice() method, and finally sums up the new array using the .reduce() method and returns the result.

// Time to solve:
function sumArray(array){
    if(!array){
      return 0
    }else{
      return array.sort((a,b) => a - b).slice(1, array.length - 1).reduce((acc,c) => acc + c,0)
    }
}
```
