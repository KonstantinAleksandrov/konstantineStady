'use strict'
//С начала суток прошло N секунд (N — целое). Найти количество полных минут, прошедших с начала суток.
{
    const n = 235
    console.log((n - n % 60) / 60)
}
// С начала суток прошло N секунд (N — целое). Найти количество полных часов, прошедших с начала суток.

{
    const n = 3615
    console.log((n - n % 60) / 3600)
}
//С начала суток прошло N секунд (N — целое). Найти количество секунд, прошедших с начала последней минуты.
{
    const n = 245
    console.log( n % 60)
}
//С начала суток прошло N секунд (N — целое). Найти количество секунд, прошедших с начала последнего часа.
{
    const n = 3615
    console.log(n % 3600)
}
//С начала суток прошло N секунд (N — целое). Найти количество полных минут, прошедших с начала последнего часа.
{
    const n = 3725
    console.log( ((n % 3600) - ((n % 3600) % 60)) / 60 )
}

//////////////////////////////////////////////////////////Логические выражения////////////////////////////////////////////////////////////////


//Даны числа x, y. Проверить истинность высказывания: «Точка с координатами (x, y) лежит во второй координатной четверти».
{
    const x = 5
    const y = 3
    !(x > 0 && y > 0) || console.log(true)

}
//Даны числа x, y. Проверить истинность высказывания: «Точка с координатами (x, y) лежит в четвертой координатной четверти».
{
    const x = -5
    const y = -3
    if ( x < 0 && y < 0 ){
        console.log(true)
    }else{
        console.log(false)
    }
}
//Даны числа x, y. Проверить истинность высказывания: «Точка с координатами (x, y) лежит во второй или третьей координатной четверти».{
{
    const x = 2
    const y = 2
    if ((x > 0 && y < 0) || (x > 0 && y > 0)){
        console.log(true)
    }else console.log(false)
}
//Даны числа x, y. Проверить истинность высказывания: «Точка с координатами (x, y) лежит в первой или третьей координатной четверти».

{
    const x = -2
    const y = 2
    if((x < 0 && y > 0) || (x > 0 && y < 0)){
        console.log(true) 
    }else console.log(false)
}
//////////////////////////////////////////////////////////Условный оператор////////////////////////////////////////////////////////////////


//Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по возрастанию или убыванию, то удвоить их; в противном случае заменить значение каждой переменной на противоположное. Вывести новые значения переменных A, B, C.
{
    let a = 2
    let b = 4
    let c = 4
    if (a < b && b < c || a > b && b > c){
        console.log(a * 2,b * 2,c * 2)
    }else{
        console.log(-a,-b,-c)
    }
}
//Даны три целых числа, одно из которых отлично от двух других, рав- ных между собой. Определить порядковый номер числа, отличного от остальных.

