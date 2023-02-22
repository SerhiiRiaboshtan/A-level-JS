// 1 Confirms
// Сохраните в массив ответы на вопросы, заданные с помощью confirm. Используйте литеральный (декларативный) синтаксис массивов ([....,....,....])
function task1(){
    console.clear();
    console.log("Homework 1.4 task1");
    const arr=[confirm('Question1'), confirm('Question2'), confirm('Question3')];
    console.log(`Вы ответили: ${arr}`);
}

// 2 Prompts
// Сохраните в массив ответы на вопросы, заданные с помощью prompts. Используйте доступ к массиву по индексу и присвоение (arr[....] = ....)
function task2(){
    console.clear();
    console.log("Homework 1.4 task2");
    const arr=[];
    for(let i=0; i<3; i++) arr[i]=prompt(`Введите ответ на вопрос №${i+1}`);
    console.log(`Вы ответили: ${arr}`);
}

// 3 Item access
// Попросите пользователя ввести (prompt) индекс в массиве. Выведите значение элемента по этому индексу. Попробуйте так же ввести индекс "length".
function task3(){
    console.clear();
    console.log("Homework 1.4 task3");
    const arr=["David", "Nick", "Syd", "Roger", "Richard"];
    const index=(prompt('Введите индекс массива от 0 до 4 или length'));
    const indexDigital=parseInt(index);
    if((index!=='length' && isNaN(indexDigital)) || (indexDigital<0 || indexDigital>arr.length-1)){
        alert('Индекс вне диапазона!');
    }else if(index==='length') {
        alert('В заданном массивае '+arr.length+' эл.')
    }else alert(`Элемент массива с индексом ${indexDigital} вот такой: ${arr[indexDigital]}`);
}

// 4 Item change
// Попросите пользователя ввести (prompt) индекс в массиве, а так же значение для этого индекса. Присвойте в введенный индекс введенное значение
function task4(){
    console.clear();
    console.log("Homework 1.4 task4");
    const arr=["David", "Nick", "Syd", "Roger", "Richard"];
    const index=(prompt('Введите индекс массива (число>0)'));
    const indexDigital=parseInt(index);
    if(isNaN(indexDigital) || indexDigital<0){
        alert('Индекс вне диапазона!');
    }else {
        console.log('arr before', arr);
        arr[indexDigital]=prompt(`Введите значение элемента массива с индексом ${indexDigital}`);
        alert(`Элемент массива с индексом ${indexDigital} вот такой: ${arr[indexDigital]}`);
        console.log('arr after', arr);
    }
}

// 5 Multiply table
// Создайте таблицу умножения 5x5 используя декларативный синтаксис вложенных массивов const arr = [[....], [....], [....], .....]. 
// Числа во вложенных массивах должны быть равны произведению индекса внешнего массива на индекс внутреннего массива: arr[2][3] === 6
function task5(){
    console.clear();
    console.log("Homework 1.4 task5");
    const arr=[];
    for(i=0; i<5; i++){
        tempArr=[];
        for(j=0; j<5; j++){
            tempArr[j]=i*j;
        }
        arr[i]=tempArr;
    }
    console.log(arr);
}

// 6 Multiply table slice
// Используя slice создайте массив массивов (другую таблицу/матрицу) из таблицы умножения, в которой не будет нулей
function task6(){
    console.clear();
    console.log("Homework 1.4 task6");
    const newArr=[];
    const arr=[];
    for(i=0; i<=5; i++){
        const tempArr=[];
        for(j=0; j<=5; j++){
            tempArr[j]=i*j;
        }
        arr[i]=tempArr;
    }
    for(i=0; i<5; i++){
        const tempArr=arr[i].slice(1);
        newArr[i]=tempArr;
    }
    console.log(newArr.slice(1));
}

