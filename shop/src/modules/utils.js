import ArrowLeft from '../img/left.svg'
import ArrowRight from '../img/right.svg'
import CreateSlider from './slider'

export let productList = new Map()
export const renderList = (list, data, createInput, addCloseCross) => {
  list.innerHTML = ''
  data.forEach((item, key) => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    img.setAttribute('src', item.gallery)
    img.setAttribute('class', "image")
    li.append(img)

    /* if (createInput) {
      const input = document.createElement('input')
      input.addEventListener('blur', () => {
        item.amount = input.value
      })
      input.type = 'number'
      input.name = key
      input.value = item.amount
      li.append(input)
    } */
    const itemName = document.createElement('span')
    itemName.textContent = key

    const price = document.createElement('span')
    price.classList.add('price')
    price.textContent = item.price + '$'
    li.append(itemName)
    li.append(price)
    list.append(li)
    if (addCloseCross) {
      const closeCross = document.createElement('div')
      closeCross.classList.add('closeCross')
      const spanCross = document.createElement('span')
      spanCross.classList.add('spanCross')
      const spanCrossTwo = document.createElement('span')
      spanCrossTwo.classList.add('spanCrossTwo')

      closeCross.append(spanCross)
      closeCross.append(spanCrossTwo)
      li.append(closeCross)

      closeCross.addEventListener('click', () => {
        delProduct(key, productList)
      })
    }
  })
}

export const counterItemsInCard = (data) => {
  const counter = document.querySelector('.counterCardItems')
  let temp = 0
  data.forEach((item) => {
    temp += +item.amount
  })
  counter.textContent = temp
}


export const getCatalogItems = (callBack) => {
  fetch(`http://127.0.0.1:${process.env.BACKEND_PORT}/catalog`)
    .then(response => response.text())
    .then(result => {
      callBack(JSON.parse(result))
    })
}

export const drawProductCatalog = (createInput, addCloseCross) => {
  const ulOfProduct = document.querySelector('.listProduct')
  renderList(ulOfProduct, productList, createInput, addCloseCross)
}

const delProduct = (nameProduct, list) => {
  let requestOptions = {
    method: 'DELETE',
    redirect: 'follow'
  };

  fetch(`http://127.0.0.1:${process.env.BACKEND_PORT}/catalog/${nameProduct}`, requestOptions)
    .then(response => response.text())
    .then((result) => {
      list.clear()
      Object.entries(JSON.parse(result)).forEach((item) => {
        list.set(item[0], item[1])
        drawProductCatalog(false, true)
      })
    })
}

export const renderNavMenu = () => {
  const linkList = [{ href: "/", text: "MAIN" }, { href: "/admin.html", text: "Admin" }, { href: "/card.html", text: "CARD" }]
  const base = document.querySelector('.header__title')
  linkList.forEach(item => {
    const div = document.createElement('div')
    const a = document.createElement('a')
    a.setAttribute('href', item.href)
    a.textContent = item.text
    div.append(a)
    base.append(div)
  })
}

export const counterCardItems = () => {
  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://127.0.0.1:901/card", requestOptions)
    .then(response => response.json())
    .then(result => {
      const counterProductInCard = document.querySelector('.counterCardItems')
      result.forEach((item) => {
        counterProductInCard.textContent = +counterProductInCard.textContent + +item.amount
      })
    })
}

export const renderListTwo = (list, data) => {
  list.innerHTML = ''
  data.forEach((item, key) => {
    const li = document.createElement('li')
    li.classList.add('product')

    const title = document.createElement('div')
    title.classList.add('product__title')
    title.textContent = key

    const slider = document.createElement('div')
    slider.classList.add('product__slider')
    slider.classList.add('slider')
    const sliderContainer = document.createElement('div')
    sliderContainer.classList.add('slider-container')

    const footer = document.createElement('div')
    footer.classList.add('footer-product')
    const counterAmount = document.createElement('div')
    counterAmount.classList.add('counterAmount')
    const less = document.createElement('span')
    less.addEventListener('click', () => {
      if (!(+drowAmount.textContent)) {
        return
      }
      drowAmount.textContent = +drowAmount.textContent - 1
      item.amount = drowAmount.textContent
    })
    less.classList.add('less')
    less.textContent = '-'
    const more = document.createElement('span')
    more.classList.add('more')
    more.textContent = '+'
    more.addEventListener('click', () => {
      drowAmount.textContent = +drowAmount.textContent + 1
      item.amount = drowAmount.textContent
    })
    const drowAmount = document.createElement('span')
    drowAmount.textContent = 0
    drowAmount.classList.add('drowAmount')
    const price = document.createElement('div')
    price.classList.add('footer-product__price')
    price.textContent = item.price + '$'

    if (item.gallery.length > 1) {
      item.gallery.forEach((img) => {
        const sliderItem = document.createElement('div')
        sliderItem.classList.add('slider-item')
        const sliderItemImg = document.createElement('img')
        sliderItemImg.src = img
        sliderContainer.append(sliderItem)
        sliderItem.append(sliderItemImg)
      })
      const sliderArrows = document.createElement('div')
        sliderArrows.classList.add('slider-arrows')
        const nextArrow = document.createElement('div')
        nextArrow.classList.add('next-arrow')
        const previousArrow = document.createElement('div')
        previousArrow.classList.add('previous-arrow')
        const nextArrowImg = document.createElement('img')
        nextArrowImg.src = ArrowRight
        const previousArrowImg = document.createElement('img')
        previousArrowImg.src = ArrowLeft

        slider.append(sliderArrows)
        sliderArrows.append(nextArrow)
        nextArrow.append(nextArrowImg)
        sliderArrows.append(previousArrow)
        previousArrow.append(previousArrowImg)

      const mySlider = new CreateSlider(
        sliderContainer.querySelectorAll('.slider-item'),
        slider,
        sliderContainer,
        nextArrow,
        previousArrow
      )

      mySlider.sliderStart()

    } else {
      const sliderItem = document.createElement('div')
      sliderItem.classList.add('slider-item')
      const sliderItemImg = document.createElement('img')
      sliderItemImg.src = item.gallery

      sliderContainer.append(sliderItem)
      sliderItem.append(sliderItemImg)
    }

    counterAmount.append(less)
    counterAmount.append(drowAmount)
    counterAmount.append(more)

    list.append(li)
    li.append(title)
    li.append(slider)
    slider.append(sliderContainer)


    li.append(footer)
    footer.append(counterAmount)
    footer.append(price)
  })
}