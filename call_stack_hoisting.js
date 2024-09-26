
// saymyname('kanishk')

// function saymyname(finalname){
//     console.log(finalname)
// }

// console.log(age)

// var age = 25;

// console.log(age);

// let age = 25;


// sayhello()
// let sayhello = function(){
//     console.log('kese ho sare ke sare')

// }

// let object1 = new human()
// class human{
    
// }

// function greetme(greet , fullname){
//     console.log("hii", fullname)
//     greet()
// }

// function greet(){
//     console.log('hii dunaia')

// }

// greetme(greet,'kanishk')

// function solve(number){
//     return function(number){
//         return number*number
//     }
// }
// let ans = solve(4)
// let final = ans(5)
// console.log(final)

const arr = [
    function(a,b){
        return a+b
    },
    function(a,b){
        return a-b
    },
    function(a,b){
        return a*b
    }
]

let first = arr[0]
let ans = first(2,10)
console.log(ans)