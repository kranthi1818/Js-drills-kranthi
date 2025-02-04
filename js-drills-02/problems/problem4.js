

// Q4 Group users based on their Programming language mentioned in their designation.


const users = require('../data/users')


function problem4(users){
    if(!users){
        return 'Please Provide Data'
    }
    if(typeof users !== 'object'){
        return 'please provide object'
    }
    if(Object.keys(users).length == 0){
        return 'Data is Empty'
    }
    const language = {'python':[],'javascript':[],'golang':[]}

    for(let obj in users){
    
    if(users[obj]['desgination']){
        for(let lang in language){
            if(users[obj]['desgination'].toLowerCase().includes(lang)){
                language[lang].push(obj)
            }
        }
    }
    
    }
    return language

}
console.log(problem4(users))
module.exports = problem4