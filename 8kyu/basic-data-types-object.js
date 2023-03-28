// Training JS #5: Basic Data Types--Object

// DESCRIPTION:
// In JavaScript, Object is one of the basic data types. To define an Object you can use 'let obj = new Object()' or 'let obj = {}'. You can define the object attributes during initialization, like this: 'let animal = {name:"dog"}'. You can also set/get some properties after the object definition, like this:

// let animal = {}
// animal.name = "dog" or (animal["name"] = "dog")

// Task
// Given a functional animal object that accepts 1 parameter:obj like this: {name:"dog", legs:4, color:"white"}, return a string like this: "This white dog has 4 legs."

// SOLUTION:
function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`
}