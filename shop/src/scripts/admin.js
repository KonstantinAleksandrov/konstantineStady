import '../style/admin.scss'
import {productList, drawProductCatalog, getCatalogItems, renderNavMenu} from '../modules/utils'

getCatalogItems((catalog) => {
  Object.entries(catalog).forEach((item) => {
    productList.set(item[0], item[1])
  })
  drawProductCatalog(false, true)
})

const btnAddNewProduct = document.querySelector('.form')

btnAddNewProduct.addEventListener('submit', (e) => {
  e.preventDefault()

  const getProductName = document.querySelector('.inputAdd')
  const getProductPrice = document.querySelector('.addPrice')
  const getProductImage = document.querySelector('.addImage')

  if (getProductName.value && !Number(getProductName.value) && getProductName.value != 0) {

    const reader = new FileReader()
    reader.onloadend = () => {
      // const img = document.querySelector('.preview')
      // console.log(reader.result)
      // img.setAttribute('src', reader.result)

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        "name": getProductName.value,
        "price": getProductPrice.value,
        "gallery": reader.result
      });

      let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(`http://127.0.0.1:${process.env.BACKEND_PORT}/catalog`, requestOptions)
        .then(() => {
          getCatalogItems((catalog) => {
            Object.entries(catalog).forEach((item) => {
              productList.set(item[0], item[1])
            })
            drawProductCatalog(false, true)
          })
        })
        .then(() => {
          getProductName.value = ''
          getProductPrice.value = ''
        })
        .catch(error => console.log('error', error))
    }

    reader.readAsDataURL(e.path[0][2].files[0]) // TODO сделать цикл

  } else {
    getProductName.value = 'incorrect name'
  }
  return false
})
renderNavMenu()
