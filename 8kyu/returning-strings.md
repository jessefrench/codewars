## Returning Strings

Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

Make sure you type the exact thing I wrote or the program may not execute properly.

```javascript
// Parameters: a name as a string
// Returns: a greeting that includes an input for a name
// Examples: "Hello, <name> how are you doing today?"
// Pseudo code: Function 'greet' passes in a string 'name'. The function returns a greeting and uses a template literal to get the name out of the input.

// Time to solve:
function greet(name){
    return `Hello, ${name} how are you doing today?`
}
```