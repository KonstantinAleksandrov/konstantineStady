'use strict'

const sumTo = (n) =>{
  if(n == 1) {
    return 1
  }
  return n + sumTo(n - 1)
} 
console.log(sumTo(4))

function factorial(n) {
  if (n == 1) {
    return 1
  }
  return n * factorial(n - 1)
}
console.log(factorial(4))


