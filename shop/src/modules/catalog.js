//import axios from 'axios'

export const renderList = (list,data,createInput) =>{
  list.innerHTML = ''
  data.forEach((item,key)=>{
    const li = document.createElement('li')
    if(createInput){
      const input = document.createElement('input')
      input.addEventListener('blur',()=>{
        item.amount = input.value
      })
      input.type = 'number'
      input.name = key
      input.value = item.amount
      li.append(input)
    }
    const span = document.createElement('span')
    span.textContent = key
    li.append(span)
    list.append(li)
  })
}

export const counterItemsInCard = (data) =>{
  const counter = document.querySelector('.counterCardItems')
  let temp = 0
  data.forEach((item)=>{
    temp += +item.amount
  })
  counter.textContent = temp
}


/* export const getCatalogItems = (cb) => {
  axios.get('http://127.0.0.1:900/catalog')
    .then(({data}) => {
      cb(data)
    })
} */

export const getCatalogItems = (callBack) =>{
  fetch(`http://127.0.0.1:${process.env.BACKEND_PORT}/catalog`)
  .then(response => response.text())
  .then(result=>{
    callBack(JSON.parse(result))
  })
}
