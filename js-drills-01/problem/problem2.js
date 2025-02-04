//   // Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.


const persons = require("../data/persons")
let arrayOfObjects = persons

function hobbiesIndividual(arrayOfObjects) {
    if(!arrayOfObjects){
                   
        return console.log("please provide input")
    }

    if(!Array.isArray(arrayOfObjects)){
        return console.log('Provide Correct Input in array ')
    }
    if(arrayOfObjects.length == 0){
        return console.log('the array is empty')
    }

    for (let obj of arrayOfObjects) {
        if (
            typeof obj === "object" && obj.length != 0 && "age" in obj && "name" in obj && "hobbies" in obj &&  Array.isArray(obj.hobbies)
        ) {
            if (obj.age === 30) {
                console.log(obj.name + " : " + obj.hobbies.join(", "));
            }
        }
    }
}
// hobbiesIndividual(arrayOfObjects)

module.exports = hobbiesIndividual;
