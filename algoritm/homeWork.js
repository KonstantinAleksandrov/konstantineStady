'use strict'

const films = [{name: "It", rating: "7.3", date: "2018 year"}, {
  name: "Call",
  rating: "6.7",
  date: "1995 year"
}, {name: "Origin", rating: "5.2", date: "2001 year"}]

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


/* let sortSort = (a,b) => {
    if (a > b){
        return 1
    }
    if (a < b){
        return -1
    }
    if(a == b){
        return 0
    }
}
console.log(films)
films.sort(sortSort)
console.log(films) */

let arrTwo = [5, 2, 3, 35, 55, 12, 68, 0]

function swap(items, firstIndex, secondIndex) {
  const temp = items[firstIndex]
  items[firstIndex] = items[secondIndex]
  items[secondIndex] = temp
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right
  while (i <= j) {
    while (items[i] < pivot) {
      i++
    }
    while (items[j] > pivot) {
      j--
    }

    swap(items, i, j)
    i++
    j--

  }
  return i
}

const qSort = (array, left, right) => {
  let index = 0
  index = partition(array, left, right)

  if (left < index - 1) {
    qSort(array, left, index - 1)
  }

  if (index < right) {
    qSort(array, index, right)
  }
  return array
}

console.log(arrTwo)
console.log(qSort(arrTwo, 0, arrTwo.length - 1))
console.log(arrTwo)