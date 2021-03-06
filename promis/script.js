'use strict'

/* const btn = document.querySelector('.button')
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
}) */

function rand(from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

function getTagAsync(title, cb) {
  setTimeout(() => {
    const tags = JSON.parse('[{"id":17,"title":"перемещение"},{"id":32,"title":"гаджеты"}]');
    const tag = tags.find(tag => tag.title === title);
    if (!tag) {
      return cb(`Тег #${title} не найден`);
    }
    cb(null, tag);
  }, rand(2000, 5000));
}

function getTag(title) {
  return new Promise((done, fail) => {
    getTagAsync(title, (err, tag) => {
      if (err) {
        return fail(err);
      }
      done(tag);
    })
  });
}

function getTagItemsAsync(tagId, cb) {
  setTimeout(() => {
    const tagItems = new Map(JSON.parse('[[17,[{"title":"Телепорт бытовой VZHIH-101","price":10000,"discount":7,"available":3},{"title":"Ховерборд Mattel 2016","price":9200,"discount":4,"available":14}]],[32,[{"title":"Ховерборд Mattel 2016","price":9200,"discount":4,"available":14},{"title":"Меч световой FORCE (синий луч)","price":57000,"discount":0,"available":1}]]]'));

   
    if (tagItems.has(tagId)) {
      cb(null, tagItems.get(tagId));
    } else {
      cb(new Error(`Тег #ID${tagId} не найден`));
    }
  }, rand(2000, 5000));
}

function getTagItems(tagId) {
  return new Promise((done, fail) => {
    getTagItemsAsync(tagId, (err, items) => {
      if (err) {
        return fail(err);
      }
      done(items);
    })
  });
}

function getCurrencyRateAsync(code, cb) {
  setTimeout(() => {
    const rates = new Map(JSON.parse('[["AUD", 44.95],["AZN", 33.73],["GBP", 73.42],["AMD", 0.12],["BYN",30.96],["BGN",32.01],["BRL",18.8],["HUF",0.2],["DKK",8.42],["USD",58.85],["EUR",62.68],["INR",0.88],["KZT",0.18],["CAD",44.74],["KGS",0.85],["CNY",8.55],["MDL",2.94],["NOK",7.02],["PLN",14.55],["RON",13.92],["ZZZ",79.91],["SGD",41.36],["TJS",7.43],["TRY",15.97],["TMT",16.84],["UZS",0.02],["UAH",2.16],["CZK",2.32],["SEK",6.6],["CHF",58.69],["ZAR",4.4],["KRW",0.05],["JPY",0.52]]'));
    if (!rates.has(code)) {
      return cb(new Error(`Валюта с кодом ${code} не найдена`));
    }
    cb(null, rates.get(code));
  }, rand(2000, 5000));
}

const tags = [
  { id: 17, title: 'перемещение' },
  { id: 32, title: 'гаджеты' }
];
const badTag = { id: 54, title: 'ошибка' };
const tagTitle = 'перемещение';



/* const showTagInfo = (tag) => {
  getTagItemsAsync(tag.id, (error, data) => {
    if(error) {
      console.log(error)
    } else {
      console.log(data)
    }
  })
}

tags.forEach(showTagInfo);
showTagInfo(444) */

const getCurrencyRate = (code) =>{
 return new Promise((resolve,reject)=>{
  getCurrencyRateAsync(code,(error,data)=>{
    if(error){
       reject(error)
    }else{
      resolve(data)
    }
  })
 })
}
// getCurrencyRate('USD').then((info)=>console.log(info))

const amount = 42
const baseCur = 'ZZZ'
 const convertCurrency = (fromCode, toCode) => {
  //...
  return Promise.all([
    getCurrencyRate(fromCode),
    getCurrencyRate(toCode)
  ])
 }

convertCurrency(baseCur, "USD").then(result => console.log(`${amount}${baseCur} = $${result}`)).catch(console.error)
 //?????????????????? что за конвертация


 const getTagItemsCountAsync = (title,callBack) =>{
  getTagAsync(title,(a,b)=>{
    getTagItemsAsync(b.id,(err,data)=>{
        callBack(null,data.length)
    })
  })
 } 
 
 /* getTagItemsCountAsync(tagTitle,(q,count)=>{
  if(q){
    console.log(q)
  }else{
    console.log(`По тегу #${tagTitle} найдено товаров ${count} шт.`)
  }
 }) */
 

 const getTagItemsCount = (title) =>{
  return new Promise((resolve,reject)=>{
    getTag(title).then((tag)=>getTagItems(tag.id).then((info)=>resolve(info.length)))
  })
 }

 getTagItemsCount(tagTitle)
 .then((count) => console.log(`По тегу #${tagTitle} найдено товаров ${count} шт.`))
 .catch((error) => console.log(error))