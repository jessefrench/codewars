// Exclamation Marks Series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

// DESCRIPTION:
// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

// EXAMPLES:
// remove("Hi!") === "Hi!"
// remove("Hi!!!") === "Hi!"
// remove("!Hi") === "Hi!"
// remove("!Hi!") === "Hi!"
// remove("Hi! Hi!") === "Hi Hi!"
// remove("Hi") === "Hi!"

// SOLUTION:
function remove(str){
    return str.split('!').join('').concat('!')
}