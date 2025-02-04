
//    Create a function to retrieve and display the first hobby of each individual in the dataset.

const persons = require("../data/persons")
let arrayOfObjects = persons

function firstHobby(arrayOfObjects){
    if(!arrayOfObjects){
                   
        return console.log("please provide input")
    }

    if(!Array.isArray(arrayOfObjects)){
        return console.log('Provide correct input in array ')
    }
    if(arrayOfObjects.length == 0){
        return console.log('The array is empty.')
    }
    let found = false
    for(let obj of arrayOfObjects){
        if(typeof obj === 'object' && obj != null && 'name' in obj && 'hobbies' in obj && Array.isArray(obj.hobbies)){
           console.log(obj.name + " : " + obj.hobbies[0])
          found = true;
     }
    }
    if(!found){
        console.log('no data found')
    }
}
// firstHobby(arrayOfObjects)
module.exports = firstHobby;