// Grasshopper - Personalized Message

// DESCRIPTION:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// Use conditionals to return the proper message.

// CASE:
// name equals owner => 'Hello boss'
// otherwise => 'Hello guest'

// SOLUTION:
function greet(name, owner){
    return name === owner ? 'Hello boss' : 'Hello guest'
}