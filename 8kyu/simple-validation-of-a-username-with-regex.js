// Simple Validation of a Username with Regex

// DESCRIPTION:
// Write a simple regex to validate a username. Allowed characters are: lowercase letters, numbers, and underscore. Length should be between 4 and 16 characters (both included).

// SOLUTION:
function validateUsr(username){
    return /^[a-z0-9_]{4,16}$/.test(username)
}