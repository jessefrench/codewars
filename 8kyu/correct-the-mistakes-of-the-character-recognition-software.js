// Correct the Mistakes of the Character Recognition Software

// DESCRIPTION:
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer. When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes. Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1

// NOTE:
// The test cases contain numbers only by mistake.

// SOLUTION:
function correct(string){
    const mistake = { 5: 'S', 0: 'O', 1: 'I' }
    const fix = function(str){
      return str in mistake ? mistake[str] : str
    }
    return string.split('').map(fix).join('')
}