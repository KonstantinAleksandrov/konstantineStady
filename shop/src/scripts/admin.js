
import '../style/admin.scss'
import { productList,drawProductCatalog,getCatalogItems,renderNavMenu} from '../modules/catalog' 
 getCatalogItems((catalog)=>{
  Object.entries(catalog).forEach((item)=>{
    productList.set(item[0],item[1])
  })
  drawProductCatalog(false,true)
})

  const btnAddNewProduct = document.querySelector('.addNewProduct')
  btnAddNewProduct.addEventListener('click',()=>{
    const getProductName = document.querySelector('.inputAdd')
    const getProductPrice = document.querySelector('.addPrice')
    if(getProductName.value && !Number(getProductName.value) && getProductName.value != 0){
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json"); 

        let raw = JSON.stringify({
            "name": getProductName.value,
            "price": getProductPrice.value
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
                drawProductCatalog(false,true)
            })
        })
        .then(()=>{
          getProductName.value = ''
          getProductPrice.value = ''
        })
        .catch(error => console.log('error', error))
    }else{
        getProductName.value = 'incorrect name'
        return
    }
 })
 renderNavMenu() 
