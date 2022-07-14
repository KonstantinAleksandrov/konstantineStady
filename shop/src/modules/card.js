export const renderCard = (cardList) => {
  console.log(cardList)
  const cardContainer = document.querySelector('.readyList')
  //
}

export const getCardItems = (callBack) =>{
  fetch(`http://127.0.0.1:${process.env.BACKEND_PORT}/card`)
    .then(response => response.json())
    .then(result => {
      callBack(result)
    })
}