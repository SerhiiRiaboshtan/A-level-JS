// 1 Literals
// Найдите несколько окружающих объектов реального мира и создайте соответственные объекты Javascript. Например:
function task1(){
    console.clear();
    console.log("Homework 1.5 task1");
    const rat={
        gender: 'male',
        age:'2',
        color: 'white',
    }
    const car={
        wheels: '4',
        color: 'grey',
        manufacturing: '2010',
    }
    console.log(rat, car);
}

// 2 Literals expand
// Дайте возможность пользователю добавить любые два свойства в эти объекты с любыми значениями. Обеспечьте ввод названия ключа и значения через prompt прямо в литерале объекта {}
function task2(){
    console.clear();
    console.log("Homework 1.5 task2");
    const obj={
        [prompt('Введите ключ 1')]: (prompt('Введите параметр ключа 1')),
        [prompt('Введите ключ 2')]: (prompt('Введите параметр ключа 2')),
    }
    console.log(obj);
}

// 3 Literals copy
// Пусть пользователь введет еще одно свойство в переменную. Вставьте в новый объект эту переменную. Скопируйте объект из предыдущего задания в новый объект.
function task3(){
    console.clear();
    console.log("Homework 1.5 task3");
    const str=prompt('Введите параметр');
    let newObj={str};
    const obj={
        [prompt('Введите ключ 1')]: (prompt('Введите параметр ключа 1')),
        [prompt('Введите ключ 2')]: (prompt('Введите параметр ключа 2')),
    }
    Object.assign(newObj, obj);
    console.log(newObj);
}

// 4 Html tree

function task4(){
    console.clear();
    console.log("Homework 1.5 task4");
    let body={
        tagName:'body',
        children: [
            {
                tagName:'div',
                children: [
                {
                    tagName:'span',
                    children: ['Enter a data please:'],
                },
                {
                    tagName:'br'
                },
                {
                    tagName:'input',
                    attrs:{
                        type:'text',
                        id:'name',
                    }
                },
                {
                    tagName:'input',
                    attrs:{
                        type:'text',
                        id:'surname',
                    }
                },
                ]
            },
            {
                tagName:'div',
                children: [
                {
                    tagName:'button',
                    attrs:{
                        id:'ok',
                        children:['Ok'],
                    }
                },
                {
                    tagName:'button',
                    attrs:{
                        id:'cancel',
                        children:['Cancel'],
                    }
                },
                ]
            }
        ]
    }
    console.log(`Текст на второй кнопке: ${body.children[1].children[1].attrs.children}`);
    console.log(`ID на втором input: ${body.children[0].children[3].attrs.id}`);
}

// 5 Parent 
// Добавьте каждому объекту тэга из предыдущего задания связь с родителем, используя свойство parent и присвоение
function task5(){
    console.clear();
    console.log("Homework 1.5 task5");
    let body={
        tagName:'body',
        children: [
            {
                tagName:'div',
                parent:'body',
                children: [
                {
                    tagName:'span',
                    parent:'div',
                    children: ['Enter a data please:'],
                },
                {
                    tagName:'br',
                    parent:'div',
                },
                {
                    tagName:'input',
                    parent:'div',
                    attrs:{
                        type:'text',
                        id:'name',
                    }
                },
                {
                    tagName:'input',
                    parent:'div',
                    attrs:{
                        type:'text',
                        id:'surname',
                    }
                },
                ]
            },
            {
                tagName:'div',
                parent:'body',
                children: [
                {
                    tagName:'button',
                    parent:'div',
                    attrs:{
                        id:'ok',
                        children:['Ok'],
                    }
                },
                {
                    tagName:'button',
                    parent:'div',
                    attrs:{
                        id:'cancel',
                        children:['Cancel'],
                    }
                },
                ]
            }
        ]
    }
    console.log(body);
    
}

