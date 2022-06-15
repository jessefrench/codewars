// Create Phone Number

// DESCRIPTION:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// EXAMPLE:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// NOTES:
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

// SOLUTION:
function createPhoneNumber(numbers){
    let string = numbers.toString().split(',').join('')
    let areaCode = string.slice(0,3)
    let firstThree = string.slice(3,6)
    let lastFour = string.slice(6,10)
    return `(${areaCode}) ${firstThree}-${lastFour}`
}