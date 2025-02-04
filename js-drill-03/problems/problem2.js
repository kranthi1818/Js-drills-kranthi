// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
// ("Last car is a *car make goes here* *car model goes here*");


const cars = require('../data/cars.js')



function problem2(cars){
    if(!cars){
        return console.log( 'Please Provide input')
    }
    if(!Array.isArray(cars)){
        console.log('mjhgf')
        return  'Provide Input correctly'
    }
    if(cars.length == 0){
         return  'Data Not found'
    }
    
    let obj = cars[cars.length-1]

    return obj;
}

module.exports = problem2