// 1) Даний об'єкт з містами та країнами. Вивести масив значення в якому 
//    будуть рядки перетворені на цей формат: <Столиця> - це <Країна>.
function task1(){
    console.clear();
    console.log("HW04 task1");
    const capitalName = {
        Kyiv:       'Ukraine',
        Warsaw:     'Poland',
        Slovenia:   'Ljubljana',
        Berlin:     'Germany',
        Stockholm:  'Sweden'
    }
    for(const key in capitalName){
        console.log(`Capital of ${capitalName[key]} is a ${key}`);
    }
}

// 2) Створити функцію яка виведе багатовимірний масив A. 
//    Даний масив містить список інших масивів B. Масиви B повинні містити по 3 значення. 
//    Та вивести його максимальне значення
function task2(){
    console.clear();
    console.log("HW04 task2");
    const arr=[[25,10,77], [19,12,77], [15,07,00], [13,07,11], [26,12,16]];
    let maxValue=0;
    arr.forEach(element => {
        let arrString='';
        for(key in element){
            if(element[key]>maxValue) maxValue=element[key];
            //console.log(`${element[key]}`); //Это если надо вывести все значения из массива в столбик
            arrString+=`${element[key]} `;
        }
        //console.log(element);
        console.log(arrString); 
    });
    console.log(`Max value is ${maxValue}`);
}

// 3) Створити об'єкт із назвами днів тижня. Де ключами будуть uk і en, a значенням 
//    властивості uk буде масив із назвами днів тижня українською, а en - англійською. 
//    Після написати функцію яка буде виводити в консоль назву дня тижня, користуючись 
//    вище створеним об'єктом. Усі дні тижня починаються з 1 і закінчуються цифрою 7 
//    (1- понеділок, 7 - неділя). Функція отримує змінну lang – назву мови дня тижня та змінну day – число дня тижня.
function task3(){
    console.clear();
    console.log("HW04 task3");
    const weekDays= {
        ua: ['Пн', 'Вт', 'Cp', 'Чт', 'Пт', 'Сб', 'Вс'],
        en: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
    }
    const day=parseInt(prompt('Input day of week (number from 1 to7)'));
    const lang=prompt('Input language (en - english, ua - українська)');
    if(day!=NaN && day>0 && day<8 && (lang==='en'|| lang==='ua')){
        if(lang==='ua') {
            console.log(weekDays.ua[day-1]);
        }
        else console.log(weekDays.en[day-1]);
    }
    else alert('Input error!');
}

// 4) Створіть функцію, яка повертає суму двох найменших позитивних чисел із масиву 
//    мінімум 4 позитивних цілих чисел. Не передаються числа з плаваючою комою або непозитивні цілі числа.
function task4(){
    console.clear();
    console.log("HW04 task4");
    const arr = [5, 7, 9, 11, 30, 4, 6, 80, 8];
    let Min1=arr[0];
    let Min2=arr[0];
    let indexMin1=0;
    console.log(`Заданный массив ${arr}`);
    //Находим самое минимальное и максимальное числа. Запоминаем индекс минимального числа
    for(let i=1; i<arr.length; i++){
        if(arr[i]<Min1) Min1=arr[i];
        if(arr[i]>Min2) Min2=arr[i];
    }
    indexMin1=arr.indexOf(Min1);
    //Ищем второе минимальное число...
    for(let i=0; i<arr.length; i++){
        if(i!=indexMin1 && arr[i]<=Min2) Min2=arr[i];   
    }
    console.log(`Первое маленькое число ${Min1}, второе ${Min2}, их сумма равна ${Min1+Min2}`);
}

// 5) Даний масив одиниць і нулів, перетворіть еквівалентне двійкове значення ціле число.
//    Наприклад: [0, 0, 0, 1] розглядається як 0001 двійкове уявлення 1.
function task5(){
    console.clear();
    console.log('HW04 task5');
    const arr = [1, 1, 1, 1, 0, 1, 1, 1, 0 , 0, 1];
    let strArr='';
    for(i=0; i<arr.length; i++) strArr+=arr[i];
    console.log(`В массиве было двоичное число ${strArr} в десятичной системе оно соответствует ${parseInt(strArr, 2)}`);
}
