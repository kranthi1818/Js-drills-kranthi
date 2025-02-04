
//Q3 Find all users with masters Degree.


const users = require('../data/users')


function problem3(users){

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
        if(typeof users[obj] === 'object' && typeof users[obj]['qualification'] == 'string'){
           if(users[obj]['qualification'].toLowerCase().includes('masters')){
            res.push(obj)
           }
        }
    }
    return res
}
// console.log(problem3(users))
module.exports = problem3