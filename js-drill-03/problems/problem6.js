// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.


const inventory  = require('../data/cars')

function problem6(inventory){

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
        if(obj.car_make == 'BMW' || obj.car_make == 'Audi'){
            res.push(obj)
        }
    }
    return res

}
const filteredarray = problem6(inventory)
console.log(JSON.stringify(filteredarray,null,2))
module.exports = filteredarray;