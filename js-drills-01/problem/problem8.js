
//    Implement a loop to access and log the city and country of each individual in the dataset.

const persons = require("../data/persons")
let arrayOfObjects = persons

function cityCountryOfIndividual(arrayOfObjects){

    if(!arrayOfObjects){
                   
        return console.log("please provide input")
    }

    if(!Array.isArray(arrayOfObjects)){
        return console.log('Provide correct input in array ')
    }
    if(arrayOfObjects.length == 0){
        return console.log('The array is empty.')
    }
    let found  = false;
    for(let obj of arrayOfObjects){
        if(typeof obj == 'object' && obj !=null && 'city' in obj && 'country' in obj && 'name' in obj){
            console.log(obj.name+" :"+obj.city+" "+obj.country)
            found = true
        }
    }
    if(!found){
        console.log('No data found')
    }

}
// cityCountryOfIndividual(arrayOfObjects)
module.exports = cityCountryOfIndividual;