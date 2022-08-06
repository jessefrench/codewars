## Filter Out the Geese

DESCRIPTION:

Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

```javascript
["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
```

For example, if this array were passed as an argument:

```javascript
["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
```

Your function would return the following array:

```javascript
["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
```

The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

```javascript
// Parameters: an array of bird names (list of strings, same case)
// Returns: an array bird names with all geese removed (same order as initial array)
// Examples: ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"] => ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// Pseudo code:

// function to take in array
function gooseFilter(birds){
    // variable assigned to array of geese
    const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    // return array with geese filtered out
    return birds.filter(e => !geese.includes(e))
}
```
