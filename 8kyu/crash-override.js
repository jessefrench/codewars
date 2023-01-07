// Crash Override

// DESCRIPTION:
// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers. Your task is to create a function that, given a proper first and last name, will return the correct alias.

// NOTES:
// Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.
// If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."
// Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

// These two objects are preloaded, you need to use them in your code.
// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// EXAMPLES:
// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

// Happy hacking!

// SOLUTION:
function aliasGen(charOne, charTwo){
    let arr = ["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","R","S","X","T","U","V","Y","W","Z","Q"]

    charOne = charOne.toUpperCase().split("")[0]
    charTwo = charTwo.toUpperCase().split("")[0]
    let result = firstName[charOne] + " " + surname[charTwo]
    
    if(arr.includes(charOne) && arr.includes(charTwo)){
      return result
    }else{
       return "Your name must start with a letter from A - Z."
    }
}