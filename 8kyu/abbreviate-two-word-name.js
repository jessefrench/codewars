// Abbreviate Two Word Name

// DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.

// SOLUTION:
function abbrevName(name){
    return name.split(' ').map(e => e[0].toUpperCase()).join('.')
}