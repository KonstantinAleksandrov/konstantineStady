'use strict'
const input = document.querySelector('input[name=login]')
const button = document.querySelector('button#launch')
const rocket = document.querySelector('div#rocket')


rocket.addEventListener('dragstart', (e) => {
  console.log(e)
})