// 6 Change OK
// Добавьте(или измените) любой введенный пользователем атрибут тэга <button id='ok'> из задания HTML Tree. 
// Пользователь также вводит значение этого атрибута.
function task6(){
    console.clear();
    console.log("Homework 1.5 task6");
    key=prompt('Введите имя ключа');
    value=prompt('Введите значение ключа');
    let body={
        tagName:'body',
        children: [
            {
                tagName:'div',
                children: [
                {
                    tagName:'span',
                    children: 'Enter a data please:',
                },
                {
                    tagName:'br'
                },
                {
                    tagName:'input',
                    attrs:{
                        type:'text',
                        id:'name',
                    }
                },
                {
                    tagName:'input',
                    attrs:{
                        type:'text',
                        id:'surname',
                    }
                },
                ]
            },
            {
                tagName:'div',
                children: [
                {
                    tagName:'button',
                    attrs:{
                        id:'ok',
                        children:'Ok',
                    }
                },
                {
                    tagName:'button',
                    attrs:{
                        id:'cancel',
                        children:'Cancel',
                    }
                },
                ]
            }
        ]
    }
    console.log('Атрибуты до:',  body.children[1].children[0].attrs);
    if(Object.hasOwn(body.children[1].children[0].attrs, key)){
        body.children[1].children[0].attrs[key]=value;
    }else{
        body.children[1].children[0].attrs=Object.assign(body.children[1].children[0].attrs, {[key]:value});
    }    
    console.log('Атрибуты после:', body.children[1].children[0].attrs);
}

// 7 Destructure
// Используя деструктуризацию структуры из задания HTML Tree, Выведите значения текста в тэге span, 
// Выведите значения текста во второй кнопке и Выведите значение атрибута id во втором input
function task7(){
    console.clear();
    console.log("Homework 1.5 task7");
    let body={
        tagName:'body',
        children: [
            {
                tagName:'div',
                children: [
                {
                    tagName:'span',
                    children: 'Enter a data please:',
                },
                {
                    tagName:'br'
                },
                {
                    tagName:'input',
                    attrs:{
                        type:'text',
                        id:'name',
                    }
                },
                {
                    tagName:'input',
                    attrs:{
                        type:'text',
                        id:'surname',
                    }
                },
                ]
            },
            {
                tagName:'div',
                children: [
                {
                    tagName:'button',
                    attrs:{
                        id:'ok',
                        children:'Ok',
                    }
                },
                {
                    tagName:'button',
                    attrs:{
                        id:'cancel',
                        children:'Cancel',
                    }
                },
                ]
            }
        ]
    }
    let textSpan, labelButton2, idInput2;
    
    ({children:[{children:[{children:textSpan}]}]}=body);
    ({children:[{},{children:[{},{attrs:{children:labelButton2}}]}]}=body);
    ({children:[{children:[{},{},{},{attrs:{id:idInput2}}]}]}=body);
    console.log(`textSpan:"${textSpan}", надпись на второй кнопке:"${labelButton2}", id второго input:"${idInput2}"`);
    
}

// 8 Destruct array
// let arr = [1,2,3,4,5, "a", "b", "c"]
// напишите код, который используя деструктуризацию положит:
// четные числа в переменные even1, even2,
// нечетные в odd1, odd2, odd3,
// буквы в отдельный массив
function task8(){
    console.clear();
    console.log("Homework 1.5 task8");
    let arr = [1,2,3,4,5, "a", "b", "c"];
    [odd1, even1, odd2, even2, odd3, ...rest]=arr;
    console.log(`odd1=${odd1}, odd2=${odd2}, odd3=${odd3}, even1=${even1}, even2=${even2}, letters: ${rest}`);
}

// 9 Destruct string
// let arr = [1, "abc"]
// напишите код, который используя деструктуризацию положит:
// число в переменную number
// букву a в переменную s1
// букву b в переменную s2
// букву c в переменную s3
function task9(){
    console.clear();
    console.log("Homework 1.5 task9");
    let arr = [1, "abc"];
    [number,[s1, s2, s3] ]=arr;
    console.log(`number=${number}, s1=${s1}, s2=${s2}, s3=${s3} `);
}

// 10 Destruct 2
// let obj = {name: 'Ivan',
// surname: 'Petrov',
// children: [{name: 'Maria'}, {name: 'Nikolay'}]}
// извлеките используя деструктуризацию имена детей в переменные name1 и name2
function task10(){
    console.clear();
    console.log("Homework 1.5 task10");
    let obj = {
        name: 'Ivan',
        surname: 'Petrov',
        children: [{name: 'Maria'}, {name: 'Nikolay'}]
    }
    let name1, name2, name3, surname1, a, b;
    debugger;
    ({children: [{name: name1}, {name: name2}]}=obj);
    console.log(`name1:${name1}, name2:${name2}`);
}

