## Find Nearest Square Number

Your task is to find the nearest square number, nearestSq(n), of a positive integer n.

Goodluck :)

```javascript
// Parameters: a positive number
// Returns: nearest square number of n
// Examples: nearestSq(2) => 1
// Pseudo code: Function nearestSq() passes in a number, squares that number with Math.pow(), rounds it to the nearest number with Math.round(), and then takes the square root with Math.sqrt().

// Time to solve: 
function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)),2)
}
```
