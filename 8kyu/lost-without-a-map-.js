// Parameters: array of intergers
// Returns: new array with each value doubled
// Examples: [1, 2, 3] --> [2, 4, 6]
// Pseudo code: Function 'maps' takes in an array 'x' and returns a new array using the .map() array method. Using 'n' as a parameter for each number in the new array, 'n * 2' doubles each number.

// Time to solve:
function maps(x){
    return x.map(n => n * 2)
}