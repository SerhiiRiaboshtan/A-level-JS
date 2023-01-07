/* Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити 
    вагу в кілограмах на квадрат висоти людини за метри. */
function task1(){
    let weight = '88.3';
    let height = '1.75';
    const bmi = parseFloat(weight)/(parseFloat(height)**2);
    console.clear();
    console.log("Task1");
    console.log(bmi.toFixed(1)); // 28.8
}

/*Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. Значення змінної value.
Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевірте, що буде в консолі при значеннях 27.3 і 27.9.*/
function task2(){
    let value = prompt("Enter a number");
    console.clear();
    console.log("Task2");
    console.log("Введено: "+value)
    console.log("Result Math.floor is: "+Math.floor(value));
    console.log("Result Math.ceil is: "+Math.ceil(value));
    console.log("Result Math.round is: "+Math.round(value));
}

/* Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) у рядок у форматі годин і хвилин HH:MM.
70 покаже 01:10
450 покаже 07:30
1441 покаже 24:01
const totalMinutes = 70; */
function task3(){
    console.clear();
    console.log("Task3");
    let inputMinutes = prompt("Введите количество минут");
    console.log(`Введено: ${inputMinutes} мин.`);
    let intMinutes=parseInt(inputMinutes);
    let minutes=intMinutes%60;
    let hours="";
    // console.time();
    hours=(intMinutes-minutes)/60;
    // console.timeEnd();
    // console.time();
    // hours=Math.floor(intMinutes / 60);
    // console.timeEnd();
    if(hours<10) hours="0"+hours;
    if(minutes<10) minutes="0"+minutes;
    console.log(`${hours}:${minutes} (Преобразовано в формат HH:MM)`);
}

/* Вивести на екран модальне вікно prompt з повідомленням "Enter the number".
Результат виконання модального вікна записати в змінну, значення якої вивести в консоль. */
function task4(){
    let value = prompt("Enter a number");
    console.clear();
    console.log("Task4");
    console.log("Введено: "+value)
}

/* За допомогою модального вікна prompt отримати від користувача два числа.
Вивести в консоль суму, різницю, добуток, поділ та залишок від поділу їх один на одного. */
function task5(){
    let firstNumber=parseFloat(prompt("Input first number"));
    let secondNumber=parseFloat(prompt("Input second number"));
    console.clear();
    console.log("Task5");
    console.log("Первое число: "+firstNumber);
    console.log("Второе число: "+secondNumber);
    let sum=firstNumber+secondNumber;
    let sub=firstNumber-secondNumber;
    let mul=firstNumber*secondNumber;
    let div=firstNumber/secondNumber;
    let rest=firstNumber%secondNumber;
    console.log("Сумма чисел: "+ sum);
    console.log("Разница чисел: "+ sub);
    console.log("Произведение чисел: "+ mul);
    console.log("Деление чисел: "+ div);
    console.log("Остаток от деления чисел: "+ rest);
}