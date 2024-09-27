

// class Human{
//     //properties
//     age;
//     #wt = 23 ;
//     ht = 180 ;

//     constructor (newage , newheight , newwieght) {
//         this.age = newage;
//         this.ht = newheight;
//         this.#wt = newwieght
//     }



//     //behaviour
//     walking(){
//         console.log("i am walking",this.#wt)

//     }

//     running(){
//         console.log("i am running")
//     }

//     get fetch(){
//         return this.#wt;
//     }

//     set modify(val){
//         this.#wt = val;
//     }
// }

// let obj = new Human(50 , 190 , 101)
// // console.log(obj.#wt) 

// // obj.walking()
// // console.log(obj.fetch); 

// // obj.modify = 25; // Modify private property using setter
// // console.log(obj.fetch); // Check the new value
// console.log(obj.age)
// console.log(obj.ht)
// console.log(obj.fetch)


// function sayname(myname = "parbhu"){
//     console.log("this is my name :", myname);
// }
// sayname()
// sayname("kanishk")

// function sayname(fname = "parbhu" , lname = fname.toUpperCase()){
//     console.log("this is my name :", fname ," ", lname);
// }
// sayname()
// sayname("kanishk")
// sayname("kanishk" , "pachory")

// function sayname(fname={age : 18 , weight : 34}){
//     console.log("this is my name :", fname );
// }

// sayname()

// function sayname(fname=["kanishk" , 45 , "pachory"]){
//     console.log("this is my name :", fname );
// }

// sayname()

function age(){
    return 190;
}

function sayname(fname="kanishk" ,agee = age()){
    console.log("this is my name :", fname , "and age is :" , agee);
}

sayname()