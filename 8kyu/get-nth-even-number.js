// Get Nth Even Number

// DESCRIPTION:
// Return the nth even number.

// EXAMPLES: (Input --> Output)
// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466

// NOTE:
// The input will not be 0.

// SOLUTION:
function nthEven(n){
    return (n - 1) * 2
}