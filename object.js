// let obj = {
//     age : 18,
//     wt : 78,
//     ht :180,
//     color : "blue",
// }

// obj.color = "white"
// console.log(obj)

// let obj = {
//     age : 18
// }

// let b = {
//     ...obj
// }

// // let a = new b
// console.log(b)

// let obj = {
//     age : 18

// }

// let dst = Object.assign({},obj)

// console.log(dst)

let obj = {
    age : 18,
    wt : 78,
    ht :180,
    color : "blue",
}

let dest = {}

for(let key in obj){
    let newkey = key;
    let newvalue = obj[key]
    //insert key and value in dest and create a clone
    dest[newkey] = newvalue
}

console.log(dest)