function createStore(reducer){
    let state       = reducer(undefined, {}) //стартовая инициализация состояния, запуск редьюсера со state === undefined
    let cbs         = []                     //массив подписчиков
    
    const getState  = () => state            //функция, возвращающая переменную из замыкания
    const subscribe = cb => (cbs.push(cb),   //запоминаем подписчиков в массиве
                             () => cbs = cbs.filter(c => c !== cb)) //возвращаем функцию unsubscribe, которая удаляет подписчика из списка
                             
    const dispatch  = action => { 
        if (typeof action === 'function'){ //если action - не объект, а функция
            return action(dispatch, getState) //запускаем эту функцию и даем ей dispatch и getState для работы
        }
        const newState = reducer(state, action) //пробуем запустить редьюсер
        if (newState !== state){ //проверяем, смог ли редьюсер обработать action
            state = newState //если смог, то обновляем state 
            for (let cb of cbs)  cb(state) //и запускаем подписчиков
        }
    }
    return {
        getState, //добавление функции getState в результирующий объект
        dispatch,
        subscribe //добавление subscribe в объект
    }
}

function combineReducers(reducers){
    function totalReducer(state={}, action){
        const newTotalState = {}
        for (const [reducerName, reducer] of Object.entries(reducers)){
            const newSubState = reducer(state[reducerName], action)
            if (newSubState !== state[reducerName]){
                newTotalState[reducerName] = newSubState
            }
        }
        if (Object.keys(newTotalState).length){
            return {...state, ...newTotalState}
        }
        return state
    }
    return totalReducer
}

const gql=getGql("http://shop-roles.node.ed.asmer.org.ua/graphql");
function getGql (endpoint){
    return function gql(query, variables={}){
        return fetch(endpoint,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                ...(localStorage.authToken?{authorization: "Bearer "+localStorage.authToken}:{})  
            },
            body: JSON.stringify({query, variables}),
        }).then(res => res.json())
            .then(res1=>{
                if(!res1.data && res1.errors){
                    throw(new Error(JSON.stringify(res1.errors)));
                }else{
                    return Object.values(res1.data)[0];
                }
            });
    }
}

const reducers = {
    promise: promiseReducer, //допилить много имен для многих промисо
    auth: authReducer,     //часть предыдущего ДЗ
    cart: cartReducer,     //часть предыдущего ДЗ
}

function cartReducer(state={}, {type, count, good}){
    if(type==='CART_ADD' && count>0){
        if(state[good._id]){
            state[good._id].count+=count;
        }else{
            state={...state, ...{[good._id]:{"count": count, good}}};
        }
        return state;
    }
    if(type==='CART_SUB' && count>0){
        if(state[good._id]){
            state[good._id].count-=count;
            if(state[good._id].count<1){
                delete state[good._id];
            }
        }
        return state;
    }
    if(type==='CART_DEL'){
        if(state[good._id]){
            delete state[good._id];
        }
        return state;
    }
    if(type==='CART_SET'){
        if(state[good._id] && count>0){
            state[good._id].count=count;
        }else if(store[good._id] && count<1){
            delete state[good._id];
        }else if(count>0){
            state={...state, ...{[good._id]:{"count": count, good}}};
        }
        return newState;
    }
    if(type==='CART_CLEAR'){
        return {};
    }
    return state;
}
const actionCartAdd = (good, count=1) => ({type: 'CART_ADD', count, good});
const actionCartSub = (good, count=1) => ({type: 'CART_SUB', count, good});
const actionCartDel = (good) => ({type: 'CART_DEL', good});
const actionCartSet = (good, count=1) => ({type: 'CART_SET', count, good});
const actionCartClear = () => ({type: 'CART_CLEAR'});

function authReducer(state={}, {type, token}){
    if(type==='AUTH_LOGIN'){
        const payload=jwtDecode(token);
        if(payload){
            localStorage.authToken=token;
            return {token, payload};
        }
    }
    if(type==='AUTH_LOGOUT'){
        localStorage.removeItem('authToken');
        return {};
    }
    return state;
}
const actionFullLogin = (login, password) =>
    async dispatch => {
        const token = await dispatch(actionLogin(login, password));
        if(token) dispatch(actionAuthLogin(token));
    }
const actionFullRegister=(login, password) =>
    async dispatch => {
        await dispatch(actionRegister(login, password));
   }
