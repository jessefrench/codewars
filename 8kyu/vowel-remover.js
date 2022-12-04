// Vowel Remover

// DESCRIPTION:
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// EXAMPLES:
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

// NOTE:
// Don't worry about uppercase vowels
// 'y' is not considered a vowel for this kata

// SOLUTION:
function shortcut(string){
    return string
      .split('')
      .filter(str => !'aeiou'.includes(str))
      .join('')
}