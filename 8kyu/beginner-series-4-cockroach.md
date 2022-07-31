## Beginner Series #4 Cockroach

Description:
The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:
1.08 --> 30

Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

```javascript
// Parameters: a number (speed in kph)
// Returns: a number (speed in cps)
// Examples: 1.08 --> 30
// Pseudo code: Function 'cockroachSpeed()' takes in its speed 's' in km per hour. Using the formula of s * 27.778 we can determine the cockroache's speed in cm per second and then use Math.floor to round to the nearest whole number. 

// Time to solve: 
function cockroachSpeed(s){
  return Math.floor(s * 27.778)
}
```
