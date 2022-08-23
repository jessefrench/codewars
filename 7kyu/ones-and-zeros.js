// Ones and Zeros

// DESCRIPTION:
// Given an array of ones and zeroes, convert the equivalent binary value to an integer. Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1. However, the arrays can have varying lengths, not just limited to 4.

// SOLUTION:
const binaryArrayToNumber = arr => {
    const binaryString = arr.join('')
    return parseInt(binaryString, 2)
}