// 11 Destruct 3
// let arr = [1,2,3,4, 5,6,7,10]
// извлеките используя деструктуризацию объектов два первых элемента и длину массива в переменные a, b и length
function task11(){
    console.clear();
    console.log("Homework 1.5 task11");
    let arr = [1,2,3,4, 5,6,7,10];
    const {0: a, 1:b, length}=arr;
    console.log(`a=${a}, b=${b}, length=${length}`);
}

// 12 Copy delete
// Сделайте копию одного из объектов из задания Literals без ключа, который введет пользователь.
function task12(){
    console.clear();
    console.log("Homework 1.5 task12");
    const rat={
        gender: 'male',
        age:'2',
        color: 'white',
    };
    delete (newObj=Object.assign({}, rat))[prompt(`Введите ключ, который не попадёт в копию объекта (gender, age, color)`)];
    console.log(newObj);   
}

// 13 Currency real rate
// Ниже приведен код, который скачивает актуальную информацию о курсах валют. Скопируйте ссылку из него вставьте в браузер интереса ради. Реализуйте калькулятор обмена валют следующим образом:
// Пользователь вводит исходную валюту
// Пользователь вводит валюту, в которую происходит конвертация
// Пользователь вводит сумму в исходной валюте
// Пользовател видит результат конвертации
// fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
// .then(data => {
//     //эта функция запускается когда данные скачиваются.
//     //остальной код работает РАНЬШЕ.
//     //только ТУТ есть переменная data со скачанными данными
//     console.log(data) //изучите структуру, получаемую с сервера в консоли
// })
// Учтите, что пользователь может ввести какую-то дичь или название валют в неверном регистре
function task13(){
    console.clear();
    console.log("Homework 1.5 task13");
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
        const val1=prompt('Введите валюту #1').toUpperCase();
        const val2=prompt('Введите валюту #2').toUpperCase();
        if(!Object.hasOwn(data.rates, val1) && !Object.hasOwn(data.rates, val1)){
            console.log('Вы ввели несуществующую валюту');
        } else {
            const sum1=parseFloat(prompt('Введите сумму в валюте #1'));
            debugger;
            if( !isNaN(sum1) && sum1>=0){
                console.log(`За ваши ${val1}${sum1} вы можете купить ${val2}${(sum1*data.rates[val2]/data.rates[val1]).toFixed(2)}`);
            }else console.log("Вы ввели в качестве сумму что-то непонятное!");
        }
    })
}

// 14 Currency drop down
// Сделайте выпадающий список с названиями всех валют, используя код из прошлого задания и накопление HTML-тэгов в строковой переменной. 
//Для выпадающих списков в HTML предусмотрены тэги <select> и <option>
function task14(){
    console.clear();
    console.log("Homework 1.5 task14");
    let str='<select>';
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
        for(let key in data.rates) str+=`<option>${key}</option>`;
        str+='</select>';
        document.write(str);
    })
}

// 15 Currency table
// Сделайте двумерную таблицу с курсами между всеми возможными парами валют по типу таблицы Пифагора,
//  используя заготовку из задания Currency real rate:
// Используйте только один запрос на сервер. Используйте расчет кросскурса для вычисления курса между любой парой валют
function task15(){
    console.clear();
    console.log("Homework 1.5 task15");
    let str='<table><thead><tr>';
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
        .then(data => {
        str+=`<td style='border:1px solid'></td>`;
        for(let key in data.rates) str+=`<td style='border:1px solid; font-weight:bold'>${key}</td>`;
        str+='</tr></thead>';
        for(let key in data.rates){
            str+='<tr>';
            str+=`<td style='border:1px solid; font-weight:bold'>${key}</td>`;
            for(let key1 in data.rates){
                str+=`<td style='border:1px solid'>${(data.rates[key]/data.rates[key1]).toFixed(2)}</td>`;
            }
            str+='</tr>';
        }
        str+='</table>';
        document.write(str);
    })
    
}

