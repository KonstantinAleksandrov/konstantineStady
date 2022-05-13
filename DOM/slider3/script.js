'use strict'
class CreateSlider {
    constructor(fullItems,mainBlock,itemsContainer,next,previous) {
        this.arrItems = [...fullItems] 
        this.slider = mainBlock
        this.sliderContainer = itemsContainer
        this.nextSlide = next
        this.previousSlide = previous
        this.counter = 0
        this.arrDots = []
    }

    createDots = () =>{
        const dots = document.createElement('div')
        dots.classList.add('dots')
        for(let i = 0;i < this.arrItems.length;i++){
            let dot = document.createElement('span')
            dot.style.transition = 'all 0.5s ease 0s'
            this.arrDots.push(dot)
            dots.append(dot)
        }
        this.slider.append(dots)
        this.arrDots[0].style.backgroundColor = 'black';
    }
    
    swipeSlide = () =>{
        if(this.counter > this.arrItems.length - 1){
            this.counter = 0 
        }else if(this.counter < 0){
            this.counter = this.arrItems.length - 1
        }
        this.sliderContainer.style.right = this.counter * this.slider.offsetWidth  + 'px' 
         this.arrDots.forEach((item)=>{
            item.style.backgroundColor = 'lightgray'
        })
        this.arrDots[this.counter].style.backgroundColor = 'black';
    }

    swipeToDot = () =>{
        this.arrDots.forEach((item,index)=>{
            item.addEventListener('click',()=>{
                this.counter = index
                this.swipeSlide()
            })
        })
    }

    swipeNext = () =>{
        this.nextSlide.addEventListener('click',()=>{
            this.counter++
            this.swipeSlide()
        })
    }

    swipePrevious = () =>{
        this.previousSlide.addEventListener('click',()=>{
            this.counter--
            this.swipeSlide()
        })
    }
    sliderStart = () =>{
        this.createDots()
        this.swipeToDot()
        this.swipeNext()
        this.swipePrevious()
    }
}

const mySlider = new CreateSlider(
    document.querySelectorAll('.slider-item'),
    document.querySelector('.slider'),
    document.querySelector('.slider-container'),
    document.querySelector('.next-arrow'),
    document.querySelector('.previous-arrow')
)
mySlider.sliderStart()




