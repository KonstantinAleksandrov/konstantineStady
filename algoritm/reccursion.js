//Даны два целых числа A и B (A < B). Вывести в порядке убывания все целые числа, расположенные между A и B (не включая числа A и B), а также количество N этих чисел.
// const For3 = (a,b) =>{
//   let arr = []
//   let calc = 0
//   for (let i = b - 1; i > a ;i--){
//     arr[arr.length] = i
//     calc++
//   }
//   console.log(calc)
//   return arr
// }



const For3 = (a, b) => {
  let arr = []

  const reLoop = (i) => {
    console.log(i, a)
    arr[arr.length] = i
    i--
    if(i > a) {
      reLoop(i)
    }
  }

  reLoop(b - 1)
  return arr
}

// console.log(For3(1,10));
// console.log("next");


// const for17 = function(a,n) {
//   let resul = 0;
//   for(let i = 0,j = a; i <= n; i++){
//     resul += j ** i
//   }
//   return resul
// }
// console.log(for17(2,3));
// console.log('next');