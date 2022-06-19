'use strict'
let collums = new Map()
let arrStorge = []
let dragItem = null
let dragCard = null
let activeIndex = null
let columnDrop = null
let a = null
let list = null

const activadeColumButtons = () => {
  const contant = document.querySelector('.contant')
  const allcolums = [...contant.querySelectorAll('.collum-container')]
  if (allcolums.length) {
    allcolums.forEach(item => {
      const title = item.querySelector('.header-title').textContent
      const form = item.querySelector('form')

      const closeCollumCross = item.querySelector('.header-close')
      closeCollumCross.addEventListener('click', () => {
        collums.delete(title)
        item.remove()
        renderCollums()
        changeStorge()
      })

      const openFormButton = item.querySelector('.body__button-title')
      openFormButton.addEventListener('click', () => {
        openFormButton.style.display = 'none'
        form.style.display = 'block'
      })

      const crossCloseForm = item.querySelector('.form-footer__close')
      crossCloseForm.addEventListener('click', () => {
        form.querySelector('textarea').value = ''
        openFormButton.style.display = 'block'
        form.style.display = 'none'
      })

      const addNewCard = form.querySelector('.form-footer__add')
      addNewCard.addEventListener('click', () => {
        if (form.querySelector('textarea').value === '') {
          form.querySelector('textarea').value = ''
          openFormButton.style.display = 'block'
          form.style.display = 'none'
        } else {
          const card = {}
          card.text = form.querySelector('textarea').value
          collums.get(title).cardList.push(card)
          form.querySelector('textarea').value = ''
          openFormButton.style.display = 'block'
          form.style.display = 'none'
          renderCard(title, item.querySelector('.card-list'))
        }
      })
    })
  }
}

const createNewCollum = () => {
  const addNewCollumButtonContainer = document.querySelector('.addNewCollum')
  const addNewCollumButton = addNewCollumButtonContainer.querySelector('.body__button-title')
  const form = addNewCollumButtonContainer.querySelector('form')

  addNewCollumButton.addEventListener('click', (event) => {
    addNewCollumButton.style.display = 'none'
    form.style.display = 'block'
  })

  const crossCloseForm = addNewCollumButtonContainer.querySelector('.form-footer__close')
  crossCloseForm.addEventListener('click', () => {
    form.querySelector('textarea').value = ''
    addNewCollumButton.style.display = 'block'
    form.style.display = 'none'
  })

  const addCollum = addNewCollumButtonContainer.querySelector('.form-footer__add')
  addCollum.addEventListener('click', () => {
    const title = form.querySelector('textarea').value
    if (title === '' || Number(title)) {
      form.querySelector('textarea').value = ''
      addNewCollumButton.style.display = 'block'
      form.style.display = 'none'
    } else {
      collums.set(title, {cardList: [], order: collums.size})
      renderCollums()
      form.querySelector('textarea').value = ''
      addNewCollumButton.style.display = 'block'
      form.style.display = 'none'
    }
  })
}

const addNewCollum = (title) => {
  const contant = document.querySelector('.contant')
    const newCollum = document.createElement('div')
    newCollum.classList.add('collum-container')


    const collum = document.createElement('div')
    collum.classList.add('collum')
    collum.setAttribute('draggable', "true") 
    collum.dataset.title = title

      collum.addEventListener('dragstart', (event) => {
          dragItem = event.target.dataset.title
    })

      collum.addEventListener('dragover', (event) => {
      event.preventDefault()
    })

      collum.addEventListener('drop',()=> {
        if(dragItem){
          let temp = collums.get(dragItem).order
          let changeItem = collum.dataset.title
          collums.get(dragItem).order = collums.get(changeItem).order
          collums.get(changeItem).order = temp
          renderCollums()
        }
      })




    const collumHeader = document.createElement('div')
    collumHeader.classList.add('collum-header')

    const headerTitle = document.createElement('div')
    headerTitle.classList.add('header-title')
    headerTitle.textContent = title

    const headerClose = document.createElement('div')
    headerClose.classList.add('header-close')
    headerClose.classList.add('close-cross')

    const spanFirst = document.createElement('span')
    const spanSecond = document.createElement('span')

    const collumBody = document.createElement('div')
    collumBody.classList.add('collum-body')
    collumBody.addEventListener('mousedown', () => collum.removeAttribute('draggable'))
    document.body.addEventListener('mouseup', () => collum.setAttribute('draggable', "true")) 
    collumBody.addEventListener('drop',()=>{
      if(!collums.get(title).cardList.length){
        collums.get(title).cardList.push(dragCard)
        collums.get(a).cardList.splice(activeIndex,1)
        renderCard(title, cardList)
        renderCard(a, list)
      }
    })


    const cardList = document.createElement('ul')
    cardList.classList.add('card-list')
    renderCard(title, cardList)

    const bodyButtons = document.createElement('div')
    bodyButtons.classList.add('body__buttons')

    const bodyButtonTitle = document.createElement('div')
    bodyButtonTitle.classList.add('body__button-title')
    bodyButtonTitle.textContent = '+ Add another card'

    const bodyForm = document.createElement('form')
    bodyForm.classList.add('body__form')

    const textarea = document.createElement('textarea')
    textarea.placeholder = 'Enter a title for this card...'

    const formFooter = document.createElement('div')
    formFooter.classList.add('form-footer')

    const addOrClose = document.createElement('div')
    addOrClose.classList.add('addOrClose')

    const formFooterAdd = document.createElement('div')
    formFooterAdd.classList.add('form-footer__add')
    formFooterAdd.textContent = 'Add card'

    const formFooterClose = document.createElement('div')
    formFooterClose.classList.add('form-footer__close')
    formFooterClose.classList.add('close-cross')

    const spanThird = document.createElement('span')
    const spanFourth = document.createElement('span')

    const formFooterButton = document.createElement('div')
    formFooterButton.classList.add('form-footer__button')
    formFooterButton.textContent = '...'

    formFooterClose.append(spanThird)
    formFooterClose.append(spanFourth)
    addOrClose.append(formFooterAdd)
    addOrClose.append(formFooterClose)
    formFooter.append(addOrClose)
    formFooter.append(formFooterButton)
    bodyForm.append(textarea)
    bodyForm.append(formFooter)
    bodyButtons.append(bodyButtonTitle)
    bodyButtons.append(bodyForm)
    collumBody.append(cardList)
    collumBody.append(bodyButtons)

    headerClose.append(spanFirst)
    headerClose.append(spanSecond)
    collumHeader.append(headerTitle)
    collumHeader.append(headerClose)

    collum.append(collumHeader)
    collum.append(collumBody)
    newCollum.append(collum)

    contant.append(newCollum)
  activadeColumButtons()
}


