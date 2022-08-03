## Parse Nice Int From Char Problem

Description:

You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

```javascript
// Parameters: a string with a number at beginning
// Returns: a number
// Examples: 1 year old => 1; 5 years old => 5
// Pseudo code: Function getAge() takes in a string. Since the age is always the first character in the string, we can use inputString[0] to return it. To convert it to a number we can wrap the whole thing in Number().

// Time to solve:
function getAge(inputString){
    return Number(inputString[0])
}
```
