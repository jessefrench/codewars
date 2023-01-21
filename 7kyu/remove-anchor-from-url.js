// Remove Anchor from URL

// DESCRIPTION:
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// EXAMPLES:
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// SOLUTION:
function removeUrlAnchor(url){
    return url.split('#').shift()
}