// Double Char

// DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// EXAMPLES: (Input -> Output)
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// SOLUTION:
function doubleChar(str){
    return str
      .split('')
      .map(c => c + c)
      .join('')
}