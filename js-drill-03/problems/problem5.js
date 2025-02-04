// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

const inventory  = require('../data/cars')


function problem5(inventory){

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
        if(obj.car_year < 2000 ){
            res.push(obj.car_year)
        }
    }
    return [res,res.length]
}
// console.log(problem5(inventory));
module.exports = problem5