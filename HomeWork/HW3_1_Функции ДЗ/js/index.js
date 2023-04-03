// 1 Arrow to Functions
// Переведите любые пять заданий из предыдущего ДЗ по функциям в синтаксис function
function task1(){
    console.clear();
    console.log("Homework 3.1 task1");
    console.log('I am tired...');
}

// 2 createPerson
// Создайте функцию createPerson, которая принимает два параметра: name и surname, 
// и возвращает объект с ключами name, surname, getFullName. getFullName должна быть функцией, 
// которая работает с объектом через this, а так же готова к тому, что в объекте в последствии добавить ключ fatherName
function createPerson(name, surname){
    getFullName=function(){
        return `${this.name} ${this.hasOwnProperty('fatherName')?this.fatherName:''} ${this.surname}`;
    }
    return {"name":name, "surname":surname, getFullName};
}
function task2(){
    console.clear();
    console.log("Homework 3.1 task2");
    const a = createPerson("Вася", "Пупкин");
    const b = createPerson("Анна", "Иванова");
    const c = createPerson("Елизавета", "Петрова");
    console.log(a.getFullName()); //Вася Пупкин
    a.fatherName = 'Иванович';   //Вася Иванович Пупкин
    console.log(a.getFullName()); //Вася Иванович Пупкин
    console.log(b.getFullName());//Анна Иванова
    console.log(c.getFullName());//Елизавета Петрова
}

// 3 createPersonClosure
//Задание в целом, аналогично предыдущему, однако, в объект заносить name, surname, fatherName и age не нужно.
//  name и surname должны быть параметрами, переменные age и fatherName объявите через let в теле createPersonClosure.
//   Внутри createPersonClosure объявите следующие функции:
//  getName // getSurname // getFatherName // getAge // getFullName
// Эти функции должны возвращать переменные, объявленные в функции createPersonClosure
// Следующие функции:
// setName // setsurname // setFatherName // setAge // setFullName
// должны принимать один параметр (newName, newsurname и т.п.), проверять его на корректность и менять значение переменных, объявленных внутри createPersonClosure. Проверки на корректность:
// имя, фамилия, отчество должно быть строкой с большой буквы
// возраст должен быть числом от 0 до 100.
// Если проверка на корректность не пройдена, функция не должна менять соответстующую переменную.
// Функция setFullName должна разбивать строку по пробелам и заносить части строки в surname, name и fatherName
// Все функции set должны возвращать то значение, которое по итогу попало во внутренюю переменную. То есть если новое значение некорректно, то функция возвращает старое значение
// В объекте-результате createPersonClosure должны быть только эти 10 функций (геттеров и сеттеров). В коде функций this не используется

function testData(str){
    if(str.length<1 || str[0].toUpperCase()!==str[0]) return false;
    for(i=1; i<str.length; i++){
        if(str[i].toLowerCase()!==str[i]) return false;
    }
    return true;
}
function createPersonClosure(name, surname){
    let age=0;
    let fatherName='';
    const getName =       function(){
                        return `${name}`;
                    }
    const getSurname =    function(){
                        return `${surname}`;
                    }
    const getFatherName = function(){
                        return `${fatherName}`;
                    }
    const getAge =        function(){
                        return `${age}`;
                    }
    const getFullName =   function(){
                        return `${surname} ${name} ${fatherName}`;
                    }
    const setName =       function(newName){
                        return (testData(newName)? name=newName:name);
                    }
    const setSurname =    function(newSurname){
                        return(testData(newSurname)?surname=newSurname:surname);
                    }
    const setFatherName = function(newFatherName){
                        return(testData(newFatherName)?fatherName=newFatherName:fatherName);
                    }
    const setAge =        function(newAge){
                        return ((newAge>=0 && newAge<=100)?age=newAge:age);
                    }
    const setFullName =   function(FullName){
                        let arr=FullName.split(' ');
                        if(arr.length===3){
                            surname=setSurname(arr[0]);
                            name=setName(arr[1]);
                            fatherName=setFatherName(arr[2]);
                        }
                        return `${surname} ${name} ${fatherName}`;
                    }
    return {getName, getSurname, getFatherName, getAge, getFullName, setName, setSurname, setFatherName, setAge, setFullName };
}
function task3(){
    console.clear();
    console.log("Homework 3.1 task3");
    const a = createPersonClosure("Вася", "Пупкин");
    const b = createPersonClosure("Анна", "Иванова");
    console.log(a.getName());
    a.setAge(15);
    a.setAge(150); //не работает
    b.setFullName("Петрова Анна Николаевна");
    console.log(b.getFatherName());
    a.setName('Vasya');
    console.log(a.getName());
}

