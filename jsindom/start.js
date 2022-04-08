'use strict'
const button = document.querySelector('.button')
const container = document.querySelector('.modal-container')
/* button.addEventListener('click',function(event){
    container.style.display = 'flex'
})
container.addEventListener('click',function(event){
    
}) */

document.addEventListener('click', function(event){
    if(event.target.classList == 'button'){
        container.style.display = 'flex'
    }
    if(event.target.dataset.close == 'close' || event.target.tagName == 'SPAN'){
        container.style.display = 'none'
    }
})