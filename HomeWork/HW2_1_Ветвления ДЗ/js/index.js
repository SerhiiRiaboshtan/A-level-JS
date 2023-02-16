// 1 blocks
function task1(){
    console.clear();
    console.log("Homework 2.1 Ветвления task1");
    container.innerHTML='';
    let a = 10
    {
      let b = 20
      {
          let c = 30
          //какие тут будут значения переменных a,b,c,d 10 20 30 undefined
          console.log('a='+a+' b='+b+' c='+c);
          b++
          a *= 10
      }
      {
          let c = 50
          //какие тут будут значения переменных a,b,c,d 100 21 50 udefined
          console.log('a='+a+' b='+b+' c='+c);
          b += 500
      }
      {
          const a = 100500
          const d = "value"
          //какие тут будут значения переменных a,b,c,d 100500 521 undefined 'value'
          console.log('a='+a+' b='+b+ ' d='+d);
          {
              let a = -50
              b     = 1000
              //какие тут будут значения переменных a,b,c,d -50 1000 undefined 'value'
              console.log('a='+a+' b='+b+ ' d='+d);
          }
          //какие тут будут значения переменных a,b,c,d 100500 1000 undefined 'value'
          console.log('a='+a+' b='+b+ ' d='+d);
      }
      //какие тут будут значения переменных a,b,c,d 100 1000 undefined undefined
      console.log('a='+a+' b='+b);
    }
//какие тут будут значения переменных a,b,c,d 100 undefined undefined undefined
    console.log('a='+a);
}

// 2 comparison if
// Разберите пример
// var age = +prompt("Сколько вам лет?","");
// if (age < 18){
//     alert("школьник");
// }
// else if (age > 18 && age < 30){
//     alert("молодеж");
// }
// else if (age > 30 && age < 45){
//     alert("зрелость");
// }
// else if (age > 45 && age < 60){
//     alert("закат");
// }
// else if (age > 60){
//     alert("как пенсия?");
// }
// else {
//     alert("то ли киборг, то ли KERNESS"); 
// }
// Добавьте условие отрицательного возраста в пример выше. 
// Расставьте недостающие (но синтаксически необязательные) фигурные скобки. Выкиньте лишнее из текущего кода
function task2(){
    console.clear();
    console.log("Homework 2.1 Ветвления task2");
    container.innerHTML='';
    var age = +prompt("Сколько вам лет?","");
    if (age<0){
        alert("Вы ещё не родились!!!");
    }
    else {
        if (age < 7){
            alert("дошкольник");
        }    
        else {
            if (age < 18){
                alert("школьник");
            }
            else {
                if (age >= 18 && age < 30){
                    alert("молодеж");
                }
                else {
                    if (age >= 30 && age < 45){
                        alert("зрелость");
                    }
                    else {
                        if (age >= 45 && age < 60){
                            alert("закат");
                        }
                    else{
                        alert("как пенсия?");
                        }
                    }
                }
            }
        }
    }
}

// 3 switch: sizes
// Сделайте задание 'Comparison: sizes'(Сделайте перевод перевод из нашей системы размеров
//  в американскую или любую на выбор. Используйте prompt, условия сравнения и alert.), используя switch.
function task3(){
    console.clear();
    console.log("Homework 2.1 Ветвления task3");
    container.innerHTML='';
    const testArr=[40, 42, 44, 46, 48, 50, 52, 54]; //массив с допустимыми размерами (чтобы проще проверить, что введен размер из списка);
    const inputSize=parseInt(prompt("Введите один из местных размеров одежды (возможные размеры 40, 42, 44, 46, 48, 50, 52, 54)"));
    switch(!isNaN(inputSize) && testArr.includes(inputSize)){
        case false:
            alert("Вы ввели недопустимый размер");
            break;
        case true:
            switch(inputSize){
                case 40: 
                    alert(`Вы ввели ${inputSize} размер в нашей системе, что соответствует размеру 6 (или S) в США`);
                    break;
                case 42: 
                    alert(`Вы ввели ${inputSize} размер в нашей системе, что соответствует размеру 8 (или M) в США`);
                    break;
                case 44: 
                    alert(`Вы ввели ${inputSize} размер в нашей системе, что соответствует размеру 10 в США`);
                    break;
                case 46: 
                    alert(`Вы ввели ${inputSize} размер в нашей системе, что соответствует размеру 12 (или L) в США`);
                    break;
                case 48: 
                    alert(`Вы ввели ${inputSize} размер в нашей системе, что соответствует размеру 14 в США`);
                    break;
                case 50: 
                    alert(`Вы ввели ${inputSize} размер в нашей системе, что соответствует размеру 16 (или XL) в США`);
                    break;
                case 52: 
                    alert(`Вы ввели ${inputSize} размер в нашей системе, что соответствует размеру 18 в США`);
                    break;
                case 54: 
                    alert(`Вы ввели ${inputSize} размер в нашей системе, что соответствует размеру 20 (или XXL) в США`);
                    break;
            }
    }
}