// 16 Form
// Напишите код, который их любого объекта создает форму HTML. Например для такого объекта
// const car = {
//     "Name":"chevrolet chevelle malibu",
//     "Cylinders":8,
//     "Displacement":307,
//     "Horsepower":130,
//     "Weight_in_lbs":3504,
//     "Origin":"USA",
//     "in_production": false
// }
// На экране должна появиться форма из 7 строк, с названиями полей, взятыми из ключей и полями ввода соответствующих типов. Значениями полей ввода должны быть значения из объекта.
{/* <form>
    <label>Name: <input type="text" value="chevrolet chevelle malibu"/></label>
    <label>Cylinders: <input type="number" value="8"/></label>
    <label>Displacement: <input type="number" value="307"/></label>
    <label>Horsepower: <input type="number" value="130"/></label>
    <label>Weight_in_lbs: <input type="number" value="3504"/></label>
    <label>Origin: <input type="text" value="USA"/></label>
    <label>in_production: <input type="checkbox" /></label>
</form> */}
// Для создания правильного типа тэга input используйте оператор typeof Javascript:
// console.log(typeof 5)//number
// console.log(typeof "5") //string
// console.log(typeof (5 > 2)) //boolean
function createTAG(key, value){
    debugger;
    let str='';
    str+=`<label>${key}: <input type=`;
    if(typeof(value)==='number'){
        str+='number';
    }else if(typeof(value)==='string'){
        str+='text';
    }else str+='checkbox';
    str+=` value='${value}'/></label>`;
    return str;
}
function task16(){
    console.clear();
    console.log("Homework 1.5 task16");
    const car = {
        "Name":"chevrolet chevelle malibu",
        "Cylinders":8,
        "Displacement":307,
        "Horsepower":130,
        "Weight_in_lbs":3504,
        "Origin":"USA",
        "in_production": false
    }
    let str='';
    for(let key in car) str+=createTAG(key, car[key]);
    document.write(str);
}

// 17 Table
// Даден любой массив с объектами
function task17(){
    console.clear();
    console.log("Homework 1.5 task17");
    const persons = [
        // {
        //     name: 'Мария',
        //     fatherName: 'Ивановна',
        //     surname: 'Иванова',
        //     sex: 'female'
        // },
        // {
        //     name: 'Николай',
        //     fatherName: 'Иванович',
        //     surname: 'Иванов',
        //     age: 15
        // },
        // {
        //     name: 'Петр',
        //     fatherName: 'Иванович',
        //     surname: 'Иванов',
        //     married: true
        // },
        {
           "Name":"chevrolet chevelle malibu",
           "Cylinders":8,
           "Displacement":307,
           "Horsepower":130,
           "Weight_in_lbs":3504,
           "Origin":"USA"
        },
        {
           "Name":"buick skylark 320",
           "Miles_per_Gallon":15,
           "Cylinders":8,
           "Displacement":350,
           "Horsepower":165,
           "Weight_in_lbs":3693,
           "Acceleration":11.5,
           "Year":"1970-01-01",
        },
        {
           "Miles_per_Gallon":18,
           "Cylinders":8,
           "Displacement":318,
           "Horsepower":150,
           "Weight_in_lbs":3436,
           "Year":"1970-01-01",
           "Origin":"USA"
        },
        {
           "Name":"amc rebel sst",
           "Miles_per_Gallon":16,
           "Cylinders":8,
           "Displacement":304,
           "Horsepower":150,
           "Year":"1970-01-01",
           "Origin":"USA"
        },         
    ]
    const arrColumn=[];
    let str='<table><thead><tr>';
    
    for(let key of persons){
        for(let key1 in key){
            if(arrColumn.indexOf(key1)===-1) arrColumn.push(key1);
        }
    }
    for(let data of arrColumn) str+=`<td style='border:1px solid; width:100px; text-align:center'>${data}</td>`;
    str+='</tr></thead>';
    for(let key of persons){
        str+='<tr>';
        for(let key1 of arrColumn){
            if(Object.hasOwn(key, key1)){
                str+=`<td style='border:1px solid'>${key[key1]}</td>`;
            } else str+=`<td style='border:1px solid'></td>`;
        }
        str+='</tr>';
    }
    str+='</table>';
    document.write(str);
    
}