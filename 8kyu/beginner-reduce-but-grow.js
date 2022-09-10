// Beginner - Reduce But Grow

// DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order.

// EXAMPLE:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// SOLUTION:
function grow(x){
    return x.reduce((acc,c) => acc * c, 1)
}