// 4 switch: if
// Перепишите пример ниже, используя if.
// let color = prompt("Введите цвет","");
// switch (color){
//     case "red": document.write("<div style='background-color: red;'>красный</div>");
//     case "black": document.write("<div style='background-color: black; color: white;'>черный</div>");
//                 break;
//     case "blue": document.write("<div style='background-color: blue;'>синий</div>");
//     case "green": document.write("<div style='background-color: green;'>зеленый</div>");
//                 break;
//     default: document.write("<div style='background-color: gray;'>Я не понял</div>");
// }
function task4(){
    console.clear();
    console.log("Homework 2.1 Ветвления task4");
    container.innerHTML='';
    let color = prompt("Введите цвет","");    
    if(color==="red"){
        document.write("<div style='background-color: red;'>красный</div>");
        document.write("<div style='background-color: black; color: white;'>черный</div>");
    }
    else if(color==="black"){
        document.write("<div style='background-color: black; color: white;'>черный</div>");
    }
    else if(color==="blue"){
        document.write("<div style='background-color: blue;'>синий</div>");
        document.write("<div style='background-color: green;'>зеленый</div>");
    }
    else if(color==="green"){
        document.write("<div style='background-color: green;'>зеленый</div>");
    }
    else {
        document.write("<div style='background-color: gray;'>Я не понял</div>");
    }    
}

// 5 noswitch
// Напишите функцию noSwitch, которая принимает объект со значениями-функциями,
//  ключ для объекта и запускает одну из функций из объекта если ключ найден, иначе - запускает default:
// const noSwitch = (key, cases, defaultKey='default') => {
//     //проверка наличия key в cases
//     //если есть - достать значение по ключу. это будет функция. Запустить ее
//     //если нет - извлечь из объекта cases значение по ключу, имя которого лежит в переменной defaultKey. Запустить 
//     //пущай функция noSWitch возвращает то, что возвращает одна из функций из объекта
// }
// const drink = prompt("Что вы любите пить")
// noSwitch(drink, {
//     воду: () =>  console.log('Самый здоровый выбор!'),
//     чай(){ 
//         console.log('Вкусная и полезная штука. Не переусердствуйте с сахаром')
//     },
//     "пиво": () => console.log('Хорошо летом, да в меру'),
//     виски: function(){
//         console.log('Да вы, батенька, эстет! Не забудьте лед и сигару')
//     },
//     default(){
//         console.log('шото я не понял')
//     }
// })
function task5(){
    console.clear();
    console.log("Homework 2.1 Ветвления task5");
    container.innerHTML='';
    const noSwitch = (key, cases, defaultKey='default') => {
        if(!Object.keys(cases).includes(key)) key=defaultKey;
        cases[key]();
    }
    const drink = prompt("Что вы любите пить");
    noSwitch(drink, {
        воду: () =>  console.log('Самый здоровый выбор!'),
        чай(){ 
            console.log('Вкусная и полезная штука. Не переусердствуйте с сахаром')
        },
        "пиво": () => console.log('Хорошо летом, да в меру'),
        виски: function(){
            console.log('Да вы, батенька, эстет! Не забудьте лед и сигару')
        },
        default(){
            console.log('шото я не понял')
        }
        })
}

