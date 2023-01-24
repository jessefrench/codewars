// Break camelCase

// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.

// EXAMPLES:
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// SOLUTION:
function solution(str){
    let result = ''
    for (let e of str){
      e === e.toUpperCase() ? result += ' ' + e : result += e
    }
    return result
}