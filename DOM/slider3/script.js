'use strict'
const arrItems = [...document.querySelectorAll('.slider-item')]
const slider = document.querySelector('.slider')
const sliderContainer = document.querySelector('.slider-container')
let counter = 0
const arrDots = []

const createDots = () =>{
    const dots = document.createElement('div')
    dots.classList.add('dots')
    for(let i = 0;i < arrItems.length;i++){
        let dot = document.createElement('span')
        dot.style.transition = 'all 0.5s ease 0s'
        arrDots.push(dot)
        dots.append(dot)
    }
    slider.append(dots)
    arrDots[0].style.backgroundColor = 'black';
}

const swipeSlide = () =>{
    if(counter > arrItems.length - 1){
        counter = 0 
    }else if(counter < 0){
        counter = arrItems.length - 1
    }
    sliderContainer.style.right = counter * slider.offsetWidth  + 'px' 
     arrDots.forEach((item)=>{
        item.style.backgroundColor = 'lightgray'
    })
    arrDots[counter].style.backgroundColor = 'black';
}
const swipeToDot = () =>{
    arrDots.forEach((item,index)=>{
        item.addEventListener('click',()=>{
            counter = index
            swipeSlide()
        })
    })
}


createDots()
swipeToDot()

const nextSlide = document.querySelector('.next-arrow')
nextSlide.addEventListener('click',()=>{
    counter++
    swipeSlide()
})

const previousSlide = document.querySelector('.previous-arrow')
previousSlide.addEventListener('click',()=>{
    counter--
    swipeSlide()
})