// 7 IndexOf Word
// Спросите у пользователя строку из нескольких слов. Спросите у него искомое слово. 
// Выведите, каким по счету является это слово в строке из нескольких слов. 
// Если слово не найдено, выведите сообщение об этом (а не -1)
function task7(){
    console.clear();
    console.log("Homework 1.4 task7");
    const str=prompt('Введите строку из нескольких слов');
    const str1=prompt('Введите слово для поиска');
    const index=str.indexOf(str1);
    if(index===-1){
        console.log(`В строке "${str}" подстрока "${str1}" не найдена`)
    } else console.log(`В строке "${str}" подстрока "${str1}" найдена на ${index} позиции`);
}

// 8 Reverse
// Добавьте в массив пять введенных пользователем через prompt элементов(используйте push).
//  Создайте другой массив с этими же элементами в обратном порядке. Для этого извлекайте элементы из первого массива используя pop, добавляйте их во второй используя push
function task8(){
    console.clear();
    console.log("Homework 1.4 task8");
    const arr=[];
    const oldArr=[];
    const newArr=[];
    for(i=0; i<5; i++) {arr.push(prompt(`Введите ${i+1} элемент`)); oldArr[i]=arr[i];}
    for(i=0; i<5; i++) newArr.push(arr.pop());
    console.log("Ввели массив: ", oldArr);
    console.log("Получили массив: ", newArr);
}

// 9 Reverse 2
// Переверните второй массив из предыдущего задания еще раз (последовательность будет как в первом массиве), используя shift и unshift
function task9(){
    const arr=[];
    const oldArr=[];
    const newArr=[];
    for(i=0; i<5; i++) {arr.push(prompt(`Введите ${i+1} элемент`)); oldArr[i]=arr[i];}
    for(i=0; i<5; i++) newArr.push(arr.pop());
    console.log("Ввели массив с помощью push: ", oldArr);
    console.log("Получили реверсированный массив с помощью pop и push: ", newArr);
    for(i=0; i<5; i++) arr.unshift(newArr.shift());
    console.log("Получили исходный массив с помощью shift и unshift: ", arr);
}

// 10 Copy
// Скопируйте массив созданный в задании Multiply table неглубоко
function task10(){
    console.clear();
    console.log("Homework 1.4 task10");
    const arr=[];
    let newArr=[];
    for(i=0; i<5; i++){
        tempArr=[];
        for(j=0; j<5; j++){
            tempArr[j]=i*j;
        }
        arr[i]=tempArr;
    }
    newArr=arr.slice();
    console.log("Исходный массив: ", arr);
    console.log("Неглубокая копия массива: ", newArr);
}

// 11 Deep Copy
// Скопируйте массив созданный в задании Multiply table включая вложенные массивы (глубокая копия)
function task11(){
    console.clear();
    console.log("Homework 1.4 task11");
    const arr=[];
    const newArr=[];
    for(i=0; i<5; i++){
        tempArr=[];
        for(j=0; j<5; j++){
            tempArr[j]=i*j;
        }
        arr[i]=tempArr;
    }
    for(i=0; i<arr.length; i++){
        if(typeof(arr[i])==="object"){
            const tempArr=[];
            for(j=0; j<arr[i].length; j++) tempArr.push(arr[i][j]);
            newArr.push(tempArr);
        } else newArr.push(arr[i]);
    }
    console.log("Исходный массив: ", arr);
    console.log("Глубокая копия массива (максимум два уровня): ", newArr);
}
 
// 12 Array Equals
// Создайте код, в котором будет две переменных с массивами (arr1 и arr2), которые равны друг другу (arr1 === arr2)
function task12(){
    console.clear();
    console.log("Homework 1.4 task12");
    const arr1=[];
    const arr2=arr1;
    console.log(arr1===arr2);
}

