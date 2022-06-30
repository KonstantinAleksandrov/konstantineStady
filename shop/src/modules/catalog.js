export const drawProductCatalog = (list, arr) =>{
  list.innerHTML = ''
  arr.forEach((item, key) => {
    const li = document.createElement('li')
    const input = document.createElement('input')
    input.type = 'number'
    input.name = Object.keys(item)
    input.value = item[Object.keys(item)]
    input.addEventListener('blur',()=>{
      item[Object.keys(item)] = input.value
    })

    const span = document.createElement('span')
    span.textContent = Object.keys(item)
    li.append(input)
    li.append(span)
    list.append(li)
  })
}

export const addNewProductInArr = (nameProduct, cb) => { // TODO change
  const newProduct = {
    [nameProduct] : '',
  }

  cb(newProduct)
}


