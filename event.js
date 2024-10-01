

// function changetext(event){
//     console.log(event)
//     let fpara = document.getElementById("fpara")
//     fpara.textContent = "hello kanishk"
// }

// let fpara = document.getElementById("fpara")
// fpara.addEventListener('click',changetext)

// fpara.removeEventListener('click' ,changetext)

// let fanchor = document.getElementById("fanchor")

// function click(event){
//     event.preventDefault();
//     fanchor.textContent = "click ho gya bhai"
// }

// // let fanchor = document.getElementById("fanchor")

// fanchor.addEventListener('click',click)

// let para = document.querySelectorAll('p')

function clickpara(event){
    if(event.target.nodeName === 'SPAN'){
        alert("you have clicked on para :"+ event.target.textContent)
    }
    
}

// for(let i = 0 ; i<para.length ;i++){
//     let paras = para[i];
//     paras.addEventListener('click',clickpara)

// }

let div = document.getElementById('wrapper')

div.addEventListener('click',clickpara)