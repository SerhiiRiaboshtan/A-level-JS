// 1
function updateTable(idTable, data){
    const keyNumber=Object.keys(data).length;
    let parent=document.getElementById(idTable);
    do{   
        for(let child of parent.children)  child.remove();
    }while(parent.children.length>0);
    let i=1;
    for(keyData in data){
        let tempTr=document.createElement('tr');
        tempTr.innerHTML+=`<td align='center'>${i}</td><td align='center'>${keyData}</td><td align='center'>${data[keyData].amount}</td><td align='center'>${data[keyData].price}</td>`;
        parent.appendChild(tempTr);
        i++;
    }
}
function createProductList(parent, data){
    parent=document.getElementById(parent);
    for(key in data){
        let tempList=document.createElement('option');
        tempList.innerHTML=key;
        parent.appendChild(tempList);
    }
}
function reducer(state, action, data){
    if(!state){
        updateTable("stallBody", goodsRange);
        createProductList('productList', goodsRange);
        return goodsRange;
    }
    if (type === 'КУПИТЬ'){
        if(state[data.Product].amount-Number(data.amount)<0 || Number(state[data.Product].price)*Number(data['amount'])>Number(data.wallet)){
            alert('Недостаточно товара в ларьке или денег у вас!');
        }else{
            let newState={...state}; newState[data.Product].amount-=data.amount;
            return newState;
        }
    }
    return state;
}
function createStore(reducer){
    let state       = reducer(undefined, {}) //стартовая инициализация состояния, запуск редьюсера со state === undefined
    let cbs         = []                     //массив подписчиков
    
    const getState  = () => state            //функция, возвращающая переменную из замыкания
    const subscribe = cb => (cbs.push(cb),   //запоминаем подписчиков в массиве
                             () => cbs = cbs.filter(c => c !== cb)) //возвращаем функцию unsubscribe, которая удаляет подписчика из списка
                             
    const dispatch  = (action, data) => { 
        const newState = reducer(state, action, data) //пробуем запустить редьюсер
        if (newState !== state){ //проверяем, смог ли редьюсер обработать action
            state = newState //если смог, то обновляем state 
            let currentCash=Number(state[data.Product].price)*Number(data['amount']);
            for (let cb of cbs)  cb() //и запускаем подписчиков
        }
    }
    return {
        getState, //добавление функции getState в результирующий объект
        dispatch,
        subscribe //добавление subscribe в объект
    }
}
function task1(){
    console.clear();
    console.log("Homework 6.2 task1");
    // updateTable("stallBody", goodsRange);
    // createProductList('productList', goodsRange);
    const store = createStore(reducer);
    document.getElementById('buyButton').onclick=()=>{
       store.dispatch(type='КУПИТЬ', {wallet: wallet.value, Product: productList.value, amount: kvo.value });
    }
    const unsubscribe = store.subscribe(() => updateTable("stallBody", store.getState()));
}
const goodsRange={    
    'beer':{'amount': 100, 'price': 40,},
    'chips':{'amount': 80, 'price': 30,},
    'nuts':{'amount': 20, 'price': 25,},
    'smallFish':{'amount': 30, 'price': 25,},
    'sausages':{'amount': 20, 'price': 100,},
}