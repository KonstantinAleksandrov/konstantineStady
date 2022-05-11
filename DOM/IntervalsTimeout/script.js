'use strict'
const input = document.querySelector('input[name=login]')
const button = document.querySelector('button#launch')
const rocket = document.querySelector('div#rocket')
const landingZone = document.querySelector('div#landing')

let string = ''
let timer = null

let isDrag = false
let insideY = 0
let insideX = 0

input.addEventListener('input', (event) => {
  string = event.target.value
  clearTimeout(timer)
  timer = setTimeout(() => {
    const loginEl = document.querySelector('div#login')
    loginEl.textContent = string
  }, 1500)
})

// button.addEventListener('click', () => {
//   let bottom = 20;
//   let left = 300;
//   const rocket = document.querySelector('div#rocket')
//   const intervalId = setInterval(() => {
//     bottom = bottom + 2
//     left++
//     rocket.style.bottom = bottom + 'px'
//     rocket.style.left = left + 'px'
//   }, 15)
//
//   setTimeout(() => {
//     clearInterval(intervalId)
//   }, 5000)
//
// })


button.addEventListener('click', () => {
  let bottom = 20;
  let left = 300;
  window.requestAnimationFrame(function rocketLaunch(){
    bottom = bottom + 2
    left++
    rocket.style.bottom = bottom + 'px'
    rocket.style.left = left + 'px'

    if(bottom < 1200){
      window.requestAnimationFrame(rocketLaunch)
    }
  })
})

rocket.addEventListener('mousedown', (e) => {
  isDrag = true
  insideY = e.offsetY
  insideX = e.offsetX
})

document.body.addEventListener('mousemove', (e) => {
  if(isDrag) {
    rocket.style.top = (e.clientY - insideY) + 'px'
    rocket.style.left = (e.clientX - insideX) + 'px'
  }
})

rocket.addEventListener('mouseup', (e) => {
  const rect = landingZone.getBoundingClientRect()
  const bottom = rect.top + rect.height
  const top = rect.top
  const left = rect.left
  const right = rect.left + rect.width

  if(e.clientY > top && e.clientY < bottom && e.clientX > left && e.clientX < right){
    alert("Congratulation!")
  }

  isDrag = false
  insideY = 0
  insideX = 0
})