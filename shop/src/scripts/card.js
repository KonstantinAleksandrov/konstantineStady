import '../style/style.scss'
import '../style/card.scss'
import {renderNavMenu,renderList} from '../modules/catalog';

renderNavMenu()



const getCardItems = (callBack) =>{
    fetch(`http://127.0.0.1:${process.env.BACKEND_PORT}/card`)
      .then(response => response.json())
      .then(result => {
        callBack(result)
      })
  }

  getCardItems((data)=>{
    const cardList = document.querySelector('.readyList')
    if(data.length){
        const spanAllAmount = document.createElement('span')
        const spanSum = document.createElement('span')
        spanSum.textContent = '0'
        const btnBuy = document.createElement('div')
        btnBuy.classList.add('btn')
        btnBuy.textContent = 'buy now'
    

        const buyForm = document.querySelector('.buyForm')
        buyForm.append(btnBuy)
        buyForm.append(spanAllAmount)
        buyForm.append(spanSum)

        data.forEach((item)=> {
            const li = document.createElement('li')
            li.classList.add('cardItem')
            const spanName = document.createElement('span')
            spanName.textContent = item.name
            const spanAmount = document.createElement('span')
            spanAmount.textContent = `${item.amount}`
            const spanPrice = document.createElement('span')
            spanPrice.textContent = item.price * item.amount + '$'

            spanSum.textContent = parseFloat(spanSum.textContent) + parseFloat(spanPrice.textContent)
            spanAllAmount.textContent = +spanAllAmount.textContent + +item.amount
    
            li.append(spanName)
            li.append(spanAmount)
            li.append(spanPrice)
            cardList.append(li)
        })

    }
  })