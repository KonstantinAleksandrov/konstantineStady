'use strict'

document.addEventListener("DOMContentLoaded", () => {

  const loginInput = document.querySelector('input[name=login]')
  const checkboxInput = document.querySelector('input[name=areYouShure]')
  const form = document.querySelector('form')
  const button = document.querySelector('button')
  let loginText = '', checkValue = false

  loginInput.addEventListener('input', (e) => {
    const section = document.querySelector('section')
    loginText = e.target.value
    section.innerText = loginText + checkValue
  })

  checkboxInput.addEventListener('change', (e) => {
    const section = document.querySelector('section')
    checkValue = e.target.checked
    section.innerText = loginText + checkValue
  })

  loginInput.addEventListener("focus", (e) => {
    e.target.value = "Text text"
  })

  loginInput.addEventListener("blur", (e) => {
    const section = document.querySelector('section')
    const firstLetter = e.target.value[0]
    if(firstLetter !== firstLetter.toUpperCase()){
      section.innerHTML = "<i style='color:red'>There is an error</i>"
    }
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    let i = 0
    const object = {}
    while(e.target[i] && e.target[i].name){
      if(e.target[i].name === "areYouShure"){
        object[e.target[i].name] = e.target[i].checked
      } else {
        object[e.target[i].name] = e.target[i].value
      }

      i++
    }
    console.log(object)
  })

  button.addEventListener('click', (e) => {
    console.log(e)
  })

})

