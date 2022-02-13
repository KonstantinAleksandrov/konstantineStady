const ob = {} // пустой объект
// функция получения данных из объекта

const object = {name: 'Ivan', surname: 'Sidorov', age: 25, family: {name: "Petr", relation: 'son'}}
// 1
console.log(object.name)
// 2
console.log(object['name'])


const searchOb = function(object, key, subKey) {
  return object[key][subKey]
}

console.log(searchOb(object, 'family', 'name'), object.family.name)

//
console.log(object)

//object.middlename = 'Petrov'
//object['middlename'] = 'Petrov'

console.log(object)


const findMin = (array) => {
  let min = Infinity

  for(let i = 0; i < array.length;i++){
    if(min > array[i]) {
      min = array[i]
    }
  }
  return min
}

console.log(findMin([1,2,3,444,55,332,23, -55, 0]))


const findCurrent = (array, i) => array[i - 1]
console.log(findCurrent([1,2,3,444,55,332,23, -55, 0], 3))


// добавление последнего элемента массива
{
  const arr = [1,2,3,55,3,2,1]
  arr[7] = 9
  arr.push(10)
  arr[arr.length] = 33
}

const generateNumericArray = (len) => {
  const arr = []
  for(let i = 0; i < len + 1; i++){
    arr[i] = i
  }
  return arr
}

console.log(generateNumericArray(8))