"use strict"; 
// Homework 3.3 ФООП
// 1 Person Constructor
// Переделайте задание createPerson на функцию конструктор Person
function Person(Name, Surname){
    this.Name=Name;
    this.Surname=Surname;
    this.getFullName=function() {return `${this.Name} ${this.hasOwnProperty('fatherName')?this.fatherName:''} ${this.Surname}`};
}
function task1(){
    console.clear();
    console.log("Homework 3.3 task1");
    const a = new Person("Вася", "Пупкин");
    const b = new Person("Анна", "Иванова");
    const c = new Person("Елизавета", "Петрова");    
    console.log(a.getFullName()); //Вася Пупкин
    a.fatherName = 'Иванович';    //Вася Иванович Пупкин 
    console.log(a.getFullName());
    console.log(b.getFullName()); //Анна Иванова
    console.log(c.getFullName());
}

// 2 Person Prototype
// Переделайте предыдущее задание, вынеся методы в прототип. Для этого вместо присвоения в this занесите их в объект Person.prototype. После этой переделки все должно работать по старому:
function Person(Name, Surname){
    this.Name=Name;
    this.Surname=Surname;
}
Person.prototype.getFullName=function(){return `${this.Name} ${this.hasOwnProperty('fatherName')?this.fatherName:''} ${this.Surname}`};
function task2(){
    console.clear();
    console.log("Homework 3.3 task2");
    const a = new Person("Вася", "Пупкин");
    const b = new Person("Анна", "Иванова");
    const c = new Person("Елизавета", "Петрова");    
    console.log(a.getFullName()); //Вася Пупкин
    a.fatherName = 'Иванович';    //Вася Иванович Пупкин 
    console.log(a.getFullName());
    console.log(b.getFullName()); //Анна Иванова
    console.log(c.getFullName());
}

// 3 Store
// Переделайте функцию createStore (та, которая хранилище Redux) на конструктор Store. Прототип не используйте; оставьте переменные state, cbs и reducer замкнутыми. 
// Соответственно методы subscribe, dispatch и getState должны быть объявлены внутри функции-конструктора и не могут быть в прототипе. Проверьте переделанный конструктор на вашем ДЗ по ларьку;
function task3(){
    console.clear();
    console.log("Homework 3.3 task3");
    function createStore1(reducer){
        state       = reducer(undefined, {}) 
        cbs         = []                     
        
        getState  = () => state;           
        subscribe =cb => (cbs.push(cb),  
                                 () => cbs = cbs.filter(c => c !== cb))
                                 
        dispatch  = (action, data) => { 
            const newState = reducer(state, action, data) 
            if (newState !== state){ 
                state = newState 
                let currentCash=Number(state[data.Product].price)*Number(data['amount']);
                for (let cb of cbs)  cb()
            }
        }
        return {
            getState, 
            dispatch,
            subscribe
        }
}
}

// 4 Password
function Password(parent, open){
    this.password='';
    this.checkbox=true;
    this.setValue=function(data){this.password=data; nameTemp.value=data};
    this.getValue=function(){return this.password};
    this.setOpen=function(data){this.checkbox=data; checkTemp.checked=data; data?nameTemp.type="text":nameTemp.type='password'};
    this.getOpen=function(){return this.checkbox};
    let parentFind;
    const nameTemp=document.createElement('input'); 
    nameTemp.id='inputDOM'+Math.floor(Math.random() * 10000).toString();
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

function task4(){
    console.clear();
    console.log("Homework 3.3 task4");
    let p = new Password('container', true);

    p.onChange = data => console.log(data);
    p.onOpenChange = open => console.log(open); 

    p.setValue('qwerty');
    console.log(p.getValue());   

    p.setOpen(false);
    console.log(p.getOpen());
    
}

// 5 LoginForm
// С помощью предыдущего кода Password сделайте форму логина, кнопка в которой будет активна только если и login и пароль не пусты.
function LoginForm(parent){
    let login='';
    const hideButton=function(value, type){
        if((type==='login' && (value==='' || p.password==='')) || (type==='password' && (value==='' || login===''))){
            document.getElementById('loginBtn').style='visibility:hidden';
        }else {
            document.getElementById('loginBtn').style='visibility:visible';
        }
    }
    const nameTemp=document.createElement('input');
    nameTemp.oninput=()=>{
        login=nameTemp.value;
        hideButton(nameTemp.value, 'login');
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
    let p=new Password('container', true);
    p.onChange=(param)=>{
        p.password=param;
        hideButton(param, 'password');
    }
    return {login, p};
}
function task5(){
    console.clear();
    console.log("Homework 3.3 task5");
    let l=LoginForm('container');
}

// 6 LoginForm Constructor
// оформите предыдущую задачу как функцию-конструктор. Продумайте и предусмотрите геттеры, сеттеры и колбэки.
function LoginFormConstructor(parent){
    this.login='';
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
    //return {login, p};
}
function task6(){
    console.clear();
    console.log("Homework 3.3 task6");
    let l= new LoginFormConstructor('container');
}

// 7 Password Verify
// С помощью Password сделайте пару инпутов, которые проверяют введеный пароль (в двух полях ввода) на совпадение. Подсвечивайте поля красным цветом/бордером когда пароли не совпадают При открытом пароле в первом поле ввода (которое реализуется с помощью объекта класса Password второе поле вводы должно пропадать с экрана Таким образом:
// Когда Password в скрытом режиме - появляется второй инпут (<input type='password'>) с паролем в скрытом режиме
// Когда Password в открытом режиме - второй инпут пропадает
function task7(){
    console.clear();
    console.log("Homework 3.3 task7");
    let p1=new Password('container', true);
    p1.onChange=data=>{
        p1.password=data;
        testEq(data, undefined);
    }
    p1.onOpenChange=data=>{
        p1.checkbox=data;
        testEq(data, undefined);
    }
    let p2=new Password('container', false);
    p2.onChange=data=>{
        p2.password=data;
        testEq(undefined, data);
    }
    function testEq(input1, input2){
        if(input1===undefined){
            input1=p1.password;
        }else if(input2===undefined)input2=p2.password;
        if(p1.checkbox){
            document.getElementById(p2.label).style='visibility:hidden';
        }else{
            document.getElementById(p2.label).style='display: flex; justify-content: start; margin-left: 20px;';
            if(input1===input2){
                document.getElementById(p2.inputID).style='color:black';
                document.getElementById(p1.inputID).style='color:black';
            }else{
                document.getElementById(p2.inputID).style='color:red';
                document.getElementById(p1.inputID).style='color:red';
            }
        }
    }
    testEq();
}