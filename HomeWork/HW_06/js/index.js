// 1 Створити функцію, яка буде видаляти людей з масиву за індексом, який ми передамо параметром.
// const arr = ['Vasya', 'Petya', 'Alexey']
// removeUser(arr, 1)
// console.log(arr) /// ['Vasya', 'Alexey']
function removeUser(arr, num){
    console.log(arr);
    console.log(`Removed element ${num}`)
    arr.splice(num, 1);
    return arr;
}
function task1(){
    console.clear();
    console.log("HW06 task1");
    const arr = ['Vasya', 'Petya', 'Alexey']
    console.log(removeUser(arr, 1));
}  

// 2 Створити функцію яка поверне всі ключі об'єкта, переданого параметром
// const obj = { name: 'Vasya', age: 1}
// getAllKeys(obj) /// ["name", "age"]
function getAllKeys(obj){
    let temp=[];
    for(const key in obj) temp.push(key);
    return temp;
}
function task2(){
    console.clear();
    console.log("HW06 task2");
    const obj = { name: 'Vasya', age: 1};
    console.log(getAllKeys(obj));
}

// 3 Створити функцію, яка поверне всі значення об'єкта переданого параметром
// const obj = { name: 'Vasya', age: 1}
// getAllValues(obj) /// ["Vasya", 1]
function getAllValues(obj){
    let temp=[];
    for(const key in obj) temp.push(obj[key]);
    return temp;
}
function task3(){
    console.clear();
    console.log("HW06 task3");
    const obj = { name: 'Vasya', age: 1};
    console.log(getAllValues(obj));
    
}

// 4 Створити функцію, де ми першим параметром передамо об'єкт з новим кандидатом, 
//  а другим параметром - id будь-якого кондидата в масиві condidateArr. 
//  Функція повинна буде вставити кандидата переданого через перший параметр до масиву перед кондидатом
// у якого id одно тому що передали у другому параметрі
const obj = {id: 3, name: 'Vasya'};
const secondObj = {id: 4, name: 'Katya'};
let arr = [ {id: 1, name: 'Kolya'}, {id: 2, name: 'Petya'}];
function insertIntoarr(obj, id){
    for(let key in arr){
        if(arr[key].id===id){
            arr.splice(key, 0, obj);
            break;
        } 
    }
}
function task4(){
    console.clear();
    console.log("HW06 task4");
    insertIntoarr(obj, 2);
    console.log(arr);// [ {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]
    insertIntoarr(secondObj, 1);
    console.log(arr);// [ {id: 4,name: 'Katya'}, {id: 1,name: 'Kolya'}, {id: 3, name: 'Vasya'}, {id: 2, name: 'Petya'} ]
}

// 5 Створіть клас Condidate який прийматиме параметром об'єкт із масиву condidateArr. 
//Додати метод з назвою state що поверне шатат у якому живе наш кандидат. 
//Інформація про штат знаходиться у властивості address і це третій запис після коми.
// const condidate = new Condidate(condidateArr[0])
// condidate.state /// Colorado
function task5(){
    console.clear();
    console.log('HW06 task5');
    class Condidate {
        arr;
        constructor(arr){
            this.arr=arr;
        } 
        state(){
            let start=0;
            let end=0;
            let counter=0;
            for(let i=0; i<this.arr.address.length; i++){
                if(this.arr.address[i]===','){
                    if(counter===0){
                       counter++; 
                    } 
                    else if(counter===1){
                        counter++;
                        start=i+1;
                    }
                    else {
                        end=i;
                        break;
                    }
                } 
            }
            console.log(this.arr.address.slice(start, end));
        } 
    }
    const condidate = new Condidate(condidateArr[0]);
    condidate.state();
}

