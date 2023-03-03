// Homework 3.4 Рекурсия try-catch-finally
'use strict'
// 1 Рекурсия: HTML tree
// Используя решение этого задания сделайте функцию, которая рекурсивно создает HTML-строку из древовидной структуры данных Javascript 
// любой вложенности. Проверьте результат работы функции выводя HTML-строку используя document.write или же какой-то_элемент.innerHTML
function HTMLtree(parent){
    let strStart='';
    let strEnd='';
    for(let key in parent){
        if(key==='tagName'){
            strStart=`<${parent[key]}>`;
            if(voidTag.indexOf(parent[key])===-1?true:false) strEnd=`</${parent[key]}>`;
        }else if(key==='attrs'){
            let str1='';
            for(let key2 in parent[key]){
                if(key2!=='children'){
                    str1+=` ${key2}='${parent[key][key2]}'`
                }else strStart+=parent[key][key2];
            }   
            strStart=strStart.replace('>', str1+'>');    
        }else if(key==='children'){
                for(let key1 in parent[key]) strStart+=HTMLtree(parent[key][key1]);
        }else strStart+= parent[key];
    }
    return (strStart+strEnd);
}
function task1(){
    console.clear();
    console.log("Homework 3.4 task1");
    const str=HTMLtree(parent=body);
    document.write(str);
    const str1=HTMLtree(parent=table);
    document.write(str1);
}

// 2 Рекурсия: DOM tree
// Используя решение этого задания сделайте функцию, которая рекурсивно создает DOM из древовидной структуры данных Javascript. 
// Задание в целом аналогично предыдущему, однако вместо накопления результата в HTML-строке функция должна добавлять элементы созданные через document.createElement в переданного в функцию родителя.
function domTree(parent, obj){
    let tempParent;
    if(typeof(obj)==='object'){
        for(let key in obj){
            if(key==='tagName'){
                tempParent=document.createElement(obj[key]);
            }else if(key==='attrs'){
                for(let key2 in obj[key]){
                    if(key2!=='children'){
                        tempParent[key2]=obj[key][key2];
                    }else tempParent.innerText=obj[key][key2];
                }   
            }else if(key==='children'){
                for(let key1 in obj[key]) parent.appendChild(domTree(tempParent, obj[key][key1]));
            }
        }  
    }else tempParent=parent.innerText=obj;
    if(!Object.hasOwn(obj, 'children') && typeof(obj)!=='string') parent.appendChild(tempParent);
    return parent;
}
function task2(){
    console.clear();
    console.log("Homework 3.4 task2");
    domTree(document.body, table);
    domTree(document.body, bodyDiv);

}

// 3 Рекурсия: Deep Copy
// Напишите функцию, которая рекурсивно осуществляет глубокое копирование структур Javascript, в которых нет циклических связей.
function deepCopy(obj){
    let tempObjTop;
    if(Array.isArray(obj)){
        let tempObj=[];
        for(let key in obj){
            if(typeof(obj[key])==='object' && obj[key]!==null){
               tempObj.push(deepCopy(obj[key]));
            }else tempObj.push(obj[key]);
        }
        tempObjTop=tempObj;
    }else{
        let tempObj={};
        for(let key in obj){
            if(typeof(obj[key])==='object' && obj[key]!==null){
                tempObj=Object.assign(tempObj, {[key]:deepCopy(obj[key])});
            }else tempObj=Object.assign(tempObj ,{[key]:obj[key]});
        }
        tempObjTop=tempObj;
    }
    return tempObjTop
}
function task3(){
    console.clear();
    console.log("Homework 3.4 task3");
    const arr  = [1,"string", null, undefined, {a: 15, b: 10, c: [1,2,3,4],d: undefined, e: true }, true, false];
    const arr2 = deepCopy(arr); //arr2 и все его вложенные массивы и объекты - другие объекты, которые можно менять без риска поменять что-то в arr
    console.log(arr2);
    const table2 = deepCopy(table); //аналогично
    console.log(table2);
}