const actionLogin = (login, password) =>
    actionPromise('login', gql(`query login($login:String, $password:String){
        login(login:$login, password:$password)
    }`, {'login':login, 'password':password}) );

const actionRegister = (login, password) =>
    actionPromise('registration', gql(`mutation Reg($login:String, $password:String){
        UserUpsert(user:{login:$login, password:$password}){_id, login}
    }`, {'login':login, 'password':password}) );


const totalReducer = combineReducers(reducers);
const store = createStore(totalReducer); 
function promiseReducer(state={}, {type, status, payload, error, name}){
// {
//     имяПромиса1: {status, payload, error},
//     имяПромиса2: {status, payload, error},
//     имяПромиса3: {status, payload, error}
//     ......
// }
    // console.log(name)
    if (type === 'PROMISE'){
        //имена добавить
        return {...state, [name]:{status, payload, error}}
    }
    return state
}

const drawUserInfo = (state) => {
    const {payload} = store.getState().auth;
    const user=document.getElementById('user');
    if (payload){
        user.innerText=payload.sub.login;
        btnLogin.style='visibility:hidden';
        btnRegister.style='visibility:hidden';
        btnLogout.style='visibility:visible';
        btnOrders.style='visibility:visible';

    }else{
        user.innerText='Неавторизован';
        btnLogin.style='visibility:visible';
        btnRegister.style='visibility:visible';
        btnLogout.style='visibility:hidden';
        btnOrders.style='visibility:hidden';
    } 
}
store.subscribe(drawUserInfo);
btnLogout.onclick=()=>{
    store.dispatch(actionAuthLogout());
}

const userLogin = ()=> {
    const [,route] = location.hash.split('/');
    if (route !== 'login') return
    if(store.getState().promise.login){
        const {status, payload} = store.getState().promise.login;
        if(status==='FULFILLED' && !payload){
            alert(`Пользователь с таким логином и паролем не существует`);
        }
    }
}
store.subscribe(userLogin);

const stateRegistration = () => {
    const [,route] = location.hash.split('/');
    if (route !== 'register') return;
    if(store.getState().promise.registration){
        const {status, payload} = store.getState().promise.registration;
        if(status==='FULFILLED' && payload){
            alert(`Пользователь успешно создан!`);
            store.dispatch(actionAuthLogin(token));
        } else if(status==='FULFILLED' && !payload){
            alert(`Невозможно создать пользователя с указанным логином`);
        }
    }    
}
store.subscribe(stateRegistration);
    
const stateOrder= () =>{
    const [,route] = location.hash.split('/');
    if (route !== 'cart') return;
    if(store.getState().promise.newOrder){
        const {status, payload} = store.getState().promise.newOrder;
        if(status==='FULFILLED' && payload && Object.keys(store.getState().cart).length){
            alert(`Заказ успешно создан!`);
            store.dispatch(actionCartClear());
        } else if(status==='FULFILLED' && !payload){
            alert(`Невозможно создать заказ`);
        }
    }
}
store.subscribe(stateOrder);

const actionPending   = (name)      => ({type: 'PROMISE', status: 'PENDING', name})
const actionFulfilled = (name, payload)=> ({type: 'PROMISE', status: 'FULFILLED', payload, name})
const actionRejected  = (name, error)   => ({type: 'PROMISE', status: 'REJECTED',  error, name})

const actionAuthLogin  = token => ({type: 'AUTH_LOGIN', token});
const actionAuthLogout = ()    => ({type: 'AUTH_LOGOUT'});

const actionPromise = (name, promise) =>
    async dispatch => { 
        dispatch(actionPending(name)) //сигнализируем redux, что промис начался
        try{
            const payload = await promise //ожидаем промиса
            dispatch(actionFulfilled(name, payload)) //сигнализируем redux, что промис успешно выполнен
            return payload //в месте запуска store.dispatch с этим thunk можно так же получить результат промиса
        }
        catch (error){
            dispatch(actionRejected(name, error)) //в случае ошибки - сигнализируем redux, что промис несложился
        }
    }
const actionRootCats = () => 
    actionPromise('RootCats', gql(`query cats($q: String){
        CategoryFind(query: $q){
            _id name
        }
    }`, {q: JSON.stringify([{parent:null}])}) );
