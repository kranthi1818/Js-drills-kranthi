// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.


const inventory  = require('../data/cars')

function problem3(inventory){
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
       res.push(obj.car_model)
    }
    res.sort()
    return res

}
// console.log(problem3(inventory))
module.exports = problem3