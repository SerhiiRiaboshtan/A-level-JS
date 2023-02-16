// 1 while confirm
// Сделайте цикл с confirm, который продолжается по Отмена и заканчивается по ОК.
function task1(){
    console.clear();
    console.log("Homework 2.2 Циклы task1");
    while(!confirm('Нажав Отмена остаёмся в цикле, нажав Ок - покидаем цикл')){
        console.log('Вы нажали Ок, мы ещё в цикле');
    }
    console.log('Вы нажали Отмена, мы покинули цикл');
}

// 2 array fill
// Создайте пустой массив и добавляйте в него элементы, введенные пользователем, пока пользователь не нажмет Отмена
// в очередном prompt. Используйте push для удобства: push В массиве не должно быть null после работы цикла;
function task2(){
    console.clear();
    console.log("Homework 2.2 Циклы task2");
    const arr=[];
    while(str=prompt("Введите что-нибудь или отмену для завершения")){
        arr.push(str);
    }
    console.log(`Вы ввели вот такой массив: ${arr}`);
}

// 3 array fill nopush
// Сделайте предыдущее задание, не используя push, а обращаясь к элементам по индексу.
function task3(){
    console.clear();
    console.log("Homework 2.2 Циклы task3");
    const arr=[];
    while(str=prompt("Введите что-нибудь или отмену для завершения")){
        arr[arr.length]=str;
    }
    console.log(`Вы ввели вот такой массив: ${arr}`);
}

// 4 infinite probability
// Создайте бесконечный цикл, который прерывается с помощью конструкции break, когда Math.random() > 0.9.
//  Код должен подсчитывать количество итераций и вывести это число с помощью alert.
function task4(){
    console.clear();
    console.log("Homework 2.2 Циклы task4");
    let numberOfIteration=1;
    while(true){
        if(Math.random() > 0.9) {
            break;
        }
        else numberOfIteration++;
    }
    alert(`Было сделано ${numberOfIteration} ит.`);
}

// 5 empty loop
// Сделайте цикл с prompt, который прерывается по нажатию OK и продолжается по нажатию "Отмена" c пустым телом цикла.
function task5(){
    console.clear();
    console.log("Homework 2.2 Циклы task5");
    while(prompt('Нажав Ок, прерываем цикл, нажав Отмена - продолжаем')===null){
        //Do nothing
    }
    console.log(`The while finished!`);
}

// 6 progression sum
//Подсчитать сумму арифметической прогрессии от 1 до N c шагом 3 (1,4,7....) используя цикл for. 
//Метод Гаусса не применять, наоборот, сделать максимально наивное решение.
function task6(){
    console.clear();
    console.log("Homework 2.2 Циклы task6");
    const inputN=parseInt(prompt('Введите целое число больше 1'));
    let sum=1;
    if(isNaN(inputN) || inputN<=1){
        alert('Вы ввели некорректное значение. Попробуйте ещё раз');
    }
    else{
        for(let i=1; i<(inputN-1)*3; i+=3, sum+=i);        
        console.log(`Арифметическая прогрессия от 1 с шагом 3. Сумма из ${inputN} первых элем. будет равна ${sum}`);
    }
}

// 7 chess one line
// Сформировать строку " # # # # # " с помощью цикла for. 
// Длина строки может быть четной и нечетной, и указывается в одном месте в коде.
function task7(){
    console.clear();
    console.log("Homework 2.2 Циклы task7");
    const strLen=parseInt(prompt('Введите длину строки.'));
    if(isNaN(strLen) || strLen<1){
        alert('Вы ввели некорректное значение. Попробуйте ещё раз');
    }
    else{
        let str='';
        for(let i=1; i<=strLen; i++){
            if(i%2===1){
                str+=' ';
            }
            else{
                str+='#';
            }
        }       
        console.log(`Строка длиной ${strLen} будет выглядеть "${str}"`);
    }
}

// 8 numbers
// Сформировать строку c помощью вложенных циклов. Для перевода строки используйте \n.
// 0123456789
// 0123456789
// 0123456789
// 0123456789
// 0123456789
// 0123456789
// 0123456789
// 0123456789
// 0123456789
// 0123456789
function task8(){
    console.clear();
    console.log("Homework 2.2 Циклы task8");
    let str='';
    for(let i=0; i<10; i++){
        for(k=0; k<10; k++){
            str+=k;
        }
        str+='\n';
    }
    console.log(str);
}

// 9 chess
// Сформируйте строку с шахматной доской из вложенных циклов.
//  Для перевода строки используйте \n. Код должен поддерживать легкое изменение размеров доски.
// .#.#.#.#.#.#
// #.#.#.#.#.#.
// .#.#.#.#.#.#
// #.#.#.#.#.#.
// .#.#.#.#.#.#
function task9(){
    console.clear();
    console.log("Homework 2.2 Циклы task9");
    const row=8;    //Количество строк на доске
    const column=8; //Количество колонок на доске
    str='';
    for(i=0; i<column; i++){
        const parity=i%2;
        for(j=0; j<row; j++){
            if(j%2===parity){
                str+='.';
            }
            else{
                str+='#';
            }
        }
        str+='\n';
    }
    console.log(str);
}