// 6 Створити функцію яка виведе масив із назвами фірм взятими зі св-ва company. 
//Якщо фірми повторюються в масиві, видалити дублікати. Так само використовуємо масив candidateArr.
// getCompanyNames() /// [""EZENT, "JASPER" ... ]
function getCompanyNames(){
    let arr=[];
    for(const key in condidateArr){
        arr.push(condidateArr[key].company);
    }
    for(let i=0; i<arr.length-1; i++){
        for(j=i+1; j<arr.length; j++){
            if(arr[i]===arr[j]){//Если находим дубликаты фирм, то удаляем 
                //console.log(`arr[${i}] equel arr[${j}]`)
                arr.splice(j, 1);
            }
        }
    }
    console.log(arr)
}
function task6(){
    console.clear();
    console.log("HW06 task6");
    getCompanyNames();
}

// 7 Створити функцію яка виведе мені масив id всіх кандидатів, які були зареєстровані в тому ж році,
//  як і рік зазначений у параметрі.
// getUsersByYear(2017) /// ["e216bc9cab1bd9dbae25637", "5e216bc9e51667c70ee19f4f" ...]
function getUsersByYear(year){
    //debugger;
    let arr=[];
    for(const key in condidateArr){
        if(Number(condidateArr[key].registered.slice(0, 4))===year){
            arr.push(condidateArr[key]._id);
        }
        
    }
    return arr;
}
function task7(){
    console.clear();
    console.log("HW06 task7");
    console.log(getUsersByYear(2017));
}

// 8 Створити функцію яка поверне масив з екземплярами - кандидатами, відфільтрованими за кількістю 
//непрочитаних повідомлень. Дивимося властивість greeting, там зазначено цю кількість у рядку, 
//Вам треба дістати це число з рядка і звіряти з тим, що в параметр вашої функції.
// Так само використовуємо масив candidateArr.
// getCondidatesByUnreadMsg(8) /// [Condidate, Condidate ...]
function getCondidatesByUnreadMsg(num){
    let arr=[];
    for(const key in condidateArr){
        let tempStr='';
        for(i=0; i<condidateArr[key].greeting.length; i++){
            if(!isNaN(condidateArr[key].greeting[i])) tempStr+=condidateArr[key].greeting[i];
        }
        if(num===Number(tempStr)) arr.push(condidateArr[key].name);
    }
    return arr;
}
function task8(){
    console.clear();
    console.log("HW06 task8");
    console.log(getCondidatesByUnreadMsg(8));
}

// 9 Створити функцію яка поверне масив за якістю gender.
// Так само використовуємо масив candidateArr.
// getCondidatesByGender('male') /// [Condidate, Condidate ...]
function getCondidatesByGender(gender){
    let arr=[];
    for(const key in condidateArr){
        if(condidateArr[key].gender===gender) arr.push(condidateArr[key].name);
    }
    return arr;
}
function task9(){
    console.clear();
    console.log("HW06 task9");
    console.log(`male: ${getCondidatesByGender('male')}`);
    console.log('female: '+getCondidatesByGender('female'));
}

// 10* Створити функцію reduce, join самому як на занятті створювали forEach, map, find, filter і т.д.
// Масив із кандидатами
// Розархівуємо файл, кладемо його в дерикторію з js файлом з рішенням вашої дз і підключаємо
//  в index.html перед js файлом з вашим дз
function myJoin(sep){
    let str='';
    if(sep===undefined) sep=',';
    for(const key in condidateArr) str=str+condidateArr[key].name+sep;
    return str.slice(0, str.length-1);
}
function myReduce(arr, func, acc){
    //debugger;
    let i=1;
    let previousValue, currentValue;
    if(acc===undefined){
        previousValue=arr[0];
    }
    else {
        previousValue=acc;
        i=0;
    }
    for(i; i<arr.length; i++){
        currentValue=func(previousValue, arr[i]);
        previousValue=currentValue;
    }
    return currentValue;
}
function func0(previousValue,  currentValue){
        return [...previousValue, ...currentValue.books];
}
function task10(){
    console.clear();
    console.log("HW06 task10");
    console.log(myJoin('_'));
    console.log(myReduce([
        { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
        { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
        { name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
        ], func0,  ["Alphabet"]));
}