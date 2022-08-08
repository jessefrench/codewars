## Who Likes It?

DESCRIPTION:

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

```javascript
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
```

Note: For 4 or more names, the number in "and 2 others" simply increases.

```javascript
// Parameters: an array of names of people who like item
// Returns: names and number of people who like item
// Examples: ["Peter"] --> "Peter likes this"; ["Jacob", "Alex"] --> "Jacob and Alex like this"
// Pseudo code: 

// function that takes in an array
function likes(names){
    // variable to store number of names
    let n = names.length - 2
    // 0 likes
    if(names.length < 1){
      return 'no one likes this'
    // 1 like  
    }else if(names.length === 1){
      return `${names[0]} likes this`
    // 2 likes
    }else if(names.length === 2){
      return `${names[0]} and ${names[1]} like this`
    // 3 likes
    }else if(names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    // 4+ likes
    }else if(names.length >= 4){
      return `${names[0]}, ${names[1]} and ${n} others like this`
    }
}
```

I wanted to refactor this in a switch case since this solution is not the easiest to read, but I couldn't quite remember the correct syntax. After submitting my solution, I saw the top solution was of course a perfectly written switch case. So much cleaner! I'll include that below:

```javascript
function likes(names){
  names = names || []
  switch(names.length){
    case 0: return 'no one likes this'; break
    case 1: return `${names[0]} likes this`; break
    case 2: return `${names[0]} and ${names[1]} like this`; break
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`; break
    default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}
```