// 4 createPersonClosureDestruct
// Сделайте набор параметров функции из предыдущего задания объектом, используйте деструктуризацию для извлечения параметров.
// Задайте значения по умолчанию
// const a = createPersonClosureDestruct(createPerson("Вася Пупкин"))
// const b = createPersonClosureDestruct({name: 'Николай', age: 75})
function createPersonClosureDestruct({name='Ivan', surname='Ivanov', fatherName='Ivanovich', age=18}){
    const getName =       function(){
        return `${name}`;
    }
    const getSurname =    function(){
        return `${surname}`;
    }
    const getFatherName = function(){
        return `${fatherName}`;
    }
    const getAge =        function(){
        return `${age}`;
    }
    const getFullName =   function(){
        return `${surname} ${name} ${fatherName}`;
    }
    const setName =       function(newName){
        return (testData(newName)? name=newName:name);
    }
    const setSurname =    function(newSurname){
        return(testData(newSurname)?surname=newSurname:surname);
    }
    const setFatherName = function(newFatherName){
        return(testData(newFatherName)?fatherName=newFatherName:fatherName);
    }
    const setAge =        function(newAge){
        return ((newAge>=0 && newAge<=100)?age=newAge:age);
    }
    const setFullName =   function(FullName){
        let arr=FullName.split(' ');
        if(arr.length===3){
            surname=setSurname(arr[0]);
            name=setName(arr[1]);
            fatherName=setFatherName(arr[2]);
        }
        return `${surname} ${name} ${fatherName}`;
    }
return {getName, getSurname, getFatherName, getAge, getFullName, setName, setSurname, setFatherName, setAge, setFullName };
}
function task4(){
    console.clear();
    console.log("Homework 3.1 task4");
    const a = createPersonClosureDestruct(createPerson("Вася", "Пупкин"));
    const b = createPersonClosureDestruct({name: 'Николай', age: 75});
    console.log(a.getFullName(), a.getAge());
    console.log(b.getFullName(), b.getAge());
}

// 5 isSorted
// Напишите функцию isSorted, которая принимает набор параметров любого размера, и возвращает true, 
// когда все параметры - это числа, и каждое из них больше предыдущего параметра.
function isSorted(){
    //debugger;
    if(isNaN(Number(arguments[0]))) return false;
    for(let i=1; i<arguments.length; i++){
        if(isNaN(Number(arguments[i])) || arguments[i-1]>=arguments[i])return false;
    }
    return true;
}
function task5(){
    console.clear();
    console.log("Homework 3.1 task5");
    console.log(isSorted([25,50]));
    console.log(isSorted(25,'r',30));
    console.log(isSorted(25,20,30));
    console.log(isSorted(25,27,30));
    console.log(isSorted(25,'27',30));
}

// 6 Test isSorted
// Используя циклический ввод в массив (задание array fill), обеспечьте ввод данных для isSorted
function task6(){
    console.clear();
    console.log("Homework 3.1 task6");
    const arr=[];
    while(str=prompt("Введите что-нибудь или отмену для завершения")){
        arr[arr.length]=str;
    }
    console.log(`Вы ввели вот такой массив: ${arr}`);
    console.log(isSorted(...arr));
}

