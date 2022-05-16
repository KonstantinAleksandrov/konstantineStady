fetch('products.json')
  .then(res => res.json())
  .then(json => renderProducts(json))

let wishList = []
let fullAmount = 0

const renderWishList = (wishList) => {
  const wishListContainer = document.querySelector('.card-list')
  wishListContainer.innerHTML = ''
  wishList.forEach( wish => {
    const newWish = document.createElement('div')
    newWish.textContent = wish.name
    wishListContainer.append(newWish)
  })
}

const addProduct = (event, product) => {
  if(wishList.includes(product)) {
    wishList = wishList.filter(f => f.name !== product.name)
    event.target.textContent = "Добавить"
  } else {
    wishList = [...wishList, product]
    event.target.textContent = "В списке"
  }
  renderWishList(wishList)
}

const renderProducts = (productList) => {

  const listContainer = document.querySelector('.list-container')
  Object.values(productList).forEach(product => {
    const item = document.createElement('div')
    item.classList.add('item')
    const img = document.createElement('img')
    img.setAttribute('src', product.cover)
    const button = document.createElement('button')
    button.textContent = "Добавить"
    button.addEventListener('click', (e) => addProduct(e, product))

    const name = document.createElement('div')
    name.textContent = product.name
    const price = document.createElement('div')
    price.textContent = `${product.price} руб.`
    item.append(img, button, name, price)
    listContainer.append(item)
  })
}