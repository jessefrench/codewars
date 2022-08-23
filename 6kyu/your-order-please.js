// Your Order, Please

// DESCRIPTION:
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// EXAMPLES:
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// SOLUTION:

// Parameters: a string of words with numbers
// Returns: string sorted with numbers in order
// Examples: "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// Pseudo code: 

// function that takes in a string
function order(words){
    // variable to store split words
    let arr = words.split(' ')
    // variable to store array
    let i = []

    // loop through array
    arr.forEach(word => {
        // split word that is being iterated
        let x = word.split('')
        // extract number
        let num = x.find(e => parseInt(e))
        // push to array
        i.push([word,parseInt(num)])
    })

    // sort array by 1st index, and splice
    i.sort((a,b) => a[1] - b[1]).map(x => x.splice(1,1))
    // return result
    return i.join(' ')
}