// 6 closure calc
// fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//      .then(data => {
//             //эта функция запускается когда данные скачиваются.
//             //остальной код работает РАНЬШЕ.
//             //только ТУТ есть переменная data со скачанными данными
//             console.log(data) //изучите структуру, получаемую с сервера в консоли
//         })
// Напишите внутри анонимной функции, переданной в then (data =>):
//     цикл, который перебирает курсы;
//     на каждой итерации создается кнопка (document.createElement)
//     текст кнопки - название валюты (innerHTML или innerText)
//     Назначьте обработчик события на этой кнопке (onclick = () => {.....}). Функция-обработчик должна быть написана прямо в теле цикла
//     Обработчик должен спрашивать сумму используя prompt и переводить эту суммы из валюты, написанной на кнопке в USD
// Найдите замыкания. Для доступа к валютам из data.rates используйте [], . тут не поможет. 
// Кнопки добавляйте в специальный контейнер (div например), созданный в HTML, или, на худой конец, в body
function task6(){
    console.clear();
    console.log("Homework 2.1 Ветвления task6");
    container.innerHTML='';
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {
            for(const key in data.rates){
                const button=document.createElement('button');
                button.innerText=key;
                button.onclick=()=>{
                    alert(`Вы сможете купить $${(parseFloat(prompt(`Введите сумму для перевода из валюты ${key} в доллары США`))/data.rates[key]).toFixed(2)}`);
                }
                container.append(button);
            }
        })
}

// 7 closure calc 2
// Создайте HTML файл с :
// <select id='from'> - исходная валюта
// <select id='to'> - валюта в которую происходит обмен
// <div id='rate'> - кросскурс между валютами
// <input type='number' id='amount' /> - сумма в исходной валюте
// <div id='result'> - сумма в валюте, в которую хотим поменять
// Используя заготовку из предыдущего задания, наполните select-ы тэгами option с названиями валют, используя цикл
// document.createElement
// innerText для option
// from.append или to.append
// За пределами цикла назначьте обработчики onchange для элементов select и oninput для элемента input, используя их id.
//  По этим событиям обновляйте текст в div#rate и div#result
// Для чтения текущего значения select используйте свойство value: from.value или to.value
function task7(){
    console.clear();
    console.log("Homework 2.1 Ветвления task7");
    let rates={};
    container.innerHTML='<br><p>Исходная валюта:</p><select id=\'from\'>From</select><br><p>Желаемая валюта:</p><select id=\'to\'><p>To</p></select><br><br><p>Крос-курс:</p><div id=\'rate\'></div><br><p>Сумма на обмен:</p><input type=\'number\' id=\'amount\' /><p>Итого получилось:</p><div id=\'result\'></div>';
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {
            for(const key in data.rates){
                const selectFrom=document.createElement('option');
                selectFrom.innerText=key;
                from.append(selectFrom);
                const selectTo=document.createElement('option');
                selectTo.innerText=key;
                to.append(selectTo);
                rates[key]=data.rates[key];
            }
            calcCross();
        })
    from.onchange=()=>{ calcCross(); calcAmount();}
    to.onchange=()=>{ calcCross(); calcAmount(); }
    amount.oninput=()=>{calcAmount();}
    function calcCross() {rate.innerHTML=(rates[to.value]/rates[from.value]).toFixed(2);} // Вычисление крос-курса
    function calcAmount(){amount.value!==0?result.innerHTML=(amount.value*rates[to.value]/rates[from.value]).toFixed(2):0;}
}

// 8 countries and cities
// fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json').then(res => res.json())
//      .then(data => {
//             //эта функция запускается когда данные скачиваются.
//             //остальной код работает РАНЬШЕ.
//             //только ТУТ есть переменная data со скачанными данными
//             console.log(data) //изучите структуру, получаемую с сервера в консоли
//         })
// По аналогии с предыдущем заданием, реализуйте интерфейс выбора страны и города:
// по закрузке данных наполняйте select#countries элементами option с названиями стран;
// так же назначьте обработчик события onchange в select#countries, который:
// удаляет старый контент select#cities (достаточно занести в innerHTML или innerText пустую строку)
// добавляет в select#cities элементы option с городами из выбранной только что страны.
// Таким образом, при изменении страны будет меняться список городов в select#cities
function task8(){
    console.clear();
    console.log("Homework 2.1 Ветвления task8");
    info={};
    container.innerHTML='<br><p>Страна:</p><select id=\'country\'>From</select><br><p>Города:</p><select id=\'towns\'><p>To</p></select>'
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json').then(res => res.json())
     .then(data => {
            for(key in data){
                const selectCountry=document.createElement('option');
                selectCountry.innerText=key;
                country.append(selectCountry);
                const arr=[];
                for(city of data[key]){
                    arr.push(city);
                }
                info[key]={key, arr};
            }
            countryChange(country.value);
        })
    function countryChange(country){ // Заполняем список городов выбранной страны
        towns.innerHTML='';
        for(key of info[country].arr){
            const selectTown=document.createElement('option');
            selectTown.innerText=key;
            towns.append(selectTown);
        }        
    }
    country.onchange=()=>{countryChange(country.value)}
}