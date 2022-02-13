// function declaration

// const number = 22121
// for(let i = 1; i <= numberLength(number); i++){
//   console.log(number / i)
// }

// IIFO
(function numberLength(number){
  let counter = 0, tempNum = number
  while (tempNum > 1){
    tempNum = tempNum / 10
    counter++
  }
  return counter
})(123)


// function expression

const stringLength = function(string){
  return string.length
}

console.log(stringLength('this is awesome string'))


// arrow functions

// const countNumsBetween = (a, b) => {
//   let counter = 0
//   for(let i = a; i <= b; i++){
//     counter++
//   }
//   return counter
// }

const countNumsBetween = (a, b) => b - a + 1

console.log(countNumsBetween(5, 10))