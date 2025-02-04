
// Q2 Find all users staying in Germany.

const users = require('../data/users.js')


function problem2(users){

    if(!users){
        return 'Please Provide Data'
    }
    if(typeof users !== 'object'){
        return 'please provide object'
    }
    if(Object.keys(users).length == 0){
        return 'Data is Empty'
    }

    let res = []
    for(let obj in users){
        if(typeof users[obj] === 'object' && typeof users[obj]['nationality'] == 'string'){
           if(users[obj]['nationality'].includes('Germany')){
            res.push(obj)
           }
        }
    }
    return res
}
// console.log(problem2(users))
module.exports = problem2