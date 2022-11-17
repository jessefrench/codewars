// Is it a Palindrome?

// DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is a palindrome.

// SOLUTION:
function isPalindrome(x){
    return x.toLowerCase() === x.split('').reverse().join('').toLowerCase()
}