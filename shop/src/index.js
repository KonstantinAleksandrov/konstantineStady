import './style/style.scss'
import './style/reset.scss'
import {drawProductCatalog, addNewProductInArr} from './modules/catalog'

let buyProductsArr = window.localStorage.getItem('buyProductsArr') || [
    {
        Milk: 0 
    },
    {
        Bread: 0 
    },
    {
        Ham: 0 
    },
    {
        Beans: 0 
    },
    {
        Chicken: 0 
    },

]
let cardArr = window.localStorage.getItem('cardArr') || []
let counter = window.localStorage.getItem('counter') || 0;

// const addNewProductInArr = (nameProduct) => {
//   const newProduct = {
//     [nameProduct]: '',
//   }
//   buyProductsArr.push(newProduct)
// }

(function () { // TODO change
  const buyList = document.querySelector('.listProduct')
  let listItems = [...buyList.querySelectorAll('li')]
  listItems.forEach((item) => {
    const name = item.querySelector('span').textContent
    addNewProductInArr(name, (newItem) => {
      buyProductsArr = [...buyProductsArr, newItem]
      console.log(buyProductsArr)
      drawProductCatalog(buyList, buyProductsArr)
    })
    //[name] : item.querySelector('input').value значение обьекта для localStorage
  })

})()


const renderCountItems = () => {
  const counterCardItems = document.querySelector('.counterCardItems')
  counterCardItems.textContent = counter
}

const btnAddNewProduct = document.querySelector('.addNewProduct')

btnAddNewProduct.addEventListener('click', () => {
  const buyList = document.querySelector('.listProduct')
  const inputAdd = document.querySelector('.inputAdd')
  if (inputAdd.value) {
    addNewProductInArr(inputAdd.value, (newItem) => {

      buyProductsArr = [...buyProductsArr, newItem]
      console.log(buyProductsArr)
      drawProductCatalog(buyList, buyProductsArr)
      inputAdd.value = ''
    })

  }
})

const btnAddToCard = document.querySelector('.addCard')

btnAddToCard.addEventListener('click', () => {
  const readyList = document.querySelector('.readyList')
  cardArr = []
  counter = 0
  buyProductsArr.forEach((item) => { // TODO change
    if (item[Object.keys(item)]) {
      cardArr.push(item)
      drawProductCatalog(readyList, cardArr)
      if (+item[Object.keys(item)]) {
        counter += +item[Object.keys(item)]
      }
      renderCountItems()
    }
  })
})

const btnClearCard = document.querySelector('.card-header__clearCard')
btnClearCard.addEventListener('click', () => {
  const readyList = document.querySelector('.readyList')
  cardArr = []
  counter = 0
  drawProductCatalog(readyList, cardArr)
  renderCountItems()
})

const btnOpenCard = document.querySelector('.openCard')
btnOpenCard.addEventListener('click', () => {
  const card = document.querySelector('.card')
  card.classList.toggle('_activeCard')
})

