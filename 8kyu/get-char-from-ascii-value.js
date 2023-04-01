// Get Character from ASCII Value

// DESCRIPTION:
// Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

// EXAMPLE:
// get_char(65)
// should return: 'A'

// SOLUTION:
function getChar(c){
    return String.fromCharCode(c)
}