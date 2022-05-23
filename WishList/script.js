fetch('products.json')
  .then(res => res.json())
  .then(json => renderProducts(json))

/* let wishList = []
let fullAmount = 0

const renderWishList = (wishList) => {
  const wishListContainer = document.querySelector('.card-list')
  wishListContainer.innerHTML = ''
  wishList.forEach( wish => {
    const newWish = document.createElement('div')
    newWish.textContent = wish.name
    wishListContainer.append(newWish)
  })
}

const addProduct = (event, product) => {
  if(wishList.includes(product)) {
    wishList = wishList.filter(f => f.name !== product.name)
    event.target.textContent = "Добавить"
  } else {
    wishList = [...wishList, product]
    event.target.textContent = "В списке"
  }
  renderWishList(wishList)
}

const renderProducts = (productList) => {

  const listContainer = document.querySelector('.list-container')
  Object.values(productList).forEach(product => {
    const item = document.createElement('div')
    item.classList.add('item')
    const img = document.createElement('img')
    img.setAttribute('src', product.cover)
    const button = document.createElement('button')
    button.textContent = "Добавить"
    button.addEventListener('click', (e) => addProduct(e, product))

    const name = document.createElement('div')
    name.textContent = product.name
    const price = document.createElement('div')
    price.textContent = `${product.price} руб.`
    item.append(img, button, name, price)
    listContainer.append(item)
  })
} */

let wishList = [] // TODO сохранить эти данные в localstorage
let dragElement = null
let dragTarget = null
let allprice = 0 // TODO сохранить эти данные в cookies
let myStorage = window.localStorage


const renderProducts = (gameList)=>{
  const listContainer = document.querySelector('.list-container')

  Object.values(gameList).forEach((game)=>{
    const item = document.createElement('div')
    item.classList.add('item')
    item.setAttribute('draggable',true)
    item.addEventListener('dragstart',(event)=>{
      dragElement = game
      dragTarget = event?.path.find(f => f.className === 'item').querySelector('.button')
    })

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const img = document.createElement('img')
    img.src = game.cover

    const button = document.createElement('div')
    button.classList.add('button')
    button.textContent = 'Добавить'
    button.addEventListener('click',(event)=>addGameInWishList(event.target, game))

    const name = document.createElement('div')
    name.classList.add('name')
    name.textContent = game.name

    const price = document.createElement('div')
    price.classList.add('price')
    price.textContent = `${game.price} руб.`

    imgContainer.append(img)
    item.append(imgContainer)
    item.append(button)
    item.append(name)
    item.append(price)
    listContainer.append(item)
    if(Object.values(myStorage).find(f=> f === game.name)){
      addGameInWishList(button,game)
    }
  })
}

const addGameInWishList = (event, game) =>{
  if(wishList.includes(game) || wishList.includes(game.name)){
    wishList = wishList.filter((f)=> f.name !== game.name && f !== game.name)
    event.textContent = 'Добавить'
    event.style.color = 'rgb(0,206,255)'
    myStorage.removeItem(game.name)
  }else{
    wishList = [...wishList,game]
    event.textContent = 'В списке'
    event.style.color = 'rgb(8,194,119)' 
    myStorage.setItem(game.name,game.name) 
  }
  createCardListItem()
}



const createCardListItem = () =>{
  const cardList = document.querySelector('.card-list')
  cardList.innerHTML = ''
  wishList.forEach((item)=>{
    const li = document.createElement('li')
    if(item.name){
      li.textContent = item.name
    }else{
      li.textContent = item
    }
    cardList.append(li)

    const closeCross = document.createElement('div')
    closeCross.classList.add('closeCross')
    closeCross.addEventListener('click',(()=>deleteCardListItem(item)))

    const firsSpan = document.createElement('span')
    const secondSpan = document.createElement('span')

    li.append(closeCross)
    closeCross.append(firsSpan)
    closeCross.append(secondSpan)
  })

  
  allprice = wishList.reduce((sum,item)=>{
    if(!item.price){
      item.price = 0
    }
     return sum + item.price
  } ,0)
  const sum = document.querySelector('.sum > span')
  sum.textContent = allprice
  document.cookie = encodeURIComponent('sum') + '=' + encodeURIComponent(allprice)

  const clearButton = document.querySelector('.clear')
  if(wishList.length && !clearButton){
    clearAll()
  }else if(!wishList.length){
    clearButton.remove()
  }
}

const deleteCardListItem = (item) => {
  wishList = wishList.filter((f)=> f.name !== item.name)
  const allGames = [...document.querySelectorAll('.name')]
  myStorage.removeItem(item.name)
  allGames.forEach((game)=>{
    if(game.textContent === item.name){
     game.previousElementSibling.style.color = 'rgb(0,206,255)'
     game.previousElementSibling.textContent = 'Добавить'
    }
  })
  createCardListItem()
}

const clearAll = () =>{
  const clearButton = document.createElement('div')
  const card = document.querySelector('.card')

  clearButton.classList.add('clear')
  clearButton.textContent = 'Очистить список'
  clearButton.addEventListener('click',()=>{
    const allButtons = [...document.querySelectorAll('.button')]

    wishList = []
    createCardListItem()
    allButtons.forEach((game)=>{
      game.style.color = 'rgb(0,206,255)'
      game.textContent = 'Добавить'
      myStorage.clear()
      clearButton.remove()
    })
  })
  card.append(clearButton)
}


const card = document.querySelector('.card')

card.addEventListener('dragover',(event) => {
  event.preventDefault()
})

  card.addEventListener('drop',(event) => {
    dragTarget && dragElement && addGameInWishList(dragTarget, dragElement)
    dragElement = null
    dragTarget = null
})

createCookie = () =>{
  const sum = document.querySelector('.sum > span')
  if(!sum.textContent){
    let cookies = document.cookie.split('=')
    sum.textContent = cookies[1]
  }
}
 createCookie() 