const renderCollums = () => {
  const contant = document.querySelector('.contant')
  contant.innerHTML = ''
  const arr = []
  collums.forEach((item, key) => arr.push([key, item]))
  arr.sort((a, b) => a[1].order - b[1].order)
  arr.forEach((item) => addNewCollum(item[0]))
}

const renderCard = (columnName, ul) => {
  ul.innerHTML = ''
  collums.get(columnName).cardList.forEach(item => {
    createCard(item,ul,columnName)
  })
  changeStorge()
}

const createCard = (itemObj, ul,columnName) => {
  const li = document.createElement('li')
  li.setAttribute('draggable','true')

  li.classList.add('card-item')
  if (itemObj.image) {
    const itemImg = document.createElement('div')
    itemImg.classList.add('item-image')

    const img = document.createElement('img')
    img.src = itemObj.image
    itemImg.append(img)
    li.append(itemImg)
  }
  const text = document.createElement('div')
  text.classList.add('item-text')
  text.textContent = itemObj.text

  const cross = document.createElement('div')
  cross.classList.add('cross')
  cross.addEventListener('click',()=>{
    deleteCard(columnName,itemObj)
    renderCard(columnName,ul)
  })

  const spanFirst = document.createElement('span')
  const spanSecond = document.createElement('span')

  cross.append(spanFirst)
  cross.append(spanSecond)
  li.append(text)
  li.append(cross)
  ul.append(li)

  li.addEventListener('dragstart',()=>{
    dragCard = itemObj
    columnDrop = collums.get(columnName).cardList
    a = columnName
    list = ul
    activeIndex = columnDrop.findIndex((item)=>item.text == dragCard.text)
  })

  li.addEventListener('dragover', (event) => {
    event.preventDefault()
  })

  li.addEventListener('drop',()=>{
    let dropIndex = collums.get(columnName).cardList.findIndex((item)=>item.text == itemObj.text)
    let temp = columnDrop[activeIndex]
    columnDrop.splice(activeIndex,1)
    collums.get(columnName).cardList.splice(dropIndex + 1,0,temp)
    renderCard(a,list)
    renderCard(columnName,ul)
  })
}

const deleteCard = (name,card) =>{
 const cardNumber = collums.get(name).cardList.indexOf(card)
 collums.get(name).cardList.splice(cardNumber,1)
}

const changeStorge = () =>{
  arrStorge = []
  collums.forEach((i,key)=>{
    arrStorge.push([i,key])
  })
  
  window.localStorage.setItem('collums', JSON.stringify(arrStorge))
}

/* (function startPage(){
  let storage = JSON.parse(window.localStorage.getItem('collums'))
  if(storage){
    storage.forEach((item)=>{
      collums.set(item[1],item[0])
    })
  }
  renderCollums()
  createNewCollum()
})() */

const promis = new Promise((resolve,reject)=>{
  let storage = JSON.parse(window.localStorage.getItem('collums'))
  resolve(storage)
})
promis.then((boards)=>{
  if(boards){
    boards.forEach((item)=>{
      collums.set(item[1],item[0])
    })
  }
  renderCollums()
  createNewCollum()
})
