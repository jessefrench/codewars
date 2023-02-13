// Heads and Legs

// DESCRIPTION:
// Everybody has probably heard of the animal heads and legs problem from the earlier years at school. It goes: “A farm contains chickens and cows. There are x heads and y legs. How many chickens and cows are there?” Where x <= 1000 and y <= 1000.

// TASK:
// Assuming there are no other types of animals, work out how many of each animal there are. Return an array list - [chickens, cows]/{chickens, cows}. If either the heads & legs is negative, the result of your calculation is negative, or the calculation is a float return "No solutions" (no valid cases).

// IN THE FORM:
// [Heads, Legs] = [72, 200]
// VALID - [72, 200] =>             [44 , 28]   
//                              [Chickens, Cows]
// INVALID - [72, 201] => "No solutions"

// NOTES:
// If 0 heads and 0 legs are given, always return [0, 0] since zero heads must give zero animals. You will only be given integers types - however, negative values (edge cases) will be given.

// SOLUTION:
function animals(heads, legs){
    let cows = (legs / 2) - heads
    let chickens = heads - cows
    return Math.round(cows) != cows
        || Math.round(chickens) != chickens
        || Math.abs(cows) != cows
        || Math.abs(chickens) != chickens ?
        "No solutions" : [chickens, cows]
}