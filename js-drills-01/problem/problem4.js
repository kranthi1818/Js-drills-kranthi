
  //Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

const persons = require("../data/persons")
let arrayOfObjects = persons


function nameCity(arrayOfObjects){

    if(!arrayOfObjects){
                   
        return console.log("please provide input")
    }

    if(!Array.isArray(arrayOfObjects)){
        return console.log('Provide Correct Input in array ')
    }
    if(arrayOfObjects.length == 0){
        return console.log('the array is empty')
    }

   if(arrayOfObjects.length >= 3){
    let indexThree = arrayOfObjects[3]
        if(typeof indexThree == "object" && indexThree != null && 'name' in indexThree && 'city' in indexThree){
            console.log(indexThree.name+" "+indexThree.city)
        }else{
            console.log('Data Not Found')
        }
   }else{
    console.log("array does not have enough elements")
   }
}
module.exports = nameCity;
// nameCity(arrayOfObjects);

