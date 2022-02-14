'use strict'
//Даны два ненулевых числа. Найти сумму, разность, произведение и частное их модулей.
function Begin11(a,b) {
        let sum = Math.abs(a) + Math.abs(b)
        let difference = Math.abs(a) - Math.abs(b)
        let myltiply = Math.abs(a) * Math.abs(b)
        let division = Math.abs(a) / Math.abs(b)
    return {
        sum,
        difference,
        myltiply,
        division,
    }
}
console.log(Begin11(5,10));
console.log("next");

//Дана длина L окружности. Найти ее радиус R и площадь S круга, ограниченного этой окружностью, учитывая, что L = 2πR, S = π*R^2 . В качестве значения π использовать 3.14.
function Begin14(l,p) {
    const r = l / 2 / p
    const s = p * (r ** 2)
    return {
        r,
        s,
        l
    }
}
console.log(Begin14(10,3.14));
console.log("next");

//Дано двузначное число. Вывести число, полученное при перестановке цифр исходного числа.
const Integer8 = function(num) {
    let one = num % 10 * 10
    let two = (num / 10 ) - ((num % 10) / 10)
    return one + two 
}
console.log(Integer8(25));
console.log("next");

//С начала суток прошло N секунд (N — целое). Найти количество полных минут, прошедших с начала суток.
const Integer19 = function(num){
    return (num - num % 60) / 60

}
console.log(Integer19(370));
console.log("next");

//Даны два целых числа: A, B. Проверить истинность высказывания: «Справедливы неравенства A ≥ 0 или B < −2».
const Boolean5 = (a,b) => {
    return a >= 0 || b < -2;
}
console.log(Boolean5('asf',-9));
console.log("next");

//Даны числа x, y. Проверить истинность высказывания: «Точка с координатами (x, y) лежит во второй координатной четверти».
const Boolean25 = (x,y) =>{
    return x > 0 && y > 0 || false 
}
console.log(Boolean25(2,4))
console.log("next");


//Даны три целых числа. Найти количество положительных чисел в исходном наборе.
const if4 = (arr) =>{
    let calc = 0;
    for ( let i = 0,j = 0; i < arr.length; i++){
        if (arr[i] > 0){
            calc++
        }
    }
    return calc
}
console.log(if4([2,4,9]));
console.log("next");

//Дано целое число в диапазоне 100–999. Вывести строку-описание данного числа, например: 256 — «двести пятьдесят шесть», 814 — «восемьсот четырнадцать».
//?????????????????????

//Даны два целых числа A и B (A < B). Вывести в порядке убывания все целые числа, расположенные между A и B (не включая числа A и B), а также количество N этих чисел.
const For3 = (a,b) =>{
    let arr = []
    let calc = 0
    for (let i = b - 1; i > a ;i--){
        arr[arr.length] = i
        calc++
    }
    console.log(calc)
    return arr
}
console.log(For3(1,10));
console.log("next");

//Даны два целых числа A и B (A < B). Найти сумму всех целых чисел от A до B включительно.
const For7 = (a,b) =>{
    let calc = 0
    for(let i = a; i <= b; i++){
        calc += i
    }
    return calc
}
console.log(For7(1,10));
console.log("next");

//Дано вещественное число A и целое число N (>0). Используя один цикл, вывести все целые степени числа A от 1 до N.
//????

//Дано целое число N (> 0). Найти "N! = 1·2·...·N" (N–факториал).
const For19 = (num) => {
    let sum = 1;
    for(let i = 1; i <= num; i++){
        sum *= i
    }
    return sum
}
console.log(For19(5));
console.log("next");

//Даны целые положительные числа N и K. Найти сумму "1^K + 2^K +...+ N^K"
//???????????????????

//Дано целое число N (> 0). Найти сумму " 1^1 + 2^2 + ... +N^N "
//???????????????????



//Дано целое число N (> 0). Если оно является степенью числа 3, то вывести TRUE, если не является — вывести FALSE.