store.dispatch(actionRootCats());
store.subscribe(() => {
    const {status, payload, error} = store.getState().promise.RootCats;
    if (status === 'FULFILLED' && payload){
        aside.innerHTML = ''
        for (const {_id, name} of payload){
            aside.innerHTML += `<a href="#/cat/${_id}">${name}</a>`
        }
    }
})
const actionCatByID = (_id) => 
    actionPromise('CatById', gql(`query cats($q: String){
        CategoryFindOne(query: $q){
            _id name goods {_id, name, price, images{url}}
            parent{_id name}
            subCategories {_id name}
        }
    }`, {q: JSON.stringify([{_id}])}) );
const drawCat = (state) => {
        const [,route] = location.hash.split('/');
        if (route !== 'cat') return
    
        const {status, payload, error} = store.getState().promise.CatById || {};
        if (status === 'PENDING'){
            main.innerHTML = `<img src='https://cdn.dribbble.com/users/63485/screenshots/1309731/infinite-gif-preloader.gif' />`
        }
        if (status === 'FULFILLED'){
            const {name, goods, parent, subCategories} = payload;
            main.innerHTML = `<h1>${name}</h1>`;
            for (const {_id, name, price, images} of goods){
                const tempA=document.createElement('a');
                tempA.href=`#/good/${_id}`;
                tempA.innerText=`${name}`;
                main.appendChild(tempA);
                const tempName=document.createElement('p');
                //tempName.innerText=`${name}`;
                main.appendChild(tempName);
                const tempImg=document.createElement('img');
                tempImg.src=`http://shop-roles.node.ed.asmer.org.ua/${images[0].url}`;
                tempImg.style=`width: 30%`;
                main.appendChild(tempImg);
                const tempBtn=document.createElement('button');
                tempBtn.innerText='Добавить в корзину';
                main.appendChild(tempBtn);
                const tempBr=document.createElement('br');
                main.append(tempBr);
                tempBtn.addEventListener('click', ()=>{
                    store.dispatch(actionCartAdd({_id, name, price, images}));
                });
            }
        }
    }
store.subscribe(drawCat);

const actionGoodById = (_id) => 
    actionPromise('GoodById', gql(`query cats($q: String){
        GoodFindOne(query:$q){
            _id name price description images{url}
          }
    }`, {q: JSON.stringify([{_id}])}) );
const drawGood = (state) => {
        const [,route] = location.hash.split('/');
        if (route !== 'good') return
    
        const {status, payload, error} = store.getState().promise.GoodById || {}
        if (status === 'PENDING'){
            main.innerHTML = `<img src='https://cdn.dribbble.com/users/63485/screenshots/1309731/infinite-gif-preloader.gif' />`
        }
        if (status === 'FULFILLED'){
            const {_id, name, description, price, images} = payload;
            main.innerHTML ='';
            let str=''; 
            str += '<div id="carouselExampleIndicators" class="carousel slide w-50" data-ride="carousel">';
            //main.innerHTML += `<img src="http://shop-roles.node.ed.asmer.org.ua/${images[0].url}" >`;
            str+=`<h1>${name}</h1>`;
            str +='<div class="carousel-inner">';
            for(key in images){
                if(key==='0'){
                   str +='<div class="carousel-item active">'; 
                }else  str +='<div class="carousel-item">';    
                str += `<img src="http://shop-roles.node.ed.asmer.org.ua/${images[key].url}" class="d-block w-50" alt="...">`;
                str +='</div>';
            }
            str +='</div>';
            str +='<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">';
            str +='<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
            str +='<span class="sr-only">Previous</span>';
            str +='</a>';
            str +='<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">';
            str +='<span class="carousel-control-next-icon" aria-hidden="true"></span>';
            str +='<span class="sr-only">Next</span>';
            str +='</a>';
            str +='</div>';
            main.innerHTML +=str;
            main.innerHTML +=`<p style>Описание: ${description}</p>`;
            main.innerHTML +=`<p>Цена: ${price}</p>`;
            const btnAdd=document.createElement('button');
            btnAdd.innerText='Добавить в корзину';
            main.appendChild(btnAdd);
            btnAdd.addEventListener('click', ()=>{
                store.dispatch(actionCartAdd(payload));
            });
            if(store.getState().cart[_id]){
                const btnSub=document.createElement('button');
                btnSub.innerText='Удалить из корзины';
                main.appendChild(btnSub);
                btnSub.addEventListener('click', ()=>{
                    store.dispatch(actionCartSub(payload));
                    updateCartAmount();
                });
            }
        }
    }
store.subscribe(drawGood);

