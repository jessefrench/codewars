// Highest and Lowest

// DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// SOLUTION:
function highAndLow(nums){
    nums = nums.split(' ')
    return `${Math.max(...nums)} ${Math.min(...nums)}`
}