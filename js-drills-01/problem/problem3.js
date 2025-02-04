  // Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.

const persons = require("../data/persons")
let arrayOfObjects = persons


function studentsAustralia(arrayOfObjects){

      let flag = true;
    if(!Array.isArray(arrayOfObjects)){
        console.log("Give proper array Input")
        return;
    }
    for(let obj of arrayOfObjects){

        if(typeof obj === "object" && obj != null && "isStudent" in obj && "country" in obj && "name" in obj)  {
        if(obj.isStudent == true && obj.country == 'Australia'){
            console.log(obj.name);
            flag = false;
        }
    }
    }
    if(flag){
        console.log("Data Not Found")
    }
}
// studentsAustralia(arrayOfObjects)
module.exports = studentsAustralia;