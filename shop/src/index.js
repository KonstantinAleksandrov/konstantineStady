import './style/main.scss'
import {renderListTwo,productList,drawProductCatalog,renderNavMenu,getCatalogItems,counterCardItems} from './modules/utils'

getCatalogItems((catalog)=>{
  Object.entries(catalog).forEach((item)=>{
    productList.set(item[0],item[1])
  })
  const ulOfProduct = document.querySelector('.listProduct')
  renderListTwo(ulOfProduct,productList)
})

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

const btnAddToCard = document.querySelector('.addCard')

btnAddToCard.addEventListener('click', () => {
  const tempList = []
  productList.forEach((item) => {
    if (item.amount && tempList.includes(item)) {
      tempList[tempList.indexOf(item)].amount = item.amount
    } else if (item.amount && !tempList.includes(item)) {
      tempList.push(item)
    }
  })
  addProductInCard(tempList)
  .then(response => response.json())
  .then((result) =>{
    /* window.location.replace('/card.html') */
    const counterProductInCard = document.querySelector('.counterCardItems')
    counterProductInCard.textContent = 0
    result.forEach((item)=>{
    counterProductInCard.textContent = +counterProductInCard.textContent + +item.amount
    })
  })
})

const openCard = document.querySelector('.openCard')
openCard.addEventListener('click',()=>{
  window.location.replace('/card.html')
})
drawProductCatalog(true,false)
counterCardItems()
renderNavMenu()
