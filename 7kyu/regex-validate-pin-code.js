// Regex Validate PIN Code

// DESCRIPTION:
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. If the function is passed a valid PIN string, return true, else return false.

// EXAMPLES: (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// SOLUTION:
function validatePIN(pin){
    // i don't know regex :)
    pin = pin.split('')
    let findNaN = pin.find(char => !(parseInt(char) >= 0))
    if((pin.length === 4 || pin.length === 6) && !findNaN){
      return true
    }else{
      return false
    }
}