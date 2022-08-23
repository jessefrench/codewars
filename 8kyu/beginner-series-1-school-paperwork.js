// Beginner Series #1 School Paperwork

// DESCRIPTION:
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// EXAMPLES:
// n = 5, m = 5: 25
// n = -5, m = 5: 0

// SOLUTIONS:
// function declaration with if/else statement
function paperwork(n,m){  
    if(n < 0 || m < 0){
        return 0
    }else{
        return n * m
    }
}

// function declaration with ternary operatory
function paperwork(n,m){
  return n < 0 || m < 0 ? 0 : n * m
}

// function expression with arrow function and ternary operator
const paperwork = (n,m) => n < 0 || m < 0 ? 0 : n * m