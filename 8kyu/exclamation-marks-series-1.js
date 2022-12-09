// Exclamation Marks Series #1: Remove an Exclamation Mark from the End of a String

// DESCRIPTION:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// EXAMPLES:
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"

// SOLUTION:
function remove(s){
    return (s.slice(-1) === '!') ? s.substring(0, s.length - 1) : s
}