'use strict'
const imagesArrays = ["https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg", "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg", "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg", "https://static.remove.bg/remove-bg-web/0e54c692cee06c7cdf1bbe6015ddff9e88c6d03a/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"]
let imgPosition = 0
const timer = 500

const onTranslateFade = (imageElement, position) => {
  const cloneElement = imageElement.cloneNode(true)
  const backgroundPlate = document.createElement('aside')
 
  cloneElement.setAttribute('class', 'clone-img')
  imageElement.after(cloneElement)
  imageElement.after(backgroundPlate)
  const leftPosition = position < imgPosition ? '-420px' : '420px'
  
  requestAnimationFrame(() => {
    cloneElement.style.left = leftPosition
    cloneElement.style.zIndex = '2'
    setTimeout(() => {
      backgroundPlate.remove()
      cloneElement.remove()
    }, timer)
    
  })
}

const onTranslateView = (imageElement, position) => {
  const cloneElement = imageElement.cloneNode()
  cloneElement.setAttribute('class', 'clone-img')
  console.log(position, imgPosition)
  const leftPosition = position < imgPosition ? '-420px' : '420px'
  // cloneElement.style.opacity = 0
  cloneElement.style.left = leftPosition
  imageElement.after(cloneElement)
  cloneElement.style.zIndex = '2'
  requestAnimationFrame(() => {
    cloneElement.style.left = 0

    setTimeout(() => {
      cloneElement.remove()
    }, timer)

  })
}


const changeImage = (position) => {
  const imageElement = document.querySelector('section > div')
  const oldPosition = imgPosition
 
  onTranslateFade(imageElement, position)
  
  
  // BEGIN Circular image
  if(position > (imagesArrays.length - 1)) {
    imageElement.style.backgroundImage = `url("${imagesArrays[0]}")`
    imgPosition = 0
    onTranslateView(imageElement, -1)
    return 
  } else if(position < 0) {
    const lastEl = imagesArrays.length - 1
    imageElement.style.backgroundImage = `url("${imagesArrays[lastEl]}")`
    imgPosition = lastEl
    onTranslateView(imageElement, imgPosition)
    return
  }
  // END 
  
  
  
  imagesArrays.map((item, key) => {
    if(key === position) {
      imgPosition = position
      imageElement.style.backgroundImage = `url("${item}")`
    }
  })
  
  onTranslateView(imageElement, oldPosition)
} 

const leftArrow = document.querySelector('section > span:first-child')
const rightArrow = document.querySelector('section > span:last-child')

leftArrow.addEventListener('click', () => changeImage(imgPosition - 1))
rightArrow.addEventListener('click', () => changeImage(imgPosition + 1))




