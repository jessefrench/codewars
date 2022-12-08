// The Wide-Mouthed Frog!

// DESCRIPTION:
// The wide-mouth frog is particularly interested in the eating habits of other creatures. He just can't stop asking the creatures he encounters what they like to eat. But then he meets the alligator who just LOVES to eat wide-mouthed frogs! When he meets the alligator it then makes a tiny mouth. Your goal in this kata is to create complete the mouthSize function. This function takes one argument (animal) which corresponds to the animal encountered by the frog. If the animal is an alligator (case-insensitive) return 'small', otherwise return 'wide'.

// SOLUTION:
function mouthSize(animal){
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide'
}