// 10 cubes
// Сформируйте массив из N элементов, содержащий в себе кубы индексов, т. е:
// [0,1,8,27,64...]
function task10(){
    console.clear();
    console.log("Homework 2.2 Циклы task10");
    const inputN=parseInt(prompt('Введите целое число больше 1'));
    const arr=[];
    if(isNaN(inputN) || inputN<=1){
        alert('Вы ввели некорректное значение. Попробуйте ещё раз');
    }
    else{
        for(let i=0; i<inputN; i++){
            arr[i]=Math.pow(i, 3);
        }        
    }
    console.log(`Массив из ${inputN} элем., содержащий кубы индексов ${arr}`);
}

// 11 multiply table
// C помощью вложенного цикла сформируйте массив массивов "таблица умножения".
//  Для инициализации вложенных массивов используйте arr[i] = [] //в i-тый элемент массива заносится новый пустой массив
// arr[5][6] должен быть равен, соответственно, 30, arr[7][2] == 14 и так далее.
function task11(){
    console.clear();
    console.log("Homework 2.2 Циклы task11");
    const arr=[];
    for(i=0; i<11; i++){
        arr[i]=[];
        for(j=0; j<11; j++){
            arr[i][j]=i*j;
        }
    }
    console.log(arr);
}

// 12 read array of objects
// Напишите функцию readArrayOfObjects, которая циклически добавляет в массив объекты, которые ввел пользователь. 
// Пользователь вводит ключи и значения (их в каждом объекте может быть любое количество), используя prompt. 
// Когда пользователь нажимает "Отмена" в окне prompt, ввод объекта заканчивается и объект добавляется в массив. 
// Перед вводом следующего объекта пользователю задается вопрос (используя confirm), хочет ли он продолжить это мучение ввод объектов. 
// При утвердительном ответе, опять работает ввод любюго количества ключей для создания нового объекта
// Функция должна возвращать созданный массив с объектами.
function readArrayOfObjects(){
    const arr=[];
    do{
        let obj=new Object;
        do{            
            if ((currentKey=prompt('Input key'))!==null){
                obj[currentKey]='';
            }
            else{
                break;
            }
            if ((currentValue=prompt('inputValue'))!==null){
                obj[currentKey]=currentValue;
            }
            else{
                break;
            }
        }while(true);
        arr.push(obj);
    }while(confirm('Хотите продолжить?'));
    return arr;
}
function task12(){
    console.clear();
    console.log("Homework 2.2 Циклы task12");
    console.log(readArrayOfObjects());
}

// 13 ромбик
// Сформировать следующую строку - ромбик:
// .....#.....
// ....###....
// ...#####...
// ..#######..
// .#########.
// ###########
// .#########.
// ..#######..
// ...#####...
// ....###....
// .....#.....
function task13(){
    console.clear();
    console.log("Homework 2.2 Циклы task13");
    let str='';
    const size=parseInt(prompt('Введите размер ромбика (нечетное целое число больше 0'));
    if(isNaN(size) || size<1 || size%2===0){
        alert('Вы ввели некорректное значение. Попробуйте ещё раз');
    }
    else{
        for(let i=0; i<size; i++){
            let numberSharp=i<size/2?i*2+1:(size-i-1)*2+1;
            for(let j=0; j<(size-numberSharp)/2; j++) str+='.';
            for(let j=0; j<numberSharp; j++) str+='#';
            for(let j=0; j<(size-numberSharp)/2; j++) str+='.';
            str+='\n';
        }
    }
    console.log(str);
}

// 14 DOM: multiply table
// Сделать таблицу умножения, используя DOM createElement и innerText.
//  Создайте таблицу, вложенные строки и ячейки в циклах. Должно получится что-то вроде этого:
function task14(){
    console.clear();
    console.log("Homework 2.2 Циклы task14");
    const table1=document.createElement('table');
    table1.id="table1";
    table1.className=`table`;
    table1.innerHTML='<caption> Табличка умножения </caption>';
    document.body.append(table1);
    for(let rowCounter=0; rowCounter<10; rowCounter++){
        let tempRow=document.createElement('tr');
        tempRow.id=`row${rowCounter}`;
        tempRow.style.fontSize  = '30px';
        tempRow.style.border  = '2px';
        table1.appendChild(tempRow);
        if(rowCounter>0){
            for(let columnCounter=0; columnCounter<10; columnCounter++){
                let tempCell=document.createElement('td');
                tempCell.style.border='1px solid';
                tempCell.style.width='50px';
                tempCell.style.height='50px';
                tempCell.style.textAlign='center';
                tempCell.style.fontWeight=columnCounter===0?'bold':'';
                tempCell.style.background=rowCounter%2!==0?'#F0F0F0':'';
                tempRow.appendChild(tempCell);
                tempCell.innerText=columnCounter===0?rowCounter:rowCounter*columnCounter;
            }
        }
        else{
            for(let columnCounter=0; columnCounter<10; columnCounter++){    
                let tempCell=document.createElement('th');
                tempCell.style.border='1px solid';
                tempCell.style.width='50px';
                tempCell.style.height='50px';
                tempRow.appendChild(tempCell);
                tempCell.innerText=columnCounter;
            }
        }
    }
}

