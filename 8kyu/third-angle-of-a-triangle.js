// Third Angle of a Triangle

// DESCRIPTION:
// You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd.

// NOTE:
// Only positive integers will be tested.

// SOLUTION:
function otherAngle(a,b){
    return 180 - (a + b)
}