// 4 Рекурсия: My Stringify
// Напишите аналог JSON.stringify
function MyStringify(obj){
    let strStart='';
    let strEnd='';
    let flagObj=false;
    if(Array.isArray(obj)){
        strStart='[';
        strEnd=']';
    }else {
        strStart='{';
        strEnd='}';
        flagObj=true;
    }
    let commaFlag=-1;
        for(let key in obj){
            commaFlag++;
            const typeObj=typeof(obj[key]);
            if(typeObj==='number'){
                if(obj[key]===Infinity || obj[key]===NaN){
                    strStart+=`${commaFlag>0?',':''}`+(flagObj?`"${key}":"null"`:`"null"`);
                }else strStart+=`${commaFlag>0?',':''}`+(flagObj?`"${key}":${obj[key]}`:`${obj[key]}`);
            }else if(typeObj==='string'){
                strStart+=`${commaFlag>0?',':''}`+(flagObj?`"${key}":"${obj[key]}"`:`"${obj[key]}"`);
            }else if(typeObj==='object' && obj[key]===null){
                strStart+=`${commaFlag>0?',':''}`+(flagObj?`"${key}":"null"`:`"null"`);
            }else if(typeObj==='boolean'){
                strStart+=`${commaFlag>0?',':''}`+(flagObj?`"${key}":"${obj[key]?"true":"false"}"`:`"${obj[key]?"true":"false"}"`);
            }else if(typeObj==='undefined' && !flagObj){
                strStart+=`${commaFlag>0?',':''}`+(flagObj?`"${key}":"null"`:`"null"`);
            }else if(typeObj==='undefined' && flagObj){
                continue;
            }else if(typeObj==='object'){
                strStart+=`${commaFlag>0?',':''}`+(flagObj?`"${key}":${MyStringify(obj[key])}`:`${MyStringify(obj[key])}`);
            }       
        }
    return strStart+strEnd;
}
function task4(){
    console.clear();
    console.log("Homework 3.4 task4");
    const arr=[1,"string", null, undefined, {a: 15, b: 10, c: [1,2,3,4],d: undefined, e: true }, true, false];
    console.log(MyStringify(arr));
    domTree(document.body, JSON.parse(MyStringify(table)));
    console.log(JSON.parse(MyStringify(table)));
}

// 5 Рекурсия: getElementById throw
// Напишите функцию getElementById, которая будет аналогична document.getElementById. В качестве основы можете взять материал лекции (walker), 
// однако в цикл перебора children вставьте проверку на нахождение переданного id. При нахождении элемента по id в рекурсивной функции выбрасывайте 
// исключение со значением найденного DOM-элемента, которое будет поймано на уровне вашей функции getElementById, после чего она вернет выброшенный DOM-элемент
function walker(parent, id){
    for (const child of parent.children){
        if(child.id===id){
            throw child;
        }
        walker(child, id); 
    }
}
function getElementByIdThrow(parent=document.body, id){
    try{
        walker(parent, id);
    }
    catch(error){
        console.log('Test throw!' +error);
        return error;
    }
}
function task5(){
    console.clear();
    console.log("Homework 3.4 task5");
    const element=getElementByIdThrow(document.body, 'ok');
    element.innerText='Изменили текст на найденном элементе';
}

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
const voidTag=['area' , 'base' , 'br' , 'col' , 'embed' , 'hr' , 'img' , 'input' , 'link' , 'meta' , 'param' , 'source' , 'track' , 'wbr'];
const table = {
    tagName: 'table',
    attrs: {
        border: "1",
    },
    children: [
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["1x1"],
                },
                {
                    tagName: "td",
                    children: ["1x2"],
                },
            ]
        },
        {
            tagName: 'tr',
            children: [
                {
                    tagName: "td",
                    children: ["2x1"],
                },
                {
                    tagName: "td",
                    children: ["2x2"],
                },
            ]
        }
    ]
}
let bodyDiv={
    tagName:'div',
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