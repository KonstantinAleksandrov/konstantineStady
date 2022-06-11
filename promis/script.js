'use strict'
/* const delay = (ms) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> reject(new Error('ошибочка')),ms)
    })
}
delay(3000).then(()=>console.log('выполнилось через 3 секунды'),()=>console.log('выполнилось с ошибкой')) */

/* const startButton = document.querySelector('.button')
startButton.addEventListener('click',()=>{
    showCricle(150,150,100).then((div)=>{
        div.classList.add('message-ball')
        div.append("Привет, мир!")
    })
})

const showCricle = (x,y,radius) =>{
    const div = document.createElement('div')
    div.style.width = 0
    div.style.height = 0
    div.style.left = x + 'px'
    div.style.top = y + 'px'
    div.classList.add('circle')
    document.body.append(div)


    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            div.style.width = radius * 2 + 'px'
            div.style.height = radius * 2 + 'px'

            div.addEventListener('transitionend',function handler(){
                div.removeEventListener('transitionend',handler)
                resolve(div)
            })
        })
    })
} */

console.log('world')
console.log('world')
console.log('world')
console.log('world')
console.log('world')
console.log('world')
setTimeout(()=>{
    console.log('hi')
},2000)
setTimeout(()=>{
    console.log('hi2')
},2000)
