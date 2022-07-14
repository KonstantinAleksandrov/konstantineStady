import './style/style.scss'
import {renderList,counterItemsInCard, getCatalogItems/* ,addProductInCard */} from './modules/catalog'
import {renderNavMenu} from './modules/common'

let productList = new Map()
let cardList = new Map()
let tempList = []

/* const addProductInCard = (counter) =>{
  if(counter == tempList.length){
    return
  }else{
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "name": tempList[counter].name,
      'amount': tempList[counter].amount
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    return fetch(`http://127.0.0.1:${process.env.BACKEND_PORT}/card`, requestOptions)
    .then(()=>{
      addProductInCard(counter + 1)
    })
  }
} */

getCatalogItems((catalog)=>{
  Object.entries(catalog).forEach((item)=>{
    productList.set(item[0],{...item[1],amount : ''})
  })
  drawProductCatalog()
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
 btnAddToCard.addEventListener('click',()=>{
  const readyList = document.querySelector('.readyList')
   /* productList.forEach((item)=>{
    if(item.amount && tempList.includes(item)){
      tempList[tempList.indexOf(item)].amount = item.amount
    }else if (item.amount && !tempList.includes(item)){
      tempList.push(item)
    }
  })
  addProductInCard(0).then((data)=>{
    console.log(data)
  })  */
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