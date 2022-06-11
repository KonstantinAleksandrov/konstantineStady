'use strict'

const btn = document.querySelector('.button')
const ul = document.querySelector('ul')

const getData = new Promise((resolve, reject) => {
  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer d8b42b3d8e8a21d707fe553923b48b3d3514de59e0511ad75379697695cea800");

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://gorest.co.in/public/v2/users", requestOptions)
    .then(response => response.json())
    .then(result => resolve(result))
    .catch(error => console.log('error', error));
})


const renderUsers = (userList) => {
  userList.forEach(user => {
    const li = document.createElement('li')
    li.textContent = user.email + ' ' + user.name
    ul.append(li)
  })
}


btn.addEventListener('click', async () => {
  const result = await getData
  renderUsers(result)
  // getData.then(result => renderUsers(result)).catch(err => console.log(err))
})
