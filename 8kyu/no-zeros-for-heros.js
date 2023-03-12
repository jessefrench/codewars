// No Zeros for Heros

// DESCRIPTION:
// Numbers ending with zeros are boring. They might be fun in your world, but not here. Get rid of them. Only the ending ones.

// EXAMPLES:
// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// NOTE:
// Zero alone is fine, don't worry about it. Poor guy anyway.

// SOLUTION:
function noBoringZeros(n){
    const str = n.toString().replace(/0+$/, '')
    if (n === 0){
      return 0
    }
    return Number(str)
}