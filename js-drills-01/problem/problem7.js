
//    Write a function that accesses and prints the names and email addresses of individuals aged 25.

const persons = require("../data/persons")
let arrayOfObjects = persons

function nameEmailOfAge25(arrayOfObjects){

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
        if(typeof obj === 'object' && obj != null && 'name' in obj && 'email' in obj ){
        if(obj.age == 25){
            console.log(obj.name+" : "+obj.email)
            found = true
        } 
    }
    }
    if(!found){
        console.log('no data found')
    }
}
// nameEmailOfAge25(arrayOfObjects)
module.exports = nameEmailOfAge25;