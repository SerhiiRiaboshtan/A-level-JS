// 1
let localNextMessageId=0;
const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms));
function recallDate(timeStamp){
    const d=new Date(timeStamp);
    return (d.getDate()<10?'0'+d.getDate():d.getDate())+'.'+(d.getMonth()<9?('0'+(d.getMonth()+1)):(d.getMonth()+1))+'.'+d.getFullYear()+'   '+(d.getHours()<10?'0'+d.getHours():d.getHours())+':'+(d.getMinutes()<10?'0'+d.getMinutes():d.getMinutes());
}
async function jsonPost(url, data){
    return fetch(url,{
        method: 'POST',
        body: JSON.stringify(data),
    }).then(res => res.json());
}
async function sendMessage(nick, message){
    const attemptAddMessage=jsonPost("http://students.a-level.com.ua:10012", {func: "addMessage", 'nick': nick, 'message': message});
     return attemptAddMessage;
}
async function getMessages(){
    const newData=await jsonPost("http://students.a-level.com.ua:10012", {func: "getMessages", messageId :localNextMessageId});
    for(key in newData.data){
        let tempDiv=document.createElement('div');
        tempDiv.innerHTML=`${recallDate(newData.data[key].timestamp)} <b>${newData.data[key].nick}</b>: ${newData.data[key].message}`;
        const pointOfInsert=document.getElementById('chat');
        pointOfInsert.prepend(tempDiv);
    }
    localNextMessageId=newData.nextMessageId;
}
async function sendAndCheck(){
    if(nick.value==='' || msg.value===''){
        alert('Sorry, nick or message are empty!');
        return;
    }
    const resultSend=await sendMessage(nick.value, msg.value);
    getMessages();
}
function task1(){
    console.clear();
    console.log("Homework 4.2 task1");
    sendBtn.onclick=()=>sendAndCheck();
    (async function checkLoop(){
        while(true){
            getMessages(); 
            await delay(5000);
        }    
    })();
    
}

// 2
async function getObj(address){
    const res=await fetch(address);
    const json=await res.json();
    return json;
}
async function swapiLinks(address){
    const json=await getObj(address);
    const arr=[];
    for(key in json){
        if(typeof(json[key])==='string' && json[key].includes('https://swapi.dev/api/')){
            arr.push(getObj(json[key]));
        } else if(Array.isArray((json[key]))){
            for(key1 in json[key]){
                if(json[key][key1].includes('https://swapi.dev/api/')){
                    arr.push(getObj(json[key][key1]));
                } 
            }
        }
    }
    const result=await Promise.all(arr);
    let i=0;
    for(key in json){
        if(typeof(json[key])==='string' && json[key].includes('https://swapi.dev/api/')){
            json[key]=result[i++];
        }else if(Array.isArray((json[key]))){
            for(key1 in json[key]){
                if(json[key][key1].includes('https://swapi.dev/api/')) json[key][key1]=result[i++]; 
            }
        }
    } 
    return json;
}
function task2(){
    console.clear();
    console.log("Homework 4.2 task2");
    swapiLinks('https://swapi.dev/api/people/20')
        .then(yodaWithLinks => console.log(JSON.stringify(yodaWithLinks, null, 4)))
}

// 3
function domEventPromise(element, eventName){
    function executor(resolve){
        element.addEventListener(eventName, function onclick(){
            element.removeEventListener(eventName, onclick );
            resolve(element)});
    }
    return new Promise(executor)
}
function task3(){
    console.clear();
    console.log("Homework 4.2 task3");
    const knopka=document.createElement('button');
    knopka.innerText='I am button from task3';
    document.body.appendChild(knopka);
    domEventPromise(knopka, 'click').then( e => console.log('event click happens', e))
}