import Dragon from './images/Dragon.svg' // module

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
btn.textContent = myName.getName()

const img = document.createElement('img')
img.src = Dragon

const root = document.querySelector('#root')
root.append(btn)
root.append(img)