const actionGetOrders = () =>
    actionPromise('orders', gql(`query orderFind {
        OrderFind(query: "[{}]") {
          _id total orderGoods {
            good {_id  name} total price count
          }
        }
        }`))

const actionSetOrder = (goods) => 
    actionPromise('newOrder', gql(`mutation newOrder($goods: [OrderGoodInput]) {
        OrderUpsert(order: {orderGoods: $goods}) {
          _id
          createdAt
          total
        }
      }
      `, {"goods":goods}));

const drawOrders =()=>{
    const [,route] = location.hash.split('/');
    if (route !== 'orders') return
    const {status, payload, error} = store.getState().promise.orders || {}
    if (status === 'PENDING'){
        main.innerHTML = `<img src='https://cdn.dribbble.com/users/63485/screenshots/1309731/infinite-gif-preloader.gif' />`
    }
    if (status === 'FULFILLED'){
        const {_id, name, description, price, images} = payload;
        main.innerHTML = `<h1>Заказы пользователя</h1>`;
        for(key in payload){
            main.innerHTML+=`<p>Заказ №${Number(key)+1}:</p>`;
            let numberStr=1;
            for(key1 in payload[key].orderGoods){
                main.innerHTML+=`<p style="padding-left: 20px">${numberStr}: ${payload[key].orderGoods[key1].good.name} ${payload[key].orderGoods[key1].count}</p>`;
                numberStr++;
            }
        }
    }    
}
store.subscribe(drawOrders);

const drawCart = () =>{
    const [,route] = location.hash.split('/');
    if (route !== 'cart') return;
    const goodsInCart=store.getState().cart;
    main.innerHTML = `<h1>Корзина</h1>`;
    if(Object.keys(store.getState().cart).length){
        for(key in goodsInCart){
            main.innerHTML+=`<p>${goodsInCart[key].good.name}   ${goodsInCart[key].good.price}  ${goodsInCart[key].count}</p>` ;
        }
        main.innerHTML += `<button id=btnOrder>Заказать</button>`;
        main.innerHTML += `<button id=btnClearCart>Очистить корзину</button>`;
        btnClearCart.addEventListener('click', ()=>{
            store.dispatch(actionCartClear());
        });
        btnOrder.addEventListener('click', ()=>{
            const goodsInCart=store.getState().cart;
            const arrGoods=[];
            for(key in goodsInCart){
                arrGoods.push({good:{'_id':goodsInCart[key].good._id}, 'count':goodsInCart[key].count});
            }
            store.dispatch(actionSetOrder(arrGoods));
        })
    } else main.innerHTML += `<p>Корзина пуста</p>`;
}
store.subscribe(drawCart);

const  updateCartAmount = () => {
    const stateCart=Object.keys(store.getState().cart).length;
    const goodsInCart=document.getElementById('goodsInCart');
    if(stateCart){
        goodsInCart.innerText=stateCart;
    }else goodsInCart.innerText='';
}
store.subscribe(updateCartAmount);

window.onhashchange = () => {
    const [,route, _id] = location.hash.split('/')

    const routes = {
        cat() {
            store.dispatch(actionCatByID(_id))
        },
        good(){
            store.dispatch(actionGoodById(_id))
            // console.log('good', _id)
        },
        login(){
            // console.log('А ТУТ ЩА ДОЛЖНА БЫТЬ ФОРМА ЛОГИНА')
            //нарисовать форму логина, которая по нажатию кнопки Login делает store.dispatch(actionFullLogin(login, password))
            main.innerHTML = `<h1>Авторизация</h1>`;
            const lForm=new LoginFormConstructor(main);
            lForm.clickBtn=(login, password)=>{
                store.dispatch(actionFullLogin(login, password));
            }
        },
        register(){
            ////нарисовать форму регистрации, которая по нажатию кнопки Login делает store.dispatch(actionFullRegister(login, password))
            main.innerHTML = `<h1>Регистрация</h1>`;
            const rForm=new LoginFormConstructor(main);
            rForm.btn.innerText='Reg';
            rForm.clickBtn=(login, password)=>{
                store.dispatch(actionFullRegister(login, password));
            }
        },
        orders(){
            store.dispatch(actionGetOrders());
        },
        cart(){
            drawCart();
        },
    }

    if (route in routes){
        routes[route]()
    }
}
    
store.dispatch(actionAuthLogin(localStorage.authToken));

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
window.onhashchange();