'use strict'
const getSliderItems = document.querySelectorAll('.image')
const arrSliderItems = [...getSliderItems] 



 const nextSlide = () =>{
    const index = arrSliderItems.findIndex((item) => item.classList[1] == 'active' )
     if(arrSliderItems[arrSliderItems.length - 1].classList[1] == 'active'){
        arrSliderItems[arrSliderItems.length - 1].classList[1].remove('active')
    }else 

    arrSliderItems[index].style.marginLeft = -(arrSliderItems[index].offsetWidth) + 'px'
    arrSliderItems[index].classList.remove('active')
    arrSliderItems[index + 1].classList.add('active')
} 

const previousSlide = () =>{
    const index = arrSliderItems.findIndex((item) => item.classList[1] == 'active' )
    arrSliderItems[index - 1].style.marginLeft = 0
    arrSliderItems[index].classList.remove('active')
    arrSliderItems[index - 1].classList.add('active')
}


const slickNext = document.querySelector('.next-arrow')
slickNext.addEventListener('click',nextSlide)
const slickPrevious = document.querySelector('.previous-arrow')
slickPrevious.addEventListener('click',previousSlide)
