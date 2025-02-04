const persons = require('../data/persons');
const emailIndividual = require('../problem/problem1');
let arrayOfObjects = persons


console.log(emailIndividual())
console.log(emailIndividual(123))
console.log(emailIndividual(arrayOfObjects))