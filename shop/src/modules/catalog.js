
export const renderList = (list,data) =>{
  list.innerHTML = ''
  data.forEach((item,key)=>{
    const li = document.createElement('li')
    const input = document.createElement('input')
    input.addEventListener('blur',()=>{
      item.amount = input.value
    })
    input.type = 'number'
    input.name = key
    input.value = item.amount
    const span = document.createElement('span')
    span.textContent = key
    li.append(input)
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
