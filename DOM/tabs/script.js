'use strict'
const getAllTabs = document.querySelectorAll('.tabs-item')
const allTabs = [...getAllTabs]
const text = document.querySelector('.tabs-body')
text.innerHTML = document.querySelector('.active').innerHTML

allTabs.forEach(elem =>{
    const button = elem.querySelector('[data-tabs]')

    button.addEventListener('click',(event)=>{
        const allActive = document.querySelectorAll('.active')
        allActive.forEach(item => {
            item.classList.remove('active')
        })

        button.classList.toggle('active')
        text.innerHTML = event.target.nextElementSibling.innerHTML
    })
})
