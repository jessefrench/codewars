// Name Shuffler

// DESCRIPTION:
// Write a function that returns a string in which firstname is swapped with last name.

// EXAMPLE: (Input --> Output)
// "john McClane" --> "McClane john"

// SOLUTION:
function nameShuffler(str){
    return str.split(' ').reverse().join(' ')
}