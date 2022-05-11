'use strict'
const items = document.querySelectorAll('.slider-item')
const itemsSrc = []
items.forEach(item =>{
    itemsSrc.push(item.querySelector('img').src)
    item.remove()
})

const sliderSettings = {
    step: 0,
    amount : 1,
    nextOrPrevious :true,
} 

const activeSlider = () => {
   const container = document.querySelector('.slider-container')
    for(let i = 0; i < sliderSettings.amount;i++){
        container.append(createItem(i))
    }
}

const createItem = (index) =>{
    const div = document.createElement('div')
    const img = document.createElement('img')
    div.classList.add('slider-item')
        img.src = itemsSrc[index]
        
        div.append(img)
        return(div)
}

const addItem = () => {
    const container = document.querySelector('.slider-container')
    if(sliderSettings.nextOrPrevious){
        if(sliderSettings.step > itemsSrc.length - 1){
            sliderSettings.step = 0
        }
        container.append(createItem(sliderSettings.step))
    }else{
        if(sliderSettings.step < 0){
            sliderSettings.step = itemsSrc.length - 1
        }
        container.append(createItem(sliderSettings.step))
    }
   
}
const deleteItem = () =>{
    const arr = document.querySelector('.slider-item')
    const container = document.querySelector('.slider-container')
    if(sliderSettings.nextOrPrevious){
        arr.style.transform = 'translate(-600px)'
        const time = setTimeout(()=>{
            arr.remove()
        },500)
    }else{
        arr.style.transform = 'translate(600px)'
        const time = setTimeout(()=>{
            arr.remove()
        },500)
    }

}

activeSlider()

const next = document.querySelector('.next-arrow')
next.addEventListener('click',()=>{
    sliderSettings.nextOrPrevious = true
    sliderSettings.step++
    addItem()
    deleteItem()
})
const previous = document.querySelector('.previous-arrow')
previous.addEventListener('click',()=>{
    sliderSettings.nextOrPrevious = false
    sliderSettings.step--
    addItem()
    deleteItem()
})




