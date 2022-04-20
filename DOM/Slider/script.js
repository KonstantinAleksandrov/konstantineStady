'use strict'
const getSliderItems = document.querySelectorAll('.image')
const arrSliderItems = [...getSliderItems]
const imageList = ["./image/1.jpg", "image/2.jpg", "image/3.jpg", "image/4.jpg"]
let activeIndexImage = 1

const sliderRender = (index, isActive) => {

    const sliderBox = document.querySelector('.slider-box')

    const newImgContainer = document.createElement('div')
    newImgContainer.classList.add('image')
    if(isActive) {
      let position = 0
      const intervalId = setInterval(() => {
        if(position >= 600){
          clearInterval(intervalId)
        } else {
          position = position + 50
          newImgContainer.style.transform = `translate(-${position}px, 0)` // TODO при скроле влево направление скрола меняется на положительное
        }
      }, 50)
      newImgContainer.classList.add('active') // transform: translate(-600px, 0);
    }
    const newImgEl = document.createElement('img')
    newImgEl.setAttribute('src', imageList[index])
    newImgEl.setAttribute('alt', "image")

    newImgContainer.append(newImgEl)
    sliderBox.append(newImgContainer)
}


const previousSlide = () => {
  const sliderBox = document.querySelector('.slider-box')
  sliderBox.querySelectorAll('.image').forEach(el => el.remove())

  const prevImg = activeIndexImage

  if(activeIndexImage === 0) {
    activeIndexImage = imageList.length -1
  } else {
    activeIndexImage--
  }

  sliderRender(prevImg, false)
  sliderRender(activeIndexImage, true)
}

const nextSlide = () => {
  const sliderBox = document.querySelector('.slider-box')
  sliderBox.querySelectorAll('.image').forEach(el => el.remove())

  const prevImg = activeIndexImage
  if(activeIndexImage === imageList.length - 1) {
    activeIndexImage = 0
  } else {
    activeIndexImage++
  }
  sliderRender(prevImg, false)
  sliderRender(activeIndexImage, true)
}




// const nextSlide = () => {
//    const index = arrSliderItems.findIndex((item) => item.classList[1] == 'active' )
//    console.log(index)
//    const arrayLength = arrSliderItems.length - 1
//    const modify = index === arrayLength ? 0 : 1
//
//    if(arrSliderItems[arrayLength].classList[1] === 'active'){
//      return
//   }
//
//   arrSliderItems[index].style.marginLeft = - (arrSliderItems[index].offsetWidth) + 'px'
//   arrSliderItems[index].classList.remove('active')
//   arrSliderItems[index + modify].classList.add('active')
// }
//
// const previousSlide = () =>{
//     const index = arrSliderItems.findIndex((item) => item.classList[1] == 'active' )
//     const modify = index === 0 ? 0 : 1
//     arrSliderItems[index - modify].style.marginLeft = '0px'
//     arrSliderItems[index].classList.remove('active')
//     arrSliderItems[index - modify].classList.add('active')
// }


const slickNext = document.querySelector('.next-arrow')
slickNext.addEventListener('click', nextSlide)

const slickPrevious = document.querySelector('.previous-arrow')
slickPrevious.addEventListener('click', previousSlide)


document.addEventListener('DOMContentLoaded', () => sliderRender(activeIndexImage, false))