// 13 Flat
// Соберите все элементы всех вложенных массивов из задания Multiply table в один массив. Его длина должна быть равна 25. Используйте spread-оператор
function task13(){
    console.clear();
    console.log("Homework 1.4 task13");
    const arr=[];
    let newArr=[];
    for(i=0; i<5; i++){
        tempArr=[];
        for(j=0; j<5; j++){
            tempArr[j]=i*j;
        }
        arr[i]=tempArr;
    }
    for(i=0; i<arr.length; i++){
        newArr.push(...arr[i]);
    }
    console.log("Исходный массив: ", arr);
    console.log("Массив в одну строку: ", newArr);
}

// 14 Destruct
// Извлеките первую, пятую и девятую букву из строки, введенной пользователем, используя деструктуризацию. Выведите их
function task14(){
    console.clear();
    console.log("Homework 1.4 task14");
    const str=prompt('Введите слово/предложение не меньше 9 символов');
    if(str.length>=9){
        const [a,,,,b,,,,c]=str;
        console.log(`Первый символ:${a}, пятый:${b}, девятый:${c}`);
    } else alert(`Вы ввели:${str.length} симв., а вас просили не меньше 9!`);
    
}

// 15 Destruct default
// Извлеките вторую, четвертую и пятую букву из строки, введенной пользователем, используя деструктуризацию. Если в строке таких букв не окажется задайте переменным значение по умолчанию ! (восклицательный знак). Выведите эти переменные
function task15(){
    console.clear();
    console.log("Homework 1.4 task15");
    const str=prompt('Введите слово/предложение');
    const [,a='!',,b='!',c='!']=str;
        console.log(`Второй символ:${a}, четвертый:${b}, пятый:${c}`);
}

// 16 Multiply table rest
// Реализуйте задание Multiply table slice, используя оператор rest при деструктуризации. Используйте вложенную деструктуризацию. 
//После получения четырех обрезанных вложенных массивов - соберите общий массив без нулей
function task16(){
    console.clear();
    console.log("Homework 1.4 task16");
    const arr=[];
    let newArr=[];
    let tempArr=[];
    for(i=0; i<5; i++){
        tempArr=[];
        for(j=0; j<5; j++){
            tempArr[j]=i*j;
        }
        arr[i]=tempArr;
    }
    [temp, ...newArr1]=arr[1];
    [temp, ...newArr2]=arr[2];
    [temp, ...newArr3]=arr[3];
    [temp, ...newArr4]=arr[4];
    newArr=[newArr1, newArr2, newArr3, newArr4];
    console.log("Исходный массив: ", arr);
    console.log("Пересобранный массив: ", newArr);
}

// 17 For Alert
// Есть массив ["John", "Paul", "George", "Ringo"]. Выведите каждое имя отдельным alert(), используя цикл for .... of
function task17(){
    console.clear();
    console.log("Homework 1.4 task17");
    const arr=["John", "Paul", "George", "Ringo"];
    for(let key of arr) alert(key);
}

// 18 For Select Option
// const currencies = ["USD", "EUR", "GBP", "UAH"]
// let   str = "<select>"
// for (let currency of currencies){
// //    YOUR MAGIC HERE
// }
// str+= "</select>"
// document.write(str) //document.write отобразит ваш HTML на странице
// Используя заготовку выше, создайте выпадающий список с валютами. Элементы выпадающего списка создаются с помощью тэга <option>
function task18(){
    console.clear();
    console.log("Homework 1.4 task18");
    const currencies = ["USD", "EUR", "GBP", "UAH"];
    let   str = "<select>";
    for (let currency of currencies){
        str+="<option>"+currency+"</option>";
    }
    str+= "</select>";
    document.write(str);
}

