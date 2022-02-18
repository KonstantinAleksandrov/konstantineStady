// Сформировать одномерный массив рандомных чисел от 1 до 100.
// Отсортировать массив по возрастанию

const generateArray = (len, scale) => {
  let arr = []
  for(let i = 0; i < len; i++){
    arr[i] = Math.round(Math.random() * scale)
  }
  return arr
}

const sortedArray = [{name:'Max', age: 44}, {name:"Josh", age: 23}, {name:"Yakov", age: 65}, {name:"Tim", age: 12}]
console.log(sortedArray)

const bubbledSort = (arr) => {
  for(let i = 0; i < arr.length - 1; i++){
    for(let j = 0; j < arr.length - 1; j++){
      if(arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

const standartSort = (array, field) => {
  array.sort((a, b) => {
    if(a[field] < b[field]){
      return -1
    } else if(a[field] > b[field]) {
      return 1
    }

    return 0
  })
}

standartSort(sortedArray, 'name')

console.log(sortedArray)