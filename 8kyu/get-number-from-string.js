// Get Number from String

// DESCRIPTION:
// Write a function which removes from string all non-digit characters and parse the remaining to number.

// EXAMPLE:
// "hell5o wor6ld" -> 56

// SOLUTION:
function getNumberFromString(s){
    let result = ''
    for (let i = 0; i < s.length; i++){
      let c = s.charCodeAt(i)
      if (c >= 48 && c <= 57){
        result += s[i]
      }
    }
    return Number(result)
}