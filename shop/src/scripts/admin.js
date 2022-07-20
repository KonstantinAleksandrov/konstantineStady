import '../style/admin.scss'
import {productList, drawProductCatalog, getCatalogItems, renderNavMenu} from '../modules/utils'

getCatalogItems((catalog) => {
  Object.entries(catalog).forEach((item) => {
    productList.set(item[0], item[1])
  })
  drawProductCatalog(false, true)
})


  const btnAddNewProduct = document.querySelector('.addNewProduct')
  btnAddNewProduct.addEventListener('click',()=>{
    const getProductName = document.querySelector('.inputAdd')
    const getProductPrice = document.querySelector('.addPrice')
    const btnAddImage = document.querySelector('.addimg')
    let img = btnAddImage.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(img)
    reader.addEventListener('load',()=>{
      if(getProductName.value && !Number(getProductName.value) && getProductName.value != 0){
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
      }else{
          getProductName.value = 'incorrect name'
          return
      }
    })
 })
 renderNavMenu() 

 /* const btnAddImage = document.querySelector('.addimg')
 btnAddImage.addEventListener('change',()=>{
  let img = btnAddImage.files[0]
  let reader = new FileReader()
  reader.readAsDataURL(img)
  reader.addEventListener('load',()=>{
    console.log(reader.result)
  })
 }) */


