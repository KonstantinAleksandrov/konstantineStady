'use strict'
// создает рандомное число от min до max
const createNum = (min,max) =>{
    return Math.floor(min + Math.random() * (max + 1 - min))
}

//создает рандомный массив 

const createArr = (l) => {
    let arr = [];
    for(let i = 0;i < l;i++) {
        arr[i] = Math.round(Math.random() * 100);
        
    }
    return arr
}
let numbers = createArr(128);



//пузырьковая сортировка

const bubbleSort = (arr) =>{
    for(let i = 0,endI = arr.length - 1; i < endI; i++){
        
        for(let j = 0,endJ = endI - i; j < endJ; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
            
        }
    }
    return arr
}

//быстрая сортировка

const partition = (item,left,right) => {
    let i = left;
    let j = right
    let mid = item[Math.floor((i + j) / 2)];
   while(i <= j) {
    
    while(item[i] < mid) {
        i++
    }
    while(item[j] > mid){
        j--
    }
    if(i <= j){
        let temp = item[i];
        item[i] = item[j];
        item[j] = temp;
        i++
        j--
    }

   }
   return i;

}

const quickSort = (item,left,right) => {
    let index ;
    if (item.length > 1){
        index = partition(item,left,right);
        if(left < index - 1){
            quickSort(item,left,index - 1)
        }
        if (index < right) {
            
            quickSort(item,index,right)
        }
        return item
    }

}


//бинарный поиск

const binSearch = (item,arr) =>{
    const list =  quickSort(arr)
    let low = 0
    let high = list.length - 1
    console.log(list)
    while(low <= high){
        let mid = Math.floor((low + high) / 2)
        let guess = list[mid]
        if(guess === item){
            return mid
        }else if (guess < item){
            low = mid + 1
        }else if (guess > item){
            high = mid - 1
        }//что делвть если значение не существует?????
    }
}
console.log(binSearch(10),[1,6,4,1,124,5623,'ghbdtn','fsakdfja',35,12,10,532,64576,343])

///////////////////////////////////////////////////////////////////////////////////////////////////////
//Даны целые числа K и N (N > 0). Вывести N раз число K.
/* const for1 = (k,n) => {
    let arr = []
    if(n <= 0) {
        return arr //?? почему функция ничего не возвращает
    }
    arr.push(k)
    n--
    for1(k,n)
}
console.log(for1(5,4)); */

/* let company = {
    sales: [{
      name: 'John',
      salary: 5000
    }, {
      name: 'Alice',
      salary: 650
    }],
  
    development: {
      sites: [{
        name: 'Peter',
        salary: 2080
      }, {
        name: 'Alex',
        salary: 2000
      }],
  
      internals: [{
        name: 'Jack',
        salary: 1300
      }]
    }
  };

  const sumSalaries = (department) =>{
      if(Array.isArray(department)){
          let sum = 0
          for(let i = 0; i <= department.length - 1; i++){
              sum += department[i].salary
          }
          return sum
      }else {
        let sum = 0
          for(let key of Object.values(department)){
              sum += sumSalaries(key);
          }
          return sum
      }
  }

console.log(sumSalaries(company)); */
