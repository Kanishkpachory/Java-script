// code 1
 
const t1 = performance.now();

for (let i = 0; i<=100 ; i++){
    let para = document.createElement('p');
    para.textContent = "this is para :" + i;
    document.body.appendChild(para);
}

const t2 = performance.now();
console.log("total time is code 1 :" + (t2-t1));


// code 2

const t3 = performance.now();

let div = document.createElement('div')

for(let i = 1; i<=100 ; i++){
    let para = document.createElement('p');
    para.textContent = "this is para :" + i;
    div.appendChild(para)

}
document.body.appendChild(div)

const t4 = performance.now();

console.log("total time is code 2:" + (t4-t3));