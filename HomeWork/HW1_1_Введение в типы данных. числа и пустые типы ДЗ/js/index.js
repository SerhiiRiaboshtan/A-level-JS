// ДЗ: Типы данных, числа и пустые типы

// 1 assign: evaluation
// Исследуйте код, найдите выражения в нём. Расставьте скобки так, 
// что бы код не изменил своего поведения (работал так же как и сейчас). 
// Объясните как и в каком порядке вычисляются выражения и подвыражения.
// var a = 5; 
// var b, c;
// b = (a * 5);  
// b = (c = b/2);
function task1(){
    console.clear();
    console.log("HW 1.1 Типы данных, числа и пустые типы task1");
    var a = 5;  //создаём и сразу инициализируем. a теперь number со значением 5
    var b, c;   //создаём, но пока переменные undefined
    b = (a * 5); // b становится number co значением  25
    b = (c = (b/2)); // сначала вычисляем b/2, этот результат записываем в с, а потом перезаписываем b значением с
    console.log(`a=${a}, b=${b}, c=${c}`); //a=5, b=12.5, c=12.5
}

// 2 Number: age
// С помощью prompt спросить у пользователя его возраст и подсчитать год рождения.
// Год рождения вывести с помощью alert.
function task2(){
    console.clear();
    console.log("HW001 task2");
    const age=parseFloat(prompt("Введите, пожалуйста, возраст (положительное число от 0 до 200)"));
    if(isNaN(age) || age<0 || age>200){
        alert("Введено недопустимое значение! Пробуйте ещё.");
    }
    else {
        const currentYear=(new Date()).getFullYear();
        console.log(`Ваш возраст ${age}. Предполагаю, что ваш год рождения ${currentYear-1-Math.floor(age)}` );
    }
}

// 3 Number: temperature
//С помощью prompt спросить у пользователя температуру в градусах Цельсия и перевести их в Фаренгейты и/или наоборот.
function task3(){
    console.clear();
    console.log("HW001 task3");
    const currentT=prompt("Введите температуру в виде значения температуры и буквы с или f в конце в зависимости от используемой шкалы");
    const typeT=currentT[currentT.length-1].toLowerCase();
    const valueT=parseFloat(currentT);
    if(isNaN(valueT) || (typeT!='c' && typeT!='f')){
        alert('Вы не ввели число или не указали шкалу, в которой задана температура');
    }
    else {
        console.log(`Вы ввели температуру ${valueT} градусов ${(typeT==='c'?'по Цельсию': 'по Фаренгейту')}`);
        console.log(`Это соответствует температуре ${typeT==='f'?((5/9)*(valueT-32)).toFixed(1):((9/5)*valueT+32).toFixed(1)} градусов ${(typeT==='f'?'по Цельсию': 'по Фаренгейту')}`);
    }
}

// 4 Number: divide
// Сделайте калькулятор для расчета деления нацело двух чисел. Используйте Math.floor или альтернативы.
function task4(){
    console.clear();
    console.log("HW001 task4");
    const firstNumber=parseFloat(prompt('Введите первое целое число')), secondNumber=parseFloat(prompt('Введите второе целое число'));
    if (isNaN(firstNumber) || isNaN(secondNumber)){
        alert(`Вы ввели некорректные данные, попробуйте заново!`);
    }
    else {
        console.log(`Вы ввели числа ${firstNumber} и ${secondNumber}`);
        const result=firstNumber/secondNumber;
        console.log(`Результат деления нацело ${result>=0?Math.floor(result):Math.ceil(result)}`);
    }
}

// 5 Number: currency
// Напишите код, который вычисляет обмен валют по курсу, заданному с помощью константы const rate = КУРС ВАЛЮТЫ 
// Считайте значение в одной валюте с помощью prompt, после чего умножите/поделите это число на rate. 
// Выведите результат используя alert. Ограничьте количество знаков после запятой двумя (нас не волнуют дробные части центов/копеек)
function task5(){
    console.clear();
    console.log('HW001 task5');
    const rate=parseFloat(prompt('Введите текущий курс валют'));
    const value=parseFloat(prompt('Введите сумму, которую переведём по заданному курсу в другую валюту'));
    if( isNaN(rate) || isNaN(value) ){
        alert(`Вы ввели некорректные данные, попробуйте заново!`);
    }
    else{
        console.log(`Вы ввели сумму в первой валюте ${value.toFixed(2)}, обменный курс ${rate.toFixed(2)}`);
        console.log(`Сумма во второй валюте будет составлять ${(value*rate).toFixed(2)}`);
    }
}

// 6 Number: RGB
// С помощью prompt организуйте ввод трех констант red, green, blue в десятичной системе. 
// Создайте из них CSS-цвет в формате #RRGGBB используя шестнадцатиричную систему счисления. 
// Значения меньше 16ти пока можно не учитывать.
function testRange(num){
    if(num<0 || num>255){
        return false;
    }
    return true;
}
function task6(){
    console.clear();
    console.log("HW001 task6");
    const r=parseInt(prompt("Введите значение красного цвета в диапазоне от 0 до 255"));
    const g=parseInt(prompt("Введите значение зеленого цвета в диапазоне от 0 до 255"));
    const b=parseInt(prompt("Введите значение синего цвета в диапазоне от 0 до 255"));
    if(isNaN(r)||isNaN(g)||isNaN(b) || !(testRange(r) && testRange(g) && testRange(b))){
        alert("Вы ввели значение цвета вне диапазона, попробуйте ещё раз!");
    }
    else{
        console.log(`Вы ввели следующие значения компонент цвета: красный:${r} зеленый:${g} синий:${b}`);
        console.log(`Цвет для CSS:#${r>15?r.toString(16):'0'+r.toString(16)}${g>15?g.toString(16):'0'+g.toString(16)}${b>15?b.toString(16):'0'+b.toString(16)}`);
    }
}

// 7 Number: flats
// Сделайте калькулятор, который позволит вам исходя из информации о количества этажей в доме и количества квартир на этаже
//  находить подъезд и этаж определенной квартиры по её номеру.
//  Например для 9этажного дома по 4 квартиры на этаж 81 квартира находится на 3м этаже третьего .
function testData(num){
    if(isNaN(num) || num<=0){
        return false;
    }
    return true;
}
function task7(){
    console.clear();
    console.log("HW001 task7");
    const floors=parseInt(prompt('Введите сколько этажей в доме'));
    const amountAppPerFloor=parseInt(prompt('Введите количество квартир на этаже'));
    const numberApp=parseInt(prompt('Введите номер квартиры'));
    if(testData(floors) && testData(amountAppPerFloor) && testData(numberApp)){
        //вычисляем
        const entrance=Math.floor(numberApp/(floors*amountAppPerFloor))+1;
        console.log(`В доме ${floors} эт., на каждом этаже ${amountAppPerFloor} кв.`);
        // debugger;
        console.log(`Квартира номер  ${numberApp} находится в подъезде номер ${entrance} на ${Math.ceil((numberApp-(entrance-1)*floors*amountAppPerFloor)/amountAppPerFloor)} эт.`);
    }
    else {
        alert(`Вы ввели некорректные данные, попробуйте заново!`);
    }
}