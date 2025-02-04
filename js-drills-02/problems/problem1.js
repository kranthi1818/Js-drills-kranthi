
// Q1 Find all users who are interested in playing video games.

const users = require('../data/users.js')

function problem1(users){
    if(!users){
        return 'Please Provide Data'
    }
    if(typeof users !== 'object'){
        return 'please provide object'
    }
    if(Object.keys(users).length == 0){
        return 'Data is Empty'
    }

    let result = []
    for(let obj in users){
        if(typeof users[obj] === 'object' && Array.isArray(users[obj]['interests']) && typeof users[obj]['interests'][0] == 'string' ){
            if(users[obj]['interests'] && users[obj]['interests'][0].includes('Video Games')){
                result.push(obj)
            }
        }
    }
    return result

}
// console.log(problem1(users))
module.exports = problem1
