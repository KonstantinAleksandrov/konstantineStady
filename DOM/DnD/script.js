'use strict'
const input = document.querySelector('input[name=login]')
const button = document.querySelector('button#launch')
const rocket = document.querySelector('div#rocket')
const landing = document.querySelector('div#landing')


rocket.addEventListener('dragstart', (e) => {
  console.log("start", e)
})

rocket.addEventListener('drag', (e) => {
  //console.log("move", e)
})

rocket.addEventListener('dragover', (e) => {
  //console.log("move over", e)
})


rocket.addEventListener('dragenter', (e) => {
  console.log("enter", e)
})


rocket.addEventListener('dragend', (e) => {
  console.log("end", e)
})


rocket.addEventListener('dragleave', (e) => {
  console.log("leave", e)
})


landing.addEventListener('dragover', (e) => {
  e.preventDefault()
  console.log("drag over", e)
})

landing.addEventListener('drop', (e) => {
  e.preventDefault()
  console.log("drop", e)
})
