# Daily Code Challenges
I like to complete at least one challenge from [Codewars](https://codewars.com) every day to keep my mind sharp. This is where I push my code.

![codewars](https://user-images.githubusercontent.com/106822556/178802792-15c8887e-9228-4014-b07c-a0c3051bcba1.png)

## P.R.E.P.
Recently I've started using something called P.R.E.P. to solve my coding challenges. It stands for Parameters, Returns, Examples, and Pseudocode. It's a great way to quickly break down a problem to better understand what needs to happen. I will provide an example further down.

Let's say you will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

Let's give this a shot using P.R.E.P.

```javascript
// Parameters: an array of strings (case-sensitive)
// Returns: first value of sorted array with '***' between each letter
// Examples: ['this', 'is', 'an', 'example'] => 'a***n'
// Pseudocode:

// function that takes in an array

    // sort alphabetically
    
    // remove first string
    
    // split string into individual strings
    
    // rejoin individual strings with '***' between them
    
```

Now that we have our pseudocode written, let's finish this out with the actual code.

```javascript
// function that takes in an array
function twoSort(s){
    return s
    // sort alphabetically
    .sort()
    // remove first string
    .shift()
    // split string into individual strings
    .split('')
    // rejoin individual strings with '***' between them
    .join('***')
}
```

Sometimes coding challenges can be overwhelming with the amount of information they throw at you, but using this method allows me to focus in on only the most important parts, and by writing out my pseudocode first, I have a good outline for what the real code might look like.

## Current Rank
![badge](https://www.codewars.com/users/jessefrench/badges/large)

My coding abilities have greatly improved since I started training on Codewars. I've picked up so many useful tips and best practices that I most likely wouldn't have seen anywhere else. And I can't deny that the clans and competitive ranking system are pretty fun too ;)
