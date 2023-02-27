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
function createPerson(Name, Surname){
    getFullName=function() {return `${this.Name} ${this.hasOwnProperty('fatherName')?this.fatherName:''} ${this.Surname}`};
    return {Name:Name, Surname:Surname, getFullName};
}
function task2(){
    console.clear();
    console.log("Homework 3.1 task2");
    const a = createPerson("Вася", "Пупкин");
    const b = createPerson("Анна", "Иванова");
    const c = createPerson("Елизавета", "Петрова");
    console.log(a.getFullName()); //Вася Пупкин
    a.fatherName = 'Иванович' ;   //Вася Иванович Пупкин
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
// setName // setSurname // setFatherName // setAge // setFullName
// должны принимать один параметр (newName, newSurname и т.п.), проверять его на корректность и менять значение переменных, объявленных внутри createPersonClosure. Проверки на корректность:
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
function createPersonClosure(Name, Surname){
    let Age=0;
    let FatherName='';
    getName=function(){return `${Name}`};
    getSurname=function(){return `${Surname}`};
    getFatherName=function(){return `${FatherName}`};
    getAge=function(){return `${Age}`};
    getFullName=function(){return `${Surname} ${Name} ${FatherName}`};
    setName=function(newName){return (testData(newName)? Name=newName:Name)}
    setSurname=function(newSurname){return(testData(newSurname)?Surname=newSurname:Surname)}
    setFatherName=function(newFathername){return(testData(newFathername)?FatherName=newFathername:FatherName)}
    setAge=function(newAge){return ((newAge>=0 && newAge<=100)?Age=newAge:Age)};
    setFullName=function(FullName){
        let arr=FullName.split(' ');
        if(arr.length===3 && testData(arr[0]) && testData(arr[1]) && testData(arr[2])){
            Name=arr[1];
            Surname=arr[0];
            FatherName=arr[2];
        }
        return `${Name} ${FatherName} ${Surname}`;
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
    console.log(b.getFatherName()); //Николаевна
    a.setName('Vasya');
    console.log(a);
    console.log(b);
    debugger;
}

// 4 createPersonClosureDestruct
// Сделайте набор параметров функции из предыдущего задания объектом, используйте деструктуризацию для извлечения параметров.
// Задайте значения по умолчанию
// const a = createPersonClosureDestruct(createPerson("Вася Пупкин"))
// const b = createPersonClosureDestruct({name: 'Николай', age: 75})
function createPersonClosureDestruct({Name='Ivan', Surname='Ivanov', FatherName='Ivanovich', Age=18}){
    getName=function(){return `${Name}`};
    getFatherName=function(){return `${FatherName}`};
    getSurname=function(){return `${Surname}`};
    getAge=function(){return `${Age}`};
    getFullName=function(){return `${Surname} ${Name} ${FatherName}`};
    setName=function(newName){return (testData(newName)? Name=newName:Name)}
    setSurname=function(newSurname){return(testData(newSurname)?Surname=newSurname:Surname)}
    setFatherName=function(newFathername){return(testData(newFathername)?FatherName=newFathername:FatherName)}
    setAge=function(newAge){return ((newAge>=0 && newAge<=100)?Age=newAge:Age)};
    setFullName=function(FullName){
        let arr=FullName.split(' ');
        if(arr.length===3 && testData(arr[0]) && testData(arr[1]) && testData(arr[2])){
            Name=arr[1];
            Surname=arr[0];
            FatherName=arr[2];
        }
        return `${Surname} ${Name} ${FatherName}`;
    }
    return {getName, getSurname, getFatherName, getAge, getFullName, setName, setSurname, setFatherName, setAge, setFullName };
}
function task4(){
    console.clear();
    console.log("Homework 3.1 task4");
    const a = createPersonClosureDestruct(createPerson("Вася", "Пупкин"));
    const b = createPersonClosureDestruct({Name: 'Николай', Age: 75});
    console.log(a);
    console.log(b);
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
    const parentFind=document.getElementById(parent);
    const Name=document.createElement('input'); Name.id='Name'; parentFind.appendChild(Name); Name.value=person.getName();
    Name.oninput=()=>{
            Name.value=person.setName(Name.value);
            FullName.value=person.setFullName(`${Surname} ${Name} ${FatherName}`);
        }
    const FatherName=document.createElement('input'); FatherName.id='FatherName'; parentFind.appendChild(FatherName); FatherName.value=person.getFatherName();
    FatherName.oninput=()=>{
            FatherName.value=person.setFatherName(FatherName.value);
            FullName.value=person.setFullName(`${Surname} ${Name} ${FatherName}`);
        }
    const Surname=document.createElement('input'); Surname.id='Surname'; parentFind.appendChild(Surname); Surname.value=person.getSurname();
    Surname.oninput=()=>{
            Surname.value=person.setSurname(Surname.value);
            FullName.value=person.setFullName(`${Surname} ${Name} ${FatherName}`);
    }
    const Age=document.createElement('input'); Age.id='age'; parentFind.appendChild(Age); Age.value=person.getAge();
    Age.oninput=()=>{
        Age.value=setAge(Age.value);
    }
    const FullName=document.createElement('input'); FullName.id='Fullname'; parentFind.appendChild(FullName); FullName.value=person.getFullName();
    FullName.oninput=()=>{
        FullName.value=setFullName(FullName.value);
        Name.value=getName();
        Surname.value=getSurname();
        FatherName.value=getFatherName();
    }
}
function task7(){
    console.clear();
    console.log("Homework 3.1 task7");
    personForm('container', createPersonClosureDestruct({Name: 'Николай', Age: 75}));
}

// 8 getSetForm
function addInDOM(Name, nameDOM, parent, person){
    let parentFind;
    const nameTemp=document.createElement('input'); 
    nameTemp.id=nameDOM; 
    nameTemp.placeholder=Name;
    nameTemp.type="text";
    const labelTemp=document.createElement('label');
    labelTemp.id='label'+Name;
    labelTemp.for=nameDOM;
    labelTemp.innerText=Name+":";
    labelTemp.style="display: flex; justify-content: space-between; margin-left: 20px" ;
    parentFind=document.getElementById(parent);
    parentFind.appendChild(labelTemp);
    parentFind=document.getElementById(labelTemp.id);
    parentFind.appendChild(nameTemp);
    nameTemp.oninput=function(){
        // debugger;
        const tempName=document.getElementById(this.id);
        const funcName='set'+Name;
        tempName.value=person['set'+Name](tempName.value);
        updateInputs(person);
    }   
}
let inputs={}
function updateInputs(person){
    debugger;
    for(key in inputs){
        const tempEl=document.getElementById(inputs[key]);
        tempEl.value=person['get'+key](tempEl.value);
    }
}   
function getSetForm(parent, person){
    //заполняем реестр и формируем инпуты в DOM
    const arrSet=[];
    for(key in person){
        if(key.substring(0,3)==='get'){
            const keyName=key.substring(3,);
            if(!inputs.hasOwnProperty(keyName)){
                const keyDOM='input'+key.substring(3,)+'DOM';
                Object.assign(inputs, {[keyName]:keyDOM});
                addInDOM(keyName, keyDOM, parent, person);
            } 
        }
        if(key.substring(0,3)==='set') arrSet.push(key.substring(3,));// Запоминаем имена set функций (без set)
    }
    //проверяем наличие функций setЧТОТО аналогичных по имени getЧТОТО
    //arrSet.shift(); // т.к.у нас совпадают get и set, то временно убираем один set для проверки работы 
    for(key in inputs) if(arrSet.indexOf(key)===-1) document.getElementById(inputs[key]).disabled = true; 
    updateInputs(person);
}
function task8(){
    console.clear();
    console.log("Homework 3.1 task8");
    // const person=createPersonClosureDestruct({Name: 'Николай', Age: 75});
    // getSetForm('container', person);

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
    getSetForm('container', car);
}