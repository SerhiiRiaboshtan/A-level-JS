//Homework 4.1 Промисы
// 1 Исследуйте сайт swapi.dev, рассмотрите JSON-ы, которые предоставляются этим сервисом (например: https://swapi.dev/api/people/1/, https://swapi.dev/api/people/2/, https://swapi.dev/api/starships/12/
//С помощью следующего кода считать и вывести информацию о Люке Скайвокере:3

// Напишите функцию для отображения любого JSON в форме таблицы. Функция должна принимать два параметра:
// DOM - элемент, в котором строится таблица
// JSON, который нужно отобразить.
function displayJSON(parent, json){
    let tempParent=document.getElementById(parent);
    let tableNew=document.createElement('table');
    tableNew.border='1px';
    for(key in json){
        let tempRow=document.createElement('tr');
        tempRow.innerHTML=`<td align='left'>${key}</td><td align='left'>${json[key]}</td>`;
        tableNew.appendChild(tempRow);
    }
    tempParent.append(tableNew);
}
function task1(){
    console.clear();
    console.log("Homework 4.1 task1");
    fetch('https://swapi.dev/api/people/1/')
        .then(res => res.json())
        .then(luke =>displayJSON('container', luke));
}

// 2 fetch improved
// Расширить функцию отображения:
// Если одно из полей строка или массив.
// Если строки или строка содержат в себе https://swapi.dev/api/
// То выводить вместо текста строки кнопку, при нажатии на которую:
// делается fetch данных по этой ссылке
// функция отображения запускает сама себя(рекурсивно) для отображения новых данных в том же элементе.
function improveDisplayJSON(parent, json){
    let tempParent=document.getElementById(parent);
    let tableNew=document.createElement('table');
    tableNew.border='1px';
    for(let key in json){
        let tempRow=document.createElement('tr');
        tempRow.innerHTML=`<td align='left'>${key}</td>`;
        tempRow.id=key;
        tableNew.appendChild(tempRow);
        if(typeof(json[key])==='number' || (typeof(json[key])==='string' && !json[key].includes('https://swapi.dev/api/'))){
            tempRow.innerHTML+=`<td align='left'>${json[key]}</td>`;
        }else{
            if(typeof(json[key])==='string'){
                let newButton=document.createElement('button');
                newButton.innerText=json[key];
                newButton.onclick=()=>fetch(newButton.innerText)
                    .then(res => res.json())
                    .then(data =>improveDisplayJSON(tempRow.id, data));
                tempRow.appendChild(newButton);
            }else {
                for(let key1 of json[key]){
                    let newButton=document.createElement('button');
                    newButton.innerText=[key1];
                    newButton.onclick=()=>fetch(newButton.innerText)
                        .then(res => res.json())
                        .then(data =>improveDisplayJSON(tempRow.id, data));
                    tempRow.appendChild(newButton);
                }
            }
        }
        
    }
    tempParent.append(tableNew);
}
function task2(){
    console.clear();
    console.log("Homework 4.1 task2");
    fetch('https://swapi.dev/api/people/1/')
        .then(res => res.json())
        .then(luke =>improveDisplayJSON('container', luke));
}

// 3 race Используя Promise.race запустите запрос на API (swapi.dev) параллельно с delay. 
// По результату определите, что было быстрее, запрос по сети, или определенный интервал времени. 
// Подберите параметр delay так, что бы результат был неизвестен изначально, и при многократных запусках быстрее был то delay, то myfetch.
function task3(){
    console.clear();
    console.log("Homework 4.1 task3");
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, 'delay');
      });
    let promise2=fetch('https://swapi.dev/api/people/1/')
          .then(res => res.json())
          .then(luke =>'fetch')
    Promise.race([promise1, promise2]).then((value) => {
        console.log(value);
    });
}

// 4 Promisify: confirm
// Промисифицируйте confirm. Напишите функцию, которая возвращает промис, который переходит в состояние fulfilled при нажатии "OK" и реджектится при нажатии "Cancel". Функция должна принимать строку для confirm:

// Промисификация не делает confirm неблокирующей функцией. Данное задание имеет только образовательный смысл.
function confirmPromise(text){
    const str=confirm(text);
    return new Promise((resolve, reject)=>{
        if(str===true){
            resolve('Ok');
        } else reject('Cancel');
    })
}
                                      
function task4(){
    console.clear();
    console.log("Homework 4.1 task4");
    confirmPromise('Промисы это сложно?').then( () => console.log('не так уже и сложно'),
                                                () => console.log('respect за усидчивость и внимательность'));
  
}

// 5 Promisify: prompt
// Аналогично предыдующему заданию промисифицируйте prompt. В случае нажатия "ОК" промис резолвится и его результатом становится текст, введенный пользователем в окне prompt. 
// В случае нажатия "Отмены" - промис реджектится. Параметром функции будет текст сообщения в prompt