// 7 personForm
// Напишите функцию, которая принимает два параметра: родительский DOM-элемент и объект-результат работы createPersonClosure 
// (или createPersonClosureDestruct, результаты у обоих этих функций одинаковые) и рисует форму, которая позволяет редактировать данные о персоне.
// В начале работы personForm создает 5 полей ввода (имя, фамилия, отчество, возраст, ФИО) в родительском DOM-элементе и устанавливает туда значения, 
// прочитанные с помощью getName, getSurname и т.д.
// По событию oninput в любом из полей ввода нужно запускать соответствующий set..... 
// Например при изменении поля ввода имени должен запускаться setName(какой-то инпут.value). Функции set... возвращают значение, и его нужно занести обратно в input.
//  Таким образом в полях ввода невозможно будет ввести некорректные значения (например возраст не сможет выйти за пределы 0-100 лет)
// const b = createPersonClosure("Анна", "Иванова")
// b.setAge(15)
// b.setFullName("Петрова Анна Николаевна")
// Обратите внимание, что при изменении ФИО должны поменяться поля имя, отчество и фамилия
function personForm(parent, person){
    const name=document.createElement('input');
    parent.appendChild(name); 
    name.value=person.getName();
    name.oninput=()=>{
            name.value=person.setName(name.value);
            fullName.value=person.setFullName(`${surname} ${name} ${fatherName}`);
        }
    const fatherName=document.createElement('input');
    parent.appendChild(fatherName);
    fatherName.value=person.getFatherName();
    fatherName.oninput=()=>{
            fatherName.value=person.setFatherName(fatherName.value);
            fullName.value=person.setFullName(`${surname} ${name} ${fatherName}`);
        }
    const surname=document.createElement('input');
    parent.appendChild(surname);
    surname.value=person.getSurname();
    surname.oninput=()=>{
            surname.value=person.setSurname(surname.value);
            fullName.value=person.setFullName(`${surname} ${name} ${fatherName}`);
        }
    const age=document.createElement('input');
    parent.appendChild(age);
    age.value=person.getAge();
    age.oninput=()=>{
        age.value=setAge(age.value);
    }
    const fullName=document.createElement('input');
    parent.appendChild(fullName);
    fullName.value=person.getFullName();
    fullName.oninput=()=>{
        fullName.value=setFullName(fullName.value);
        name.value=getName();
        surname.value=getSurname();
        fatherName.value=getFatherName();
    }
}
function task7(){
    console.clear();
    console.log("Homework 3.1 task7");
    const parent=document.getElementById('container');
    personForm(parent, createPersonClosureDestruct({name: 'Николай', age: 75}));
}

// 8 getSetForm
function addInDom(name, parent, disableInput){
    const nameTemp=document.createElement('input');  
    nameTemp.placeholder=name;
    nameTemp.type="text";
    const labelTemp=document.createElement('label');
    labelTemp.innerText=name+":";
    labelTemp.style="display: flex; justify-content: space-between; margin-left: 20px" ;
    parent.appendChild(labelTemp);
    labelTemp.appendChild(nameTemp);
    if(disableInput) nameTemp.disabled=true;
    return nameTemp;   
}
function getSetForm(parent, getSet){
    //заполняем реестр и формируем инпуты в DOM
    let inputs={};
    for(key in getSet){
        if(key.substring(0,3)==='get'){
            const keyName=key.substring(3,);
            inputs={...inputs, [keyName]:addInDom(keyName, parent, !('set'+keyName in getSet))};
        }
    }
    const updateInputs = () => { 
        for(key in inputs){
            inputs[key].value=getSet['get'+key]();
        }
    }
    for(let key in inputs){
        if(('set'+key) in getSet){    
            inputs[key].oninput=()=>{
                inputs[key].value=getSet['set'+key](inputs[key].value);
                updateInputs();
            }
        }
    }
    updateInputs();
}
function task8(){
    console.clear();
    console.log("Homework 3.1 task8");
    
    const person=createPersonClosureDestruct({name: 'Николай', age: 75});
    
    let car;
    {   
    let brand = 'BMW', model = 'X5', volume = 2.4
    car = {
        brand:'BMW',
        model:'XS',
        volume:2.4,
        getBrand(){
            return brand
        },
        setBrand(newBrand){
            if (newBrand && typeof newBrand === 'string'){
                brand = newBrand
            }
            return brand
        },
        
        getModel(){
            return model
        },
        setModel(newModel){
            if (newModel && typeof newModel === 'string'){
                model = newModel
            }
            return model
        },
        
        getVolume(){
            return volume
        },
        setVolume(newVolume){
            newVolume = +newVolume
            if (newVolume && newVolume > 0 && newVolume < 20){
                volume = newVolume
            }
            return volume
        },
        
        getTax(){
            return volume * 100
        }
    }
    }
    const parent=document.getElementById('container'); 
    getSetForm(parent, person);

    getSetForm(parent, car);
}