'use strict'
const createArr = (letng,a) => {
    let arr = []
    for(let i = 0;i < letng; i++) {
        arr[i] = Math.round(Math.random() * a )
    }
    return arr
}

let readyArr = createArr(10,100);
//let arrTwo = [5,2,3,35,55,12,68,0];// не работает с эти массивом
let arrTwo = [4, 2, 6, 5, 3, 9];





let bubleSort = (arr) => {
    for (let i = 0,endI = arr.length - 1; i < endI; i++){
        let wasSwap = false //если уже отсортированый масив
        for(let j = 0,endJ = endI - i; j < endJ; j++){
           if(arr[j] > arr[j + 1]){
                let temp = arr[j]
    
               arr[j] = arr[j + 1]
               arr[j + 1] = temp
               wasSwap = true
            }
            if(!wasSwap) break //если уже отсортированый масив
        }
    }
    return arr
}


function swap(items, firstIndex, secondIndex){
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {
    let pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    console.log(pivot)
    return i;
}
console.log(arrTwo);
partition(arrTwo,0,(arrTwo.length - 1));
console.log(arrTwo);
