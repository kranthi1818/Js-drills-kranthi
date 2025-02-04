  //    Implement a loop to access and print the ages of all individuals in the dataset.

const persons = require("../data/persons")
let arrayOfObjects = persons


function agesOfIndividual(arrayOfObjects){


    if(!arrayOfObjects){
                   
        return console.log("please provide input")
    }

    if(!Array.isArray(arrayOfObjects)){
        return console.log('Provide Correct Input in array ')
    }
    if(arrayOfObjects.length == 0){
        return console.log('the array is empty')
    }
   
    for(let obj of arrayOfObjects){
        if(typeof obj === 'object' && obj != null && 'name' in obj && 'age' in obj){
          console.log(obj.name + " : " + obj.age)
     }
    }
}

// agesOfIndividual(arrayOfObjects)
module.exports = agesOfIndividual;

