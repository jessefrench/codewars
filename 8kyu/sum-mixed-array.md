## Sum Mixed Array

Description

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

```javascript
// Parameters: an array of strings and numbers
// Returns: sum of the array as a number
// Examples: sumMix([9, 3, '7', '3']) => 22
// Pseudo Code: Function 'sumMix' passes in an array of numbers and strings 'x'. We can find the sum of the array using the .reduce() array method and using 'acc' and 'c' as our variables for accumulator and current value. In order to return the sum as if all array values were numbers, we can wrap each variable in Number(). We add a zero at the end of our .reduce() method to indicate that our starting value is zero.

// Time to solve: 
function sumMix(x){
  return x.reduce((acc,c) => Number(acc) + Number(c),0)
}
```
