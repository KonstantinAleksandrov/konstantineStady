import Dragon from './images/Dragon.svg' // module
import './style.css'
class WorldName {
  #name

  constructor() {
    this.#name = ''
  }

  setName() {
    this.#name = prompt("Please write btn name")
  }

  getName() {
    return this.#name
  }
}

const myName = new WorldName()
myName.setName()

const btn = document.createElement('button')
btn.textContent = myName.getName() + "static text"

const img = document.createElement('img')
img.src = Dragon

const par = document.createElement('p')
par.innerText = 'Custom text!!!!!'

const root = document.querySelector('#root')
root.append(btn)
root.append(img)
root.append(par)