// Unfinished Loop - Bug Fixing #1

// DESCRIPTION:
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// SOLUTION:
function createArray(number){
    let newArray = []
    for (let counter = 1; counter <= number; counter++){
      newArray.push(counter)
    }
    return newArray
}