import './style/style.scss'
import {renderList,counterItemsInCard, getCatalogItems} from './modules/catalog'
import {renderNavMenu} from './modules/common'

let productList = new Map()
let cardList = new Map()

getCatalogItems((catalog)=>{
  Object.entries(catalog).forEach((item)=>{
    productList.set(item[0],{...item[1],amount : ''})
  })
  drawProductCatalog(productList)
})

const drawProductCatalog = () =>{
  const ulOfProduct  = document.querySelector('.listProduct')
  renderList(ulOfProduct,productList,true)
}

const btnAddToCard = document.querySelector('.addCard')
btnAddToCard.addEventListener('click',()=>{
  const readyList = document.querySelector('.readyList')
  productList.forEach((item,key)=>{
    if(item.amount){
      cardList.set(key,{amount :item.amount})
    }
  })
  renderList(readyList,cardList,true)
  counterItemsInCard(cardList)
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
  renderList(readyList,cardList,true)
  counterItemsInCard(cardList)
})

renderNavMenu()