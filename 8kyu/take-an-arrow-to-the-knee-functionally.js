// Take an Arrow to the Knee, Functionally

// DESCRIPTION:
// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

// EXAMPLES:
// How to convert a number to an ascii Character:
// String.fromCharCode(97) // a

// SOLUTION:
const ArrowFunc = function(arr){
    return arr.map(n => String.fromCharCode(n)).join('')
}