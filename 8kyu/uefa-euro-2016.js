// UEFA EURO 2016

// DESCRIPTION:
// Finish the uefaEuro2016() function so it returns a string just like in the examples below:

// EXAMPLES:
uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

// SOLUTION:
function uefaEuro2016(teams, scores){
    return scores[0] > scores[1] ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
         : scores[0] < scores[1] ? `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
         : `At match ${teams[0]} - ${teams[1]}, teams played draw.`
}