// 19 For Table Horizontal
// const names = ["John", "Paul", "George", "Ringo"]
// let   str = "<table>"
// for (let currency of currencies){
// //    YOUR MAGIC HERE
// }
// str+= "</table>"
// document.write(str) 
//document.write отобразит ваш HTML на страницеАналогично, добейтесь вывода имен в ячейки таблицы по горизонтали (одна строка с четырьмя ячейками)
function task19(){
    console.clear();
    console.log("Homework 1.4 task19");
    const names = ["John", "Paul", "George", "Ringo"];
    let   str = "<table>";
    for (let name of names){
        str+='<td>'+name+'</td>';
    }
    str+= "</table>";
    document.write(str); 
}

// 20 For Table Vertical
// const names = ["John", "Paul", "George", "Ringo"]
// let   str = "<table>"
// for (let name of names){
// //    YOUR MAGIC HERE
// }
// str+= "</table>"
// document.write(str) //document.write отобразит ваш HTML на странице
// Аналогично, добейтесь вывода имен в ячейки таблицы по вертикали(одна колонка с четырьмя строками, в каждой строке - одна ячейка)
function task20(){
    console.clear();
    console.log("Homework 1.4 task20");
    const names = ["John", "Paul", "George", "Ringo"];
    let   str = "<table>";
    for (let name of names){
        str+='<tr><td>'+name+'</td></tr>';
    }
    str+= "</table>";
    document.write(str);
    
}

// 21 For Table Letters
// const currencies = ["USD", "EUR", "GBP", "UAH"]
// let   str = "<table>"
// for (let currency of currencies){ //цикл создает строки
//     //одна итерация цикла создает ОДНУ СТРОКУ
//     console.log(currency)
//     for (let letter of currency){ //цикл создает ЯЧЕЙКИ в ОДНОЙ СТРОКЕ
//         //одна итерация цикла создает ОДНУ ЯЧЕЙКУ
//         console.log(letter)
//     }
// }
// str+= "</table>"
// document.write(str) //document.write отобразит ваш HTML на странице
// Используя заготовку выше, создайте таблицу 3x4. В каждой строке по три ячейки с буквами, четыре строки, так как 4 валюты в массиве.
function task21(){
    console.clear();
    console.log("Homework 1.4 task21");
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let   str = "<table>";
    for (let currency of currencies){ 
        str+='<tr>';
        for (let letter of currency){ 
            str+='<td>'+letter+'</td>';
        }
        str+='</tr>';
    }
    str+= "</table>";
    document.write(str);
}

// 22 For Multiply Table
// Выведите таблицу умножения 5x5 из задания Multiply table в таблицу, используя вложенные for .... of и document.write
function task22(){
    console.clear();
    console.log("Homework 1.4 task22");
    let arr=[];
    for(i=0; i<5; i++){
        tempArr=[];
        for(j=0; j<5; j++){
            tempArr[j]=i*j;
        }
        arr[i]=tempArr;
    }
    let   str = "<table>";
    for(let key of arr){
        str+='<tr>';
        for(let key1 of key){
            str+='<td>'+key1+'</td>';
        }
        str+='</tr>';    
    }
    str+= "</table>";
    document.write(str);
}

// 23 Function Capitalize
// Реализуйте задачу String: capitalize как отдельную функцию:
function capitalize(str){
    let result='';
    result=str[0].toUpperCase();
    for(i=1; i<str.length; i++) result+=str[i].toLowerCase();
    return result
}
function task23(){
    console.clear();
    console.log("Homework 1.4 task23");
    console.log(capitalize("cANBerRa"));
}

// 24 Map Capitalize
// Пусть пользователь вводит строку. Разбейте её по пробелам. Используя map и capitalize создайте массив в 
// котором каждое слово будет с большой буквы. Соберите массив в строку обратно
function task24(){
    console.clear();
    console.log("Homework 1.4 task24");
    let newArr=[];
    const str=prompt('Введите строку из несколькиз слов');
    const arr=str.split(' ');
    newArr=arr.map(x=>capitalize(x));
    console.log(newArr.join(' '));
}

