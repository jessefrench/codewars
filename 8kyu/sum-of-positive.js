// You get an array of numbers, return the sum of all of the positives ones. If there is nothing to sum, the sum is default to 0.

function positiveSum(arr){
    const sum = (acc,c) => acc + (c > 0 ? c : 0)
    return arr.reduce(sum,0)
}