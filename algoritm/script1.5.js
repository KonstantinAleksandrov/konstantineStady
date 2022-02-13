//Дано трехзначное число. В нем зачеркнули первую справа цифру и приписали ее слева. Вывести полученное число.
function replacementNum(num){
    let a =(num - (num % 10)) / 10
    return  +(String(num % 10) + String(a));
}
console.log(replacementNum(345));
console.log('next');


//Дано четырехзначное число. Проверить истинность высказывания: «Данное число читается одинаково слева направо и справа налево».
//function bolean23(num){
    //let a = String(num).length - 1
    //if (String(num)[0] === String(num)[a] && String(num)[1] === String(num)[a-1]) {
      //  return true;
    //}else return false;
//}
//console.log(bolean23(1441));


function bolean23(num){
    let len = String(num).length
    let str = String(num)
    let a = false
        for(let i = 0, j = len - 1;i < len / 2;i++,j--){
           if(str[i] === str[j]){
            a = true
           }else {
               a = false
               break
           }
        }
        return a;
}
console.log(bolean23(12345654321));
console.log('next');


//Дано целое число. Если оно является положительным, то прибавить к нему 1; если отрицательным, то вычесть из него 2; если нулевым, то заменить его на 10. Вывести полученное число.
function if3(num){
    if (num > 0){
        num++
    }else if (num < 0){
        num -=2
    }else {
        num = 10
    }return num
}
console.log(if3(0));
console.log('next');

//Даны три целых числа. Найти количество положительных и количество отрицательных чисел в исходном наборе.
//??????????????????????
function if5(num1,num2,num3) {
    if (num1 > 0 && num2 > 0 && num3 > 0){
        return (
            "положительных " + 3 + " отрицательных " + 0 
        )
    } else if ((num1 > 0 && num2 > 0 && num3 < 0) || (num1 > 0 && num2 < 0 && num3 > 0) || (num1 < 0 && num2 > 0 && num3 > 0)){
        return (
            "положительных " + 2 + " отрицательных " + 1
        )
    }else if ((num1 > 0 && num2 < 0 && num3 < 0) || (num1 < 0 && num2 < 0 && num3 > 0) || (num1 < 0 && num2 > 0 && num3 < 0)){
        return (
            "положительных " + 1 + " отрицательных " + 2
        )
    }else {
        return (
            "положительных " + 0 + " отрицательных " + 3
        )
    }

}
console.log(if5(1,2,3));
console.log('next');

//Даны три числа. Найти наименьшее из них.
function if12(num1,num2,num3){
    if(num1 <= num2 && num1 <= num3){
        return num1
    }else if (num2 <= num3 && num2 <= num1){
        return num2
    }else if (num3 <= num1 && num3 <= num2){
        return num3
    }else return num1
}
console.log(if12(4,-4,4));
console.log('next');

//Даны три целых числа, одно из которых отлично от двух других, равных между собой. Определить порядковый номер числа, отличного от остальных.
function if18(num1,num2,num3){
    if (num1 === num2  && num1 != num3){
        return num3;
    }else if (num1 === num3  && num1 != num2){
        return num2;
    }else if (num2 === num3  && num2 != num1){
        return num1;
    }else return false
}
console.log(if18(2,2,3));
console.log('next');

//Дано целое число в диапазоне 1–7. Вывести строку — название дня недели, соответствующее данному числу (1 — «понедельник», 2 — «вторник» и т. д.)
function cas1(num){
    switch(num) {
        case 1 :
        return 'Monday';
        break;
        case 2 :
        return 'Tuesday';
        break;
        case 3 :
        return 'Wednesday';
        break; 
        case 4 :
        return 'Thursday';
        break;
        case 5 :
        return 'Friday';
        break;
        case 6 :
        return 'Saturday';
        break;
        case 7 :
        return 'Sunday';
        break;
        default :
        return false;
    }
}
console.log(cas1(7));
console.log('next');
//Дано целое число в диапазоне 20–69, определяющее возраст (в годах). Вывести строку-описание указанного возраста, обеспечив правильное согласование числа со словом «год», например: 20 — «двадцать лет», 32 — «тридцать два года», 41 — «сорок один год».




