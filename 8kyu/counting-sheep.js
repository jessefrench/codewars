// Counting Sheep

// DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// SOLUTION:
function countSheeps(arr){
    let sheep = 0
    arr.forEach(x => {
        if(x === true){
            sheep += 1
        }
    })
    return sheep
}