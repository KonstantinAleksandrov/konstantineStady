import './style/style.scss'

let buyProductsArr = []
let cardArr = []
let counter = 0
const createNewProduct = (list,arr) =>{
    list.innerHTML = ''
    arr.forEach((item)=>{
        const li = document.createElement('li')
        const input = document.createElement('input')
        input.type = 'text'
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

const addNewProductInArr = (nameProduct) =>{
    const newProduct = {
        [nameProduct] : ''
    }
    buyProductsArr.push(newProduct)
}

(function(){
    const buyList = document.querySelector('.listProduct')
    let listItems = [...buyList.querySelectorAll('li')]
    listItems.forEach((item)=>{
        const name = item.querySelector('span').textContent
        addNewProductInArr(name)
        //[name] : item.querySelector('input').value значение обьекта для localStorage
    })
    createNewProduct(buyList,buyProductsArr)
}())
const changesCouterisPage = () =>{
    const counterCardItems = document.querySelector('.counterCardItems')
    counterCardItems.textContent = counter
}

    const btnAddNewProduct = document.querySelector('.addNewProduct')
    btnAddNewProduct.addEventListener('click',()=>{
        const buyList = document.querySelector('.listProduct')
        const inputAdd = document.querySelector('.inputAdd')
        if(inputAdd.value){
            addNewProductInArr(inputAdd.value)
            inputAdd.value = ''
        }
        createNewProduct(buyList,buyProductsArr)
    })
    
    const btnAddToCard = document.querySelector('.addCard')

    btnAddToCard.addEventListener('click',()=>{
        const readyList = document.querySelector('.readyList')
        cardArr = []
        counter = 0
        buyProductsArr.forEach((item)=>{
            if(item[Object.keys(item)]){
                cardArr.push(item)
                createNewProduct(readyList,cardArr)
                counter += +item[Object.keys(item)]
                changesCouterisPage()
            }
        })
    })

    const btnClearCard = document.querySelector('.card-header__clearCard')
    btnClearCard.addEventListener('click',()=>{
        const readyList = document.querySelector('.readyList')
        cardArr = []
        counter = 0
        createNewProduct(readyList,cardArr)
        changesCouterisPage()
    })

    const btnOpenCard = document.querySelector('.openCard')
    btnOpenCard.addEventListener('click',()=>{
        const card = document.querySelector('.card')
        card.classList.toggle('_activeCard')
    })

