// Counting Duplicates

// DESCRIPTION:
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// EXAMPLES:
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// SOLUTION:

// Parameters: a string that includes numbers, lowercase letters, and uppercase letters
// Returns: the number of duplicate characters in the string
// Examples: "abcde" -> 0; "aabbcde" -> 2
// Pseudo code: 

// function that takes in a string
function duplicateCount(text){
    // variable that splits the string, sorts it, and changes all characters to lowercase
    let splitString = text.toLowerCase().split("").sort()
    // variable to store results as an array
    let results = []
    // for loop to move through each character
    for(let i = 0; i < splitString.length; i++){
        // if duplicates are found, return count 
        if(splitString[i] === splitString[i + 1]){
          results.push(splitString[i])
        }
    }
    // display results
    const setArray = new Set(results)
    return setArray.size
}
