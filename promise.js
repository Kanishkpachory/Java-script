// const { rejects } = require("assert");
// const { resolve } = require("path");

// const { resolve } = require("path");




// let firstpromises = new Promise((resolve, reject) =>{
//     console.log("kanishk")
//     // resolve("happy")
//     reject(new Error ("not happy"))
// }) 

// function saymyname(){
//     console.log("my name is kanishk")
// }

// setTimeout(saymyname ,10000)


// let promise1 = new Promise((reslove , reject)=>{
//     let success = true;
//     if(success){
//         reslove("promise fullfiled")
//     }
//     else{
//         reject("promise not resloved")
//     }
// })

// promise1.then((message) =>{
//     console.log("then ka message is :" +message)
// }).catch((error) =>{
//     console.log("error ka message is :" + error)
// })

// promise1.then((message)=>{
//     console.log("first msg :" + message)
//     return "promised fullfilled FIRST message"
// }).then((message) =>{
//     console.log("second msg :"+message)
//     return "promised fullfied SECOND message"
// }).then((message) => {
//     console.log("thisrd msg :" +message)
// }).catch((error)=>{
//     console.error("mai tho error hu")
// }).finally((message)=>{
//     console.log("mai tho final block hu hai chalu ga he")
// })

let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "first");
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "second");
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "third");
});

Promise.all([promise2, promise1, promise3])
.then((messages) => {
    console.log(messages);
})
.catch((error) => {
    console.error("error: " + error);
});
