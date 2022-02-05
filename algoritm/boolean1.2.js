'use strict'
//Boolean13
// Даны три целых числа: A, B, C. Проверить истинность высказывания: «Хотя бы одно из чисел A, B, C положительное».

{
  const A = -4, B = 0, C = -4
  const isAboveZero = (A > 0 || B > 0 || C > 0)
  console.log(isAboveZero)
}

{
  const A = -4, B = 0, C = -4
  let isAboveZero

  if(A > 0){
    isAboveZero = true
  } else if(B > 0){
    isAboveZero = true
  } else if(C > 0){
    isAboveZero = true
  } else {
    isAboveZero = false
  }

  console.log(isAboveZero)
}