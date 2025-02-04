// Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

const persons = require("../data/persons")
let arrayOfObjects = persons

function emailIndividual(arrayOfObjects){

    let emails = []
    // if input is not an array
    if(!arrayOfObjects){
                   
        return 'please provide input'
    }

    if(!Array.isArray(arrayOfObjects)){
        return 'Provide Correct Input in array '
    }
    if(arrayOfObjects.length === 0){
        return 'the array is empty'
    }
    for(let i = 0 ; i<arrayOfObjects.length;i++){
        let item = arrayOfObjects[i]

        if (typeof item === "object" && item != null && "email" in item) {
            emails.push(item.email);
        }
    }
    return emails
  }
// let result = emailIndividual(arrayOfObjects)
// console.log(result)

module.exports = emailIndividual;
  