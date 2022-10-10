// Number of People in the Bus

// DESCRIPTION:
// There is a bus moving in the city, and it takes and drops some people off in each bus stop. You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get into bus (the first item) and the number of people that get off the bus (the second item) in a bus stop. Your task is to return the number of people who are still on the bus after the last bus station (last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative. The second value in the first integer array is 0, since the bus is empty in the first bus stop.

// SOLUTION:
const number = function(busStops){
    let result = 0
    for (let i = 0; i < busStops.length; i++){
      result += (busStops[i][0] - busStops[i][1])
    }
    return result
}