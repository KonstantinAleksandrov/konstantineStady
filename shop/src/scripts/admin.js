
import '../style/admin.scss'
import {renderList,getCatalogItems} from '../modules/catalog'
import {renderNavMenu} from '../modules/common'

let productList = new Map()
  const drawProductCatalog = () =>{
    const ulOfProduct  = document.querySelector('.listProduct')
    renderList(ulOfProduct,productList,false)
  }
  getCatalogItems((catalog)=>{
    Object.entries(catalog).forEach((item)=>{
      productList.set(item[0],item[1])
    })
    drawProductCatalog()
  })

  const btnAddNewProduct = document.querySelector('.addNewProduct')
  btnAddNewProduct.addEventListener('click',()=>{
    const getProductName = document.querySelector('.inputAdd')
    if(getProductName.value && !Number(getProductName.value) && getProductName.value != 0){
            let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json"); 

        let raw = JSON.stringify({
            "name": getProductName.value
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`http://127.0.0.1:${process.env.BACKEND_PORT}/catalog`, requestOptions)
        .then(()=>{
            getCatalogItems((catalog)=>{
                Object.entries(catalog).forEach((item)=>{
                  productList.set(item[0],item[1])
                })
                drawProductCatalog()
            })
        })
        .then(()=>getProductName.value = '')
        .catch(error => console.log('error', error))
    }else{
        getProductName.value = 'incorrect name'
        return
    }
 })

 const btnDelProduct = document.querySelector('.DelProduct')
 btnDelProduct.addEventListener('click',()=>{
  let delProductName = document.querySelector('.inoputDel')
  fetch(`http://127.0.0.1:${process.env.BACKEND_PORT}/catalog`)
  .then(response => response.text())
  .then((result)=>{
    if(Object.keys(JSON.parse(result)).includes(delProductName.value)){
       let requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
      };

      fetch(`http://127.0.0.1:${process.env.BACKEND_PORT}/catalog/${delProductName.value}`, requestOptions)
      .then(response => response.text())
      .then((result)=>{
        productList.clear()
        Object.entries(JSON.parse(result)).forEach((item)=>{
          productList.set(item[0],item[1])
          drawProductCatalog()
          delProductName.value = ''
        })
      }) 
    } else {
      delProductName.value = 'Not found'
      return
    }
  })
 })

renderNavMenu()