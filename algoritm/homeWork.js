'use strict'

/* const films = [
  {name: "It", rating: "7.3", date: "2018 year"}, 
  {name: "Call",rating: "6.7",date: "1995 year"},
  {name: "ksotya",rating: "2.8",date: "1997 year"},
  {name: "john",rating: "9.7",date: "1999 year"},
  {name: "Origin", rating: "5.2", date: "2001 year"}
] */

/* const bubbleSort = (arr,key) => {
    for(let i = 0,endI = arr.length - 1;i < endI; i++){
        for(let j = 0,endJ = endI - i; j < endJ; j++){
            if(arr[j][key] > arr[j + 1][key]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    } 
    return arr
}
console.log(createArr(films,'rating')); */


/* const partition = (item,left,right,key) => {
  let mid = item[Math.floor((left + right) / 2)]
    while(left <= right){
      while(item[left][key] < mid[key]){
        left++
      }
      while(item[right][key] > mid[key]){
        right--
      }
      if(left <= right){
        let temp = item[left]
        item[left] = item[right]
        item[right] = temp
        left++
        right--
      }
    }
    return left

}
const quickSort = (item,left,right,key) => {
  if(item.length > 1){
    let index = partition(item,left,right,key);
    if(left < index - 1) {
      quickSort(item,left,index - 1,key)
    }
    if(right > index){
      quickSort(item,index,right,key)
    }
  }
  return item
}
console.log(quickSort(films,0,films.length - 1,'date')) */


/* Написать функцию, которая принимает массив объектов типа 
const films = [{name: "It", rating: "7.3", date: "2018 year", price: 22}, 
{name: "Call", rating: "6.7", date: "1995 year", price: 12}
{name: "Origin", rating: "5.2", date: "2001 year", price: 52}] 
и ключ по которому происходит сортировка field (типа string)
Функция должна возвращать сумму стоимостей всех фильмов по полю price
Использовать для этого метод массива reduce */



const films = [
{name: "It", rating: "7.3", date: "2018 year", price: 22}, 
{name: "Call", rating: "6.7", date: "1995 year", price: 12},
{name: "Origin", rating: "5.2", date: "2001 year", price: 52}
]

const sortByKey = (arr,item) =>{
  arr.sort((a,b) => {
    if (a[item] > b[item]){
      return 1
    }
    if (a[item] < b[item]){
      return -1
    }
    if (a[item] === b[item]){
      return 0
    }
  })
  return arr
}

const reduceFilm  = (arr,item) => {

  let resul =  arr.reduce((sum,current) => sum + current['price'],0)
  return resul
} 




