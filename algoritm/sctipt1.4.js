"use strict"
//Даны целые числа K и N (N > 0). Вывести N раз число K.
// {
//     const k = 4
//     const n = 5
//     for(let i = 0; i < k; i++) {
//         console.log(n);
//     }
//     console.log('next');
// }
//Даны два целых числа A и B (A < B). Вывести в порядке возрастания все целые числа, расположенные между A и B (включая сами числа A и B), а также количество N этих чисел.
// {
//     const a = 5
//     const b = 10
//     let counter = 0
//     for(let i = a; i <= b; i++, counter++){
//         console.log(i)
//     }
//     console.log(counter);
// }
//Даны два целых числа A и B (A < B). Вывести в порядке убывания все целые числа, расположенные между A и B (не включая числа A и B), а также количество N этих чисел.
// {
//     //????
//     const a = 3
//     const b = 7
//     for(let i = b; i > a + 1;){
//         console.log(--i);
//     }
//     console.log('next');
// }
//Дано вещественное число — цена 1 кг конфет. Вывести стоимость 1, 2, ..., 10 кг конфет.
// {
//    const a = 470.20;
//    for(let i = 1; i <= 10;i++){
//    console.log(a * i);
//    }
//    console.log('next');
// }
//Дано вещественное число — цена 1 кг конфет. Вывести стоимость 0.1, 0.2, ..., 1 кг конфет.
// {
//     const a = 470.20;
//    for(let i = 1; i <= 10;i++){
//    console.log(a * i / 10);
//    }
//    console.log('next');
// }
//Даны два числа a и b. Найти их среднее арифметическое: "(a + b)/2"
// {
//     const a = 4
//     const b = 6
//     console.log((a + b) / 2);
//     console.log('next');
// }
//Даны катеты прямоугольного треугольника a и b. Найти его гипотенузу "C" и периметр "P": "C=a+b", "P=a+b+С".
// {
//     const a = 4
//     const b = 6
//     const c = (a ** 2 + b ** 2) ** (1/2);
//     const p = c + b + a;
//     console.log(c,p)
//     console.log('next');
// }
//Даны переменные A, B, C. Изменить их значения, переместив содержимое "A" в "C", "C" в "B", "B" в "A", и вывести новые значения переменных "A", "B", "C".
// {
//     let a = 4
//     let b = 6
//     let c = 8
//     a = b
//     b = c
//     c = a
//     console.log(a,b,c);
//     console.log('next');
// }
//Найти значение функции "y=3x−6x−7" при данном значении "x".
// {
//     let x = 3
//     let y = 3 * x - 6 * x - 7;
//     console.log(y);
//     console.log('next');
// }
//Дана масса "M" в килограммах. Используя операцию деления нацело, найти количество полных тонн в ней (1 тонна = 1000 кг).
// {
//     const m = 12345
//     console.log((m - (m % 1000)) / 1000);
//     console.log('next');
// }
//Дан размер файла в байтах. Используя операцию деления нацело, найти количество полных килобайтов, которые занимает данный файл (1 килобайт = 1024 байта).
// {
//     const b = 2086;
//     console.log((b - (b % 1024)) / 1024);
//     console.log('next');
// }
//Дано двузначное число. Найти сумму и произведение его цифр.

// {
//     const num = 53
//     const left = (num / 10) - ((num % 10) / 10)
//     const right = (num % 10)
//     console.log(left + right, left * right)
//
//     // 2 variant
//     const number = 53
//     const strNum = String(number)
//     console.log(Number(strNum[0]) + Number(strNum[1]),Number(strNum[0]) * Number(strNum[1]) )
// }

// Дано трехзначное число. В нем зачеркнули первую справа цифру и приписали ее слева. Вывести полученное число. ***
 

//Дано целое число A. Проверить истинность высказывания: «Число A является четным».
// {
//     const a = 24
//     if(a % 2 == 0){
//         console.log(true)
//     } else console.log(false)
//     console.log("next");
// }
//Даны два целых числа: A, B. Проверить истинность высказывания: «Справедливы неравенства A > 2 и B ≤ 3»
// {
//     const a = 3
//     const b = 3
//     if( a > 2 && b <= 3){
//         console.log(true);
//     }else console.log(false)
//     console.log("next");
// }
//Даны два целых числа: A, B. Проверить истинность высказывания: «Каждое из чисел A и B нечетное».
// {
//     const a = 3
//     const b = 3
//     if((a % 2 != 0) && (b % 2 != 0)){
//         console.log(true);
//     }else console.log(false);
//     console.log("next");
// }

// Дано четырехзначное число. Проверить истинность высказывания: «Данное число читается одинаково слева направо и справа налево».
//{
    // const num = 1221
    // let res = 0, d
    //
    // for(d = num; d > 0; d = d / 10) {
    //     res = res * 10 + d % 10
    // }
    // console.log(res)

    // const num = 1251
    // const strNum = String(num)
    // const arrNum = strNum.split('')
    // const arrRevNum = arrNum.reverse()
    // const revStrNum = arrRevNum.join('')
    // const revNum = Number(revStrNum)
    // console.log(num === revNum)
//}