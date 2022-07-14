import './style/style.scss'
import {renderList, counterItemsInCard, getCatalogItems/* ,addProductInCard */} from './modules/catalog'
import {renderNavMenu} from './modules/common'

let productList = new Map()
let cardList = new Map()

const addProductInCard = (list) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify(list);

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  };

  return fetch(`http://127.0.0.1:${process.env.BACKEND_PORT}/card`, requestOptions)
}

getCatalogItems((catalog) => {
  Object.entries(catalog).forEach((item) => {
    productList.set(item[0], {...item[1], amount: ''})
  })
  drawProductCatalog()
})

const drawProductCatalog = () => {
  const ulOfProduct = document.querySelector('.listProduct')
  renderList(ulOfProduct, productList, true)
}

const btnAddToCard = document.querySelector('.addCard')

btnAddToCard.addEventListener('click', () => {
  const readyList = document.querySelector('.readyList')
  const tempList = []
  productList.forEach((item) => {
    if (item.amount && tempList.includes(item)) {
      tempList[tempList.indexOf(item)].amount = item.amount
    } else if (item.amount && !tempList.includes(item)) {
      tempList.push(item)
    }
  })

  addProductInCard(tempList).then(() => window.location.replace('/card.html'))
})

const btnOpenCard = document.querySelector('.openCard')
btnOpenCard.addEventListener('click', () => {
  const card = document.querySelector('.card')
  card.classList.toggle('_activeCard')
})

const btnClearCard = document.querySelector('.card-header__clearCard')
btnClearCard.addEventListener('click', () => {
  const readyList = document.querySelector('.readyList')
  cardList.clear()
  renderList(readyList, cardList, true)
  counterItemsInCard(cardList)
})

renderNavMenu()