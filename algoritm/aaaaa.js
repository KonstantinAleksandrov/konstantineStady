'use strict'
//Даны два целых числа A и B (A < B). Вывести в порядке возрастания все целые числа, расположенные между A и B (включая сами числа A и B), а также количество N этих чисел.
const for2 = (a,b) =>{
    let arr = []
    for (let i = a; i <= b;i++) {
        arr[arr.length] = i
    }
    return arr;
}
console.log(for2(3,7));
console.log('next');

//Дано вещественное число — цена 1 кг конфет. Вывести стоимость 0.1, 0.2, ..., 1 кг конфет.
const for5 = (price) => {
    let arr = []
    for(let i = 1; i <= 10; i++) {
        let j = (i * price) / 10
        arr.push(j)
    }
    return arr
}

console.log(for5(20));
console.log('next');

//Даны два целых числа A и B (A < B). Найти произведение всех целых чисел от A до B включительно.
const for8 = (a,b) => {
    let j = 1
 for (let i = a; i <= b;i++){
    j *= i
 }
 return j
}
console.log(for8(3,7));
console.log('next');

//Дано целое число "N (> 0)". Найти сумму "1 + 1/2 + 1/3 + . . . + 1/N" (вещественное число).

const abc = (num) => {
    let j = 0
    for (let i = 1; i <= num;i++){
        j = j + (1 / i) 
    }
    return j;
}
console.log(abc(5));
console.log('next');

//Известно, что X кг конфет стоит A рублей. Определить, сколько стоит 1 кг и Y кг этих же конфет.
const begin33 = (x,a,y) =>{
    const min = a / x
    const max = min * y
    return {
        min,
        max,
    }
}
console.log(begin33(7,1260,10));
console.log('next');

//Известно, что X кг шоколадных конфет стоит A рублей, а Y кг ирисок стоит B рублей. Определить, сколько стоит 1 кг шоколадных конфет, 1 кг ирисок, а также во сколько раз шоколадные конфеты дороже ирисок.
const begin24 = (x,a,y,b) => {
    const priceChoc = a / x
    const priceToffee = b / y
    const bol = priceChoc / priceToffee
    return {
        priceChoc,
        priceToffee,
        bol,
    }
}
console.log(begin24(5,250,3,180))
console.log('next');

//С начала суток прошло N секунд (N — целое). Найти количество секунд, прошедших с начала последней минуты.
const Integer21 = (n) =>{
     let sec = n % 60;
     return sec;
}
console.log(Integer21(2500));
console.log('next');

//Дан номер некоторого года (целое положительное число). Определить соответствующий ему номер столетия, учитывая, что, к примеру, началом 20 столетия был 1901 год.
const Integer30 = (num) => {
    const age = Math.floor(num / 100);
    return age + 1;
}
console.log(Integer30(1245));
console.log('next');
//Даны целые числа a, b, c, являющиеся сторонами некоторого треугольника. Проверить истинность высказывания: «Треугольник со сторонами a, b, c является равнобедренным».
const Boolean31 = (a,b,c) =>{
    if (((a === b) && (a !== c)) || ((a !== b) && (a === c)) || ((a !== b) && (b === c))){
        return true
    }
    return false
}
console.log(Boolean31(1,2,3));
console.log('next');

//Даны целые числа a, b, c. Проверить истинность высказывания: «Существует треугольник со сторонами a, b, c».

const Boolean34 = (a,b,c) => {
    return !(a > 0 && b > 0 && c > 0) || true;
}
console.log(Boolean34(1,2,3));
console.log('next');

//На числовой оси расположены три точки: A, B, C. Определить, какая из двух последних точек (B или C) расположена ближе к A, и вывести эту точку и ее расстояние от точки A.
const if20 = (a,b,c) => {
    if(Math.abs(b - a) <= Math.abs(c - a)){
        return "b " + (Math.abs(b - a))
    } else if (Math.abs(b - a) > Math.abs(c - a)){
        return "c " + (Math.abs(c - a))
    }
}
console.log(if20(8,-4,20));
console.log('next');

//Дано целое число. Вывести его строку-описание вида «отрицательное четное число», «нулевое число», «положительное нечетное число» и т. д.

const if29 = (num) => {
    const description = {
        sign : '',
        even : '',
    }
    if (num > 0 && num % 2 === 0){
        description.sign = "положительное"
        description.even = "четное"
    }else if(num < 0 && num % 2 === 0){
        description.sign = "отрицательное"
        description.even = "четное"
    }else if (num > 0 && num % 2 !== 0){
        description.sign = "положительное"
        description.even = "не четное"
    }else if (num < 0 && num % 2 !== 0){
        description.sign = "отрицательное"
        description.even = "не четное"
    }else {
        description.sign = 0
        description.even = "нулевое число"
    }
    return description;
}
console.log(if29(-0));
console.log('next');

//Дано вещественное число A и целое число N (>0). Используя один цикл, найти сумму "1 + A + A^2 + A^3 + ... + A^N"
const for17 = function(a,n) {
    let resul = 0;
    for(let i = 0,j = a; i <= n; i++){
        resul += j ** i
    }
    return resul
}
console.log(for17(2,3));
console.log('next');

//Дано целое число N (> 0). Используя один цикл, найти сумму "1! + 2! + 3! + ... + N!"
 const for20 = (num) => {
     let resul = 0;
    for(let i = 1, j = 1; i <= num; i++){
       j *= i
       resul += j 
    }
    return resul
 }
 console.log(for20(4));
 console.log('next');

 //Дано целое число N (> 0). Используя один цикл, найти сумму "1 + 1/(1!) + 1/(2!) + 1/(3!) + ... + 1/(N!)" (выражение N! — N–факториал — обозначает произведение всех целых чисел от 1 до N: "N! = 1·2·...·N"). Полученное число является приближенным значением константы e = exp(1).
 const for21 = (num) =>{
     let resul = 1
    for(let i = 1,j = 1; i <= num;i++) {
        j *= i
        resul += (1/j)
    }
    return resul;
 }
 console.log(for21(4));
 console.log('next');

 //Дано вещественное число X и целое число N (>0). Найти значение выражения "1+X +X^2/(2!)+...+X^N/(N!)"
  const for22 = (x,n) =>{
      let resul = 1;
    for(let i = 1,j = 1; i <= n; i++) {
        j *= i
        resul += (x ** i)/j
    }
    return resul
  }
  console.log(for22(2,3));
  console.log('next');

  //Дано целое число N (> 0). Найти наименьшее целое положительное число K, квадрат которого превосходит N: K^2 > N
  const whil7 = (num) => {
      let k = 1;
        while(true){
            k++;
            if((k ** 2) > num ) break
        }
        return k
  }
  console.log(whil7(20));
  console.log('next');

  //Дано целое число N (>1). Найти наименьшее целое число K, при котором выполняется неравенство: 3^K > N.
  const whil9 = (num) =>{
      let k = 1;
      while(1){
          k++;
          if((3 ** k) > num) break
      }
      return k
  }
  console.log(whil9(100));
  console.log('next');

  //Дано целое число N (>0). Используя операции деления нацело и взятия остатка от деления, вывести все его цифры, начиная с самой правой (разряда единиц)
  