// 15 DOM: highlight cell
// Подсветить ячейку, над которой находится курсор мыши. Используйте события mouseover и mouseout, 
// и style.backgroundColor для подсветки. Для того, что бы подсветить правильную ячейку, добавьте обработчики 
// событий во вложенный цикл, и используйте в них ту переменную, которая хранит <td>. В таком случае замыкания вам помогут.
// Внимание: :hover это читерство :-)
function task15(){
    console.clear();
    console.log("Homework 2.2 Циклы task15");
    const table1=document.createElement('table');
    table1.id="table1";
    table1.className=`table`;
    table1.innerHTML='<caption> Табличка умножения </caption>';
    document.body.append(table1);
    for(let rowCounter=0; rowCounter<10; rowCounter++){
        let tempRow=document.createElement('tr');
        tempRow.id=`row${rowCounter}`;
        tempRow.style.fontSize  = '30px';
        tempRow.style.border  = '2px';
        table1.appendChild(tempRow);
        if(rowCounter>0){
            for(let columnCounter=0; columnCounter<10; columnCounter++){
                let tempCell=document.createElement('td');
                tempCell.style.border='1px solid';
                tempCell.style.width='50px';
                tempCell.style.height='50px';
                tempCell.style.textAlign='center';
                tempCell.style.fontWeight=columnCounter===0?'bold':'';
                tempCell.style.background=rowCounter%2!==0?'#F0F0F0':'';
                const color=tempCell.style.background;
                tempCell.onmouseover=()=>{tempCell.style.background='green'};
                tempCell.onmouseout=()=>{tempCell.style.background=color};
                tempRow.appendChild(tempCell);
                tempCell.innerText=columnCounter===0?rowCounter:rowCounter*columnCounter;
            }
        }
        else{
            for(let columnCounter=0; columnCounter<10; columnCounter++){    
                let tempCell=document.createElement('th');
                tempCell.style.border='1px solid';
                tempCell.style.width='50px';
                tempCell.style.height='50px';
                tempRow.appendChild(tempCell);
                tempCell.innerText=columnCounter;
            }
        }
    }
}

// 16 DOM: Highlight cross
// Подсветить строку и столбец, в которой находится подсвеченная ячейка. 
// Если у вас обработчики событий объявлены во вложенном цикле, то вы можете пользоваться счетчиками цикла 
// (обычно i и j) и другими переменными, например переменной, содержащей в себе DOM-элемент строки.
function task16(){
    console.clear();
    console.log("Homework 2.2 Циклы task16");
    const table1=document.createElement('table');
    table1.id="table1";
    table1.className=`table`;
    table1.innerHTML='<caption> Табличка умножения </caption>';
    document.body.append(table1);
    for(let rowCounter=0; rowCounter<10; rowCounter++){
        let tempRow=document.createElement('tr');
        tempRow.id=`row${rowCounter}`;
        tempRow.style.fontSize  = '30px';
        tempRow.style.border  = '2px';
        tempRow.onmouseover=()=>{tempRow.style.background='green'};
        tempRow.onmouseout=()=>{tempRow.style.background=''};
        table1.appendChild(tempRow);
        if(rowCounter>0){
            for(let columnCounter=0; columnCounter<10; columnCounter++){
                let tempCell=document.createElement('td');
                tempCell.style.border='1px solid';
                tempCell.style.width='50px';
                tempCell.style.height='50px';
                tempCell.style.textAlign='center';
                tempCell.style.fontWeight=columnCounter===0?'bold':'';
                tempCell.className=`column${columnCounter}`;
                tempCell.onmouseover=()=>{
                    for(let a of document.getElementsByClassName(tempCell.className)){
                        a.style.background='green';
                    }
                };
                tempCell.onmouseout=()=>{
                    for(let a of document.getElementsByClassName(tempCell.className)){
                        a.style.background='';
                    }
                }
                tempRow.appendChild(tempCell);
                tempCell.innerText=columnCounter===0?rowCounter:rowCounter*columnCounter;
            }
        }
        else{
            for(let columnCounter=0; columnCounter<10; columnCounter++){    
                let tempCell=document.createElement('th');
                tempCell.style.border='1px solid';
                tempCell.style.width='50px';
                tempCell.style.height='50px';
                tempCell.className=`column${columnCounter}`;
                tempCell.onmouseover=()=>{
                    for(let a of document.getElementsByClassName(tempCell.className)){
                        a.style.background='green';
                    }
                };
                tempCell.onmouseout=()=>{
                    for(let a of document.getElementsByClassName(tempCell.className)){
                        a.style.background='';
                    }
                }
                tempRow.appendChild(tempCell);
                tempCell.innerText=columnCounter;
            }
        }
    }
}