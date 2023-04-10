// Find the Postion!

// DESCRIPTION:
// When provided with a letter, return its position in the alphabet.

// EXAMPLE:
// Input: "a"
// Ouput: "Position of alphabet: 1"

// SOLUTION:
function position(letter){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const index = alphabet.indexOf(letter.toLowerCase()) + 1
    return "Position of alphabet: " + index
}