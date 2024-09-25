// let obj = {
//     name : "kanishk",
//     age : 22,
//     wight : 68,
//     height : "6ft",
//     greet : function (){
//         console.log("hello world")
//     }
// }
// for(let key in obj){
//     console.log(key , " ", obj[key])
// }
// const { access } = require("fs")

// console.log(obj)
// obj.greet()

// let arr = [1 , 2 , 3 , 4 , 5]
// console.log(arr)

// let brr = new Array('love', 23, 'kanishk', 20 , 40 , 70)
// brr.push('pachory');
// brr.pop("pachory")
// brr.shift()
// brr.unshift('love')

// console.log(brr.slice(2,4));

// brr.splice(1,2,"kunal")
// console.log(brr) 

// let arr = [ 10 , 20 , 30]

// let ans = arr.map((number , index)=>{
//     console.log(number )
//     console.log(index)

// })

// console.log(ans)
// let ans = arr.map((number)=>{
//     return number*number;
// })

// console.log(ans)

// let arr = [10 , 20 , 30 , 11, 22 ,33 , 55 , 77]

// let ans = arr.filter((number ,index)=>{
//     return number % 2 === 0
//     // if(number % 2 === 0){
//     //     console.log(`this is even number :`,number ,`with index postion :`, index)
//     // }
//     // else{
//     //     console.log(`this is odd number :`,number ,`with index postion :`, index)
//     // }
// })

// console.log(ans)

// let arr = [ 1 , 3 , 'kunal' , 'kanishk' , null]

// let ans = arr.filter((value)=>{
//     if (typeof(value) === "string"){
//         return true
//     }
//     else{
//         return false
//     }
// })

// console.log(ans)

// let arr = [60 , 50 , 40 ,80]

// let ans = arr.reduce((acc,curr)=>{
//     return acc+curr
// }, 2)
// console.log(ans)

// console.log(arr.sort())
// console.log(arr.indexOf(40))

// arr.forEach((value , index) =>{
//     console.log("number :", value , "index :" , index)
// })

// let arr = [12 , 20 , 30 , 40]
// for(let value of arr){
//     console.log(value)
// }

// let stt = "kanishk"
// for(let value of stt){
//     console.log(value)
// }

let arr = [10 ,20 ,30 ,40];

function getsum(arr){
    let len = arr.length;
    let sum = 0;
    for (let index = 0 ; index<len ; index++){
        sum = sum + arr[index];

    }
    return sum;
}

// let ans = getsum(arr)
console.log(getsum(arr))