// 25 Filter Lexics
// Пусть пользователь вводит строку. Разбейте её по пробелам. 
// Используя filter верните true если элемент массива не состоит в определенном массиве недопустимых слов.
// Если же элемент массива - недопустимое слово, функция, переданная в filter должна возвращать false. 
// Соберите массив в строку обратно.
function task25(){
    console.clear();
    console.log("Homework 1.4 task25");
    let newArr=[];
    const arrForbidden=['редиска', 'сосиска'];
    const str=prompt('Введите строку из несколькиз слов');
    const arr=str.split(' ');
    const result=arr.filter(word =>arrForbidden.indexOf(word)!==-1).length===0;
    if(result===true){
        console.log(arr.join(' '));
    } else  console.log('Вы ввели недопустимое слово!');
}

// 26 Beep Lexics
// Пусть пользователь вводит строку. Разбейте её по пробелам. 
// Используя map и тернарный оператор верните из функции слово без изменений, если оно не состоит 
// в каком-то другом массиве запрещенных слов. 
// Если же слово состоит в этом списке, функция должна вернуть слово BEEP. 
// Соберите массив обратно в строку через пробел. Таким образом вы сможете реализовать замену 
// нескольких запрещенных слов на BEEP.

function task26(){
    console.clear();
    console.log("Homework 1.4 task26");
    const arrForbidden=['редиска', 'сосиска'];
    let newArr=[];
    const str=prompt('Введите строку из несколькиз слов');
    const arr=str.split(' ');
    newArr=arr.map(word =>arrForbidden.indexOf(word)===-1?word:'BEEP');
    console.log(newArr.join(' '));  
}

// 27 Reduce HTML
// Реализуйте задачу For Select Option используя reduce:
// const currencies = ["USD", "EUR", "GBP", "UAH"]
// let str          = "<select>"
// str             += currencies.reduce( (a,b) => надо добавить к a <option> с b внутри, "")
// str             += "</select>"
function task27(){
    console.clear();
    console.log("Homework 1.4 task27");
    const currencies = ["USD", "EUR", "GBP", "UAH"]
    let str          = "<select>"
    str             += currencies.reduce( (a,b) =>{return a+"<option>"+b+"</option>";}, '');
    str             += "</select>"
    document.write(str);
}

// 28 For Brackets Hell Check
// Пусть пользователь вводит строку с любыми парными скобками в ней, например [ [ ] () {{{[]()}}}]. 
// Найдите место возможной ошибки (непарности) в этой строке. Для этого, каждую открывающую скобку добавляйте 
// в стек. При нахождении закрывающей она должна соответствовать вершине стека. Если она не соответстует, 
// выведите сообщение об ошибке и позицию в строке. Если соответствует - уберите скобку из стека. 
// Если строка ошибок не содержит, порадуйте пользователя.
function testPairBreckets(BracketOpen, BracketClose){
    if(BracketOpen==='\(' && BracketClose!=='\)') return false;
    if(BracketOpen==='\[' && BracketClose!=='\]') return false;
    if(BracketOpen==='\{' && BracketClose!=='\}') return false;
    return true;
}
function task28(){
    console.clear();
    console.log("Homework 1.4 task28");
    const line=prompt('Введите какое-нибудь выражение с кучей скобочек');
    const bracketsStack=[];
    let counter=0;
    let error=false;
    for(let character of line){
        if(character==='\(' || character==='\[' ||character==='\{'){
            bracketsStack.push(character);
        }else if(bracketsStack.length>0 && (character==='\)' || character==='\]' || character==='\}')){
            const tempBrecket=bracketsStack.pop();
            if(!testPairBreckets(tempBrecket, character)){
                alert(`У вас проблема со скобочкой в позиции ${counter+1}`);
                break;
            };
        }else if(character==='\)' || character==='\]' || character==='\}') error=true;
        counter++;
    }
    debugger;
    if(bracketsStack.length===0 && !error){
        alert('Всё Ок!');
    } else alert('Не все скобочки закрыты!');
}