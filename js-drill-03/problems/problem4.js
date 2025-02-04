// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

const inventory  = require('../data/cars')


function problem4(inventory){

    if(!inventory){
        return  'Please Provide input'
    }
    if(!Array.isArray(inventory)){
        return 'Provide Input Correctly'
    }
    if(inventory.length == 0){
       return 'Data Not found'
    }

    let res = []
    for(let obj of inventory){
        res.push(obj.car_year)
    }
    return res
}
// console.log(problem4(inventory))
module.exports = problem4