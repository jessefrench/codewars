// Convert String to camelCase

// DESCRIPTION:
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// EXAMPLES:
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// SOLUTION:
function toCamelCase(str){
    let result = ''
    if (str.length === 0) return str  
    for (let i = 0; i < str.length; i++){
      if (str[i] === '-' || str[i] === '_'){
        result += str[i+1].toUpperCase()
        i += 1
      }else{
        result += str[i]
      }  
    }
    return result
}