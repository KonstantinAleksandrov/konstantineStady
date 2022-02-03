"use strict"
//Дано целое число A. Проверить истинность высказывания: «Число A является положительным».
{
    const a = 1

    if (a > 0){
        console.log(true);
    }else{
        console.log(false);
    }
}
//Дано целое число A. Проверить истинность высказывания: «Число A является нечетным».
{
    const a = 2
   a % 2 !== 0 || console.log(true) ;
}
//Даны два целых числа: A, B. Проверить истинность высказывания: «Справедливы неравенства A > 2 и B ≤ 3»
{
    const a = 8, b = 6
    !(a > 2 && b > 3) || console.log(true)
}
//Даны три целых числа: A, B, C. Проверить истинность высказывания: «Число B находится между числами A и C».
{
    const a = 4
    const b = 3
    const c = 2
    if (a > b && b > c){
        console.log(true);
    }else {
        console.log(false);
    }
}
//Даны два целых числа: A, B. Проверить истинность высказывания: «Каждое из чисел A и B нечетное».
{
    const a = 3
    const b = 5
    !(a % 2 !== 0 && b % 2 !== 0) || console.log(true)
}
//Даны два целых числа: A, B. Проверить истинность высказывания: «Хотя бы одно из чисел A и B нечетное».
const a = 3
const b = 4
if (a % 2 !== 0 || b % 2 !== 0){
    console.log(true)
}else {
    console.log(false)
}
//Даны три целых числа: A, B, C. Проверить истинность высказывания: «Каждое из чисел A, B, C положительное».
{
const a = 3
const b = 5
const c = 1
!(a > 0 && b > 0 && c > 0) || console.log(true)
}
//Даны два целых числа: A, B. Проверить истинность высказывания: «Ровно одно из чисел A и B нечетное».
{
    const a = 4
    const b = 1
    if(a % 2 !== 0 && b % 2 !== 0){
        console.log(false)
    } else if (a % 2 !== 0){
        console.log(true)
    } else if (b % 2 !== 0){
        console.log(true)
    }else{
        console.log(false)
    }
}