'use strict'
const getAllSection = document.querySelectorAll('.section')
const arrAllSection = [...getAllSection]
console.log(arrAllSection)

arrAllSection.forEach(item => {
    const spollerTitle = item.querySelector('[data-spoller]')
    spollerTitle.addEventListener('click',(event)=>{
        const activeSpoller = document.querySelectorAll('.active')
        spollerTitle.classList.toggle('active')
        spollerTitle.nextElementSibling.classList.toggle('open')

        if(activeSpoller.length > 0){
            activeSpoller.forEach(elem =>{
               elem.classList.remove('active')
               elem.nextElementSibling.classList.remove('open')
           }) 
       }
    })
})