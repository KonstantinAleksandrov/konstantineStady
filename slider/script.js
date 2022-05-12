class Slider {
  constructor(countVisible, shiftCount, imagesAll){
    this.countVisible = countVisible
    this.shiftCount = shiftCount
    this.shift = 0
    this.imagesAll = imagesAll
    this.activeImages = this.imagesAll.filter((img, key) => key < this.countVisible)
  }

  render = () => {
    const sliderContainer = document.querySelector('section > div')
    sliderContainer.innerHTML = ''
    this.activeImages.map((img, key) => {
      const imgElement = document.createElement('div')
      imgElement.classList.add('image')
      imgElement.style.left = (key) * 400 + 'px'
      imgElement.style.backgroundImage = `url(${img})`
      sliderContainer.append(imgElement)
    })
  }

  nextSlide = () => {
    this.shift = this.shift + this.shiftCount
    this.activeImages = this.imagesAll.filter((img, key) => key > this.shift && key <= (this.countVisible + this.shift))
    this.render()
  }

  prevSlide = () => {
    this.shift = this.shift - this.shiftCount
  }
}

const mySlider = new Slider(2, 0, ["https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg", "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg", "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg", "https://static.remove.bg/remove-bg-web/0e54c692cee06c7cdf1bbe6015ddff9e88c6d03a/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"])

mySlider.render()

const leftArrow = document.querySelector('section > span:first-child')
const rightArrow = document.querySelector('section > span:last-child')

leftArrow.addEventListener('click', () => mySlider.prevSlide())
rightArrow.addEventListener('click', () => mySlider.nextSlide())
