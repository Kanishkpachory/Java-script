// complie time error
//synatax error
// console.log(1

const { error } = require("console")

// runtime error
// reference error
// console.log(z)

// try{
//     console.log("try block start here")
//     console.log(x)
//     console.log("try block end here")

// }
// catch(e){
//     console.log("this is the catch block")
//     console.log("your error is here ", e)

// }
// finally{
//     console.log("i will run everytime as iam final block")
// }

try{
    console.log("try block start here")
    console.log(x)
    console.log("try block end here")

}
catch(e){
    throw new Error ("bhai phele intalize tho kar le vairable")

}