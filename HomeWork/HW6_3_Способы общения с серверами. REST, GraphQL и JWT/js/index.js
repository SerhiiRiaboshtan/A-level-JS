// 1
const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms))
function colorLamp(color, state){
    if(state==='On'){
        return 'width: 50px; height: 50px; border: 2px solid '+color+'; border-radius: 25px; background-color:'+color;
    }else return 'width: 50px; height: 50px; border: 2px solid '+color+'; border-radius: 25px; background-color: lightgray;';
}
async function trafficLight(parent, timeRed, timeYellow, timeGreen){//)
    const container=document.createElement('div');
    container.innerHTML='<div id=\'red\' style="width: 50px; height: 50px; border: 2px solid red; border-radius: 25px; background-color: lightgray;"></div> <div id=\'yellow\' style="width: 50px; height: 50px; border: 2px solid yellow; border-radius: 25px; background-color: lightgray"></div> <div id=\'green\' style="width: 50px; height: 50px; border: 2px solid green; border-radius: 25px; background-color: lightgray"></div>'
    parent.append(container);
    while (true){
        //включаем зеленый
        green.style=colorLamp('green', 'On');
        await delay(timeGreen);
        green.style=colorLamp('green');
        //включаем желтый
        yellow.style=colorLamp('yellow', 'On');
        await delay(timeYellow);
        yellow.style=colorLamp('yellow');
        //включаем красный
        red.style=colorLamp('red', 'On');
        await delay(timeRed);
        red.style=colorLamp('red');

    }
}
function task1(){
    console.clear();
    console.log("HW task1");
    trafficLight(document.body, 1000, 500, 1000);
}

// 2
function domEventPromise(element, eventName){
    function executor(resolve){
        element.addEventListener(eventName, function onclick(){
            element.removeEventListener(eventName, onclick );
            resolve(element)});
    }
    return new Promise(executor)
}
async function PedestrianTrafficLight(parent, timeRed, timeGreen, timePedestrian){
    const container=document.createElement('div');
    container.innerHTML='<div id=\'red\' style="width: 50px; height: 50px; border: 2px solid red; border-radius: 25px; background-color: lightgray;"></div><div id=\'green\' style="width: 50px; height: 50px; border: 2px solid green; border-radius: 25px; background-color: lightgray"></div><button id="btn"> Хочу перейти</button>'
    parent.append(container);
    let qqq, flag=false;
    while (true){
        green.style=colorLamp('green', 'On');
        await delay(timeGreen);
        green.style=colorLamp('green');
        
        red.style=colorLamp('red', 'On');
        if(flag){    
            flag=false;
            await delay(timeRed); 
        }else{
            const waitPromise=await Promise.race([domEventPromise(btn, 'click'), delay(timeRed)]);
            if(waitPromise!==timeRed)flag=true; 
        }
        red.style=colorLamp('red');
    }
}
function task2(){
    console.clear();
    console.log("HW task2");
    PedestrianTrafficLight(document.body, 10000, 3000, 30000);
}

// 3
async function speedtest(getPromise, count,parallel=1){
    const startTime=performance.now();
    const arr=[];
    for(let i=0;i<count; i++){
        for(let j=0; j<parallel; j++){
           arr.push(getPromise());
        }
        await Promise.all(arr);  
    }
    
    duration=performance.now()-startTime;
    parallelDuration=duration/(count*parallel);
    parallelSpeed=(count*parallel)/duration;
    querySpeed=(count)/duration;
    queryDuration=duration/count;
    return {
            duration,
            querySpeed, //средняя скорость одного запроса
            queryDuration, //
            parallelSpeed,
            parallelDuration
        }
    }
function task3(){
    console.clear();
    console.log("HW task3");
    speedtest(() => delay(1000), 10, 10 ).then(result => console.log(result));
    speedtest(() => fetch('http://swapi.dev/api/people/1').then(res => res.json()), 10, 5).then(result => console.log(result));
;}

// 4
function gql(endpoint, query, variables){
    return fetch(endpoint,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",   
        },
        body: JSON.stringify({query, variables}),
    }).then(res => res.json());
}
function task4(){
    console.clear();
    console.log("HW task4");
     ;(async () => {
        const catQuery = `query cats($q: String){
                                            CategoryFind(query: $q){
                                                _id name
                                            }
                                        }`
        const cats = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql",  catQuery,  {q: "[{}]"})
        console.log(cats) //список категорий с _id name и всем таким прочим
        
        
        const loginQuery = `query login($login:String, $password:String){
                                    login(login:$login, password:$password)
                            }`
        
        const token = await gql("http://shop-roles.node.ed.asmer.org.ua/graphql", loginQuery ,{login: "test457", password: "123123"})
        console.log(token)
    })();
}

// 5
function jwtDecode(token){
    let arr=[];
    if(typeof(token)!=="string")  return undefined;
    arr=token.split('.');
    if(arr.length!==3) return undefined;
    try{
        return JSON.parse(atob(arr[1]));
    }
    catch{
        return undefined;
    } 
}
function task5(){
    console.clear();
    console.log("HW task5");
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzIyMDVhZWI3NGUxZjVmMmVjMWEzMjAiLCJsb2dpbiI6InRlc3Q0NTciLCJhY2wiOlsiNjMyMjA1YWViNzRlMWY1ZjJlYzFhMzIwIiwidXNlciJdfSwiaWF0IjoxNjY4MjcyMTYzfQ.rxV1ki9G6LjT2IPWcqkMeTi_1K9sb3Si8vLB6UDAGdw"
     
    //{
    //  "sub": {
    //    "id": "632205aeb74e1f5f2ec1a320",
    //    "login": "test457",
    //    "acl": [
    //      "632205aeb74e1f5f2ec1a320",
    //      "user"
    //    ]
    //  },
    //  "iat": 1668272163
    //}

    try {
        console.log(jwtDecode())         //undefined
        console.log(jwtDecode("дичь"))   //undefined
        console.log(jwtDecode("ey.ey.ey"))   //undefined
        console.log(jwtDecode(token))
        console.log('до сюда доработало, а значит jwtDecode не матерился в консоль красным цветом')
    }
    finally{
        console.log('ДЗ, видимо, окончено')
    }
    }

