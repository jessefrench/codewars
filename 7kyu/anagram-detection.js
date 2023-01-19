// Anagram Detection

// DESCRIPTION:
// An anagram is the result of rearranging the letters of a word to produce a new word. Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// EXAMPLES:
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"

// NOTE:
// Anagrams are case insensitive

// SOLUTION:
const isAnagram = (test, original) => {
    return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')
}