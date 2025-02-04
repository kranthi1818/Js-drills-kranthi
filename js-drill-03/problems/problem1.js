// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
// 


const cars = require('../data/cars.js')


function problem1(cars,id=33){

    if(!cars){
        return console.log( 'Please Provide input')
    }
    if(!Array.isArray(cars)){
        console.log( 'Provide Input Correctly')
    }
    if(cars.length == 0){
        console.log( 'Data Not found')
    }

    for(let obj of cars){
        if(obj.id == id){
            console.log(`Car ${id} Is a ${obj.car_year} ${obj.car_make} ${obj.car_model}`)
        }
    }
}

module.exports = problem1