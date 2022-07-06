import './style/style.scss'
import './style/reset.scss'
import {renderList,counterItemsInCard} from './modules/catalog' 

let productList = new Map()
let cardList = new Map()
productList.set('Milk',{amount : ''})
productList.set('Bread',{amount : ''})
productList.set('Ham',{amount : ''})
productList.set('Beans',{amount : ''})
productList.set('Chicken',{amount : ''})


const drawProductCatalog = () =>{
  const ulOfProduct  = document.querySelector('.listProduct')
  renderList(ulOfProduct,productList)
}
drawProductCatalog()


const btnAddNewProduct = document.querySelector('.addNewProduct')
btnAddNewProduct.addEventListener('click', () => {
  const inputAdd = document.querySelector('.inputAdd')
  if (inputAdd.value) {
    productList.set(inputAdd.value,{amount : ''})
    drawProductCatalog()
  }
  inputAdd.value = ''
})

const btnAddToCard = document.querySelector('.addCard')
btnAddToCard.addEventListener('click',()=>{
  const readyList = document.querySelector('.readyList')
  productList.forEach((item,key)=>{
    if(item.amount){
      cardList.set(key,{amount :item.amount})
    }
  })
  renderList(readyList,cardList)
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
  renderList(readyList,cardList)
  counterItemsInCard(cardList)
})

console.log(2)