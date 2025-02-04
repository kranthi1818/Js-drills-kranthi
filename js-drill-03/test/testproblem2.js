

const inventory = require('../data/cars.js')

const problem2 = require('../problems/problem2.js')


let obj =  problem2(inventory)
console.log(`Last car is a ${obj.car_make} ${obj.car_model}`)


