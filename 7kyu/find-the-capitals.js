// Find the Capitals

// DESCRIPTION:
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// EXAMPLE:
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// SOLUTION:
const capitals = function(word){
    let arr = []
    word.split('').forEach((e,i) => {
      if (e === e.toUpperCase()){
        arr.push(i)
      }
    })
    return arr
}