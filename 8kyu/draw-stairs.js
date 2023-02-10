// Draw Stairs

// DESCRIPTION:
// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// For example:
// n = 3 results in: "I\n I\n  I"

// Or printed:
// I
//  I
//   I

// Another example, a 7-step stairs should be drawn like this:
// I
//  I
//   I
//    I
//     I
//      I
//       I

// SOLUTION:
function drawStairs(n){
    let stairs = ''
    for (let i = 1; i <= n; i++){
      stairs += ' '.repeat(i - 1) + 'I'
      if (i !== n){
        stairs += "\n"
      }    
    }
    return stairs
}