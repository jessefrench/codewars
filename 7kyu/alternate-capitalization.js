// Alternate Capitalization

// DESCRIPTION:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// EXAMPLE:
// Capitalize("abcdef") = ['AbCdEf', 'aBcDeF']

// NOTE:
// The input will be a lowercase string with no spaces

// SOLUTION:
function capitalize(s){
    let evenStr = ''
    let oddStr = ''
    for (let i = 0; i < s.length; i++){
      i % 2 === 0 ? evenStr += s[i].toUpperCase() : evenStr += s[i]
      i % 2 === 1 ? oddStr += s[i].toUpperCase() : oddStr += s[i]
    }
    return [evenStr, oddStr]
}