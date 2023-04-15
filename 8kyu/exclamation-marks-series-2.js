// Exclamation Marks Series #2: Remove all Exclamation Marks from the End of Sentence

// DESCRIPTION:
// Remove all exclamation marks from the end of the sentence.

// EXAMPLES:
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

// SOLUTION:
function remove(s){  
    while (s && s.slice(-1) === '!'){
      s = s.slice(0, -1)
    }
    return s
}