function promptPromise(text){
    str=prompt(text);
    return new Promise((resolve, reject)=>{
        if(str===null || str ===''){
            reject(text);
        }else resolve(str);
    });
}
function task5(){
    console.clear();
    console.log("Homework 4.1 task5");
    promptPromise("Как тебя зовут?").then(name => console.log(`Тебя зовут ${name}`), 
                                            () => console.log('Ну зачем морозиться, нормально же общались'))    
}

// 6 Promisify: LoginForm
// Промисифицируйте конструктор LoginForm. В промисифицированную функцию передается DOM-элемент - родитель для формы, В колбэке, предназначенном для получения логина и пароля в момент нажатия кнопки "Login...", который вы назначаете в объекте LoginForm, зарезолвите промис. 
// Результатом промиса должен быть объект с ключами login и password, ключи должны содержать значения полей ввода.
// function loginPromise(parent){
//     function executor(resolve, reject){
//         const form = new LoginForm(parent)
//         .......
//     }
//     return new Promise(executor)
// }
// loginPromise(document.body).then(({login, password}) => console.log(`Вы ввели ${login} и ${password}`))
function LoginForm(parent){
    this.login='';
    this.onLogin=()=>new Promise((resolve, reject)=>resolve('true'));
    this.hideButton=function(value, type){
        if((type==='login' && (value==='' || this.p.password==='')) || (type==='password' && (value==='' || this.login===''))){
            document.getElementById('loginBtn').style='visibility:hidden';
        }else {
            document.getElementById('loginBtn').style='visibility:visible';
        }
    }
    const nameTemp=document.createElement('input');
    nameTemp.oninput=()=>{
        this.login=nameTemp.value;
        this.hideButton(nameTemp.value, 'login');
    } 
    nameTemp.id='inputLoginDOM';
    const labelTemp=document.createElement('label');
    labelTemp.id='labelInput'+Math.floor(Math.random() * 10000).toString();
    labelTemp.for='inputLoginDOM';
    labelTemp.innerText='Login:';
    labelTemp.style="display: flex; justify-content: space-between; margin-left: 20px;" ;
    let parentFind=document.getElementById(parent);
    parentFind.appendChild(labelTemp);
    parentFind=document.getElementById(labelTemp.id);
    parentFind.appendChild(nameTemp);
    const btn=document.createElement('button');
    btn.innerText='Login';
    btn.id='loginBtn';
    btn.style='visibility:hidden';
    parentFind.appendChild(btn);
    this.p=new Password('container', true);
    this.p.onChange=(param)=>{
        this.p.password=param;
        this.hideButton(param, 'password');
    }
}
function Password(parent, open){
    this.password='';
    this.checkbox=true;
    this.setValue=function(data){this.password=data; nameTemp.value=data};
    this.getValue=function(){return this.password};
    this.setOpen=function(data){this.checkbox=data; checkTemp.checked=data; data?nameTemp.type="text":nameTemp.type='password'};
    this.getOpen=function(){return this.checkbox};
    let parentFind;
    const nameTemp=document.createElement('input'); 
    nameTemp.id='inputPasswordDOM';
    nameTemp.oninput=()=>Object.hasOwn(this, 'onChange')?this.onChange(nameTemp.value):'';
    open?nameTemp.type="text":nameTemp.type='password';
    const labelTemp=document.createElement('label');
    labelTemp.id='labelInput'+Math.floor(Math.random() * 10000).toString();
    labelTemp.for=nameTemp.id;
    labelTemp.innerText='Password:';
    labelTemp.style="display: flex; justify-content: start; margin-left: 20px" ;
    this.inputID=nameTemp.id;
    this.label=labelTemp.id;
    parentFind=document.getElementById(parent);
    parentFind.appendChild(labelTemp);
    parentFind=document.getElementById(labelTemp.id);
    parentFind.appendChild(nameTemp);
    const checkTemp=document.createElement('input'); 
    checkTemp.id='checkDOM'+Math.floor(Math.random() * 10000).toString(); 
    checkTemp.checked=open;
    checkTemp.type='checkbox';
    checkTemp.oninput=()=>{
        Object.hasOwn(this, 'onOpenChange')?this.onOpenChange(checkTemp.checked):'';
        checkTemp.checked?nameTemp.type="text":nameTemp.type='password';
    }
    parentFind.appendChild(checkTemp);
}
function loginPromise(parent){
    function executor(resolve, reject){
        const form = new LoginForm(parent)
        return loginBtn.onclick=()=>{resolve({'login':document.getElementById('inputLoginDOM').value, 'password': document.getElementById('inputPasswordDOM').value})};
    }
    return new Promise(executor)
}
function task6(){
    console.clear();
    console.log("Homework 4.1 task6");
    loginPromise('container').then(({login, password}) => console.log(`Вы ввели ${login} и ${password}`))
}