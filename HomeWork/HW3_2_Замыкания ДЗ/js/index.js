// Homework 3.2 Замыкания
// 1 makeProfileTimer
// Напишите функцию makeProfileTimer, которая служит для замера времени выполнения другого кода и работает следующим образом:
// let timer = makeProfileTimer()
// alert('Замеряем время работы этого alert');  //некий код, время выполнения которого мы хотим измерить с высокой точностью
// alert(timer()); //alert должен вывести время в микросекундах от выполнения makeProfileTimer до момента вызова timer(), 
//                 // т. е. измерить время выполнения alert
// Используйте performance.now()
function task1(){
    console.clear();
    console.log("Homework 3.2 task1");
    let makeProfileTimer=()=>{
        const start=performance.now();
        return ()=>performance.now()-start;
    }
    let timer = makeProfileTimer();
    alert('Замеряем время работы этого alert');
    alert(timer());
}

// 2 makeSaver
// Напишите функцию makeSaver, которая:
    // let saver = makeSaver(Math.random) //создает функцию-хранилище результата переданной в качестве параметра функции (Math.random 
    //                                   // в примере). На этом этапе Math.random НЕ вызывается
    // let value1 = saver()              //saver вызывает переданную в makeSaver функцию, запоминает результат и возвращает его
    // let value2 = saver()              //saver в дальнейшем просто хранит результат функции, и более НЕ вызывает переданную 
    //                                   //в makeSaver функцию;
    // value1 === value2                 // всегда true
    // let saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random()*6)])
    // let value3 = saver2()
    // let value4 = saver2()
    // value3 === value4 // тоже должно быть true
     // let namePrompt = prompt.bind(window, 'Как тебя зовут?')
    // let nameSaver = makeSaver(namePrompt)
    // alert(`Привет! Prompt еще не было!`)
    // alert(`Привет ${nameSaver()}. Только что запустился prompt, первый и последний раз`)
    // alert(`Слушай, ${nameSaver()}, го пить пиво. Ведь prompt был только один раз`)
// Таким образом makeSaver решает две задачи:
    // Навсегда сохраняет результат функции. Это актуально, например, для Math.random.
    // Действует лениво, то есть вызывает Math.random только тогда, когда результат действительно нужен.
    //  Если же по каким-то причинам значение не понадобится, то Math.random даже не будет вызван
function task2(){
    console.clear();
    console.log("Homework 3.2 task2");
    function makeSaver(func){
        const result=func();
        return ()=>result;
    }
    let saver = makeSaver(Math.random);
    let value1 = saver();
    let value2 = saver();
    console.log(`value1=${value1}, value2=${value2}, value1===value2:${value1===value2}`);
    let saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random()*6)])
    let value3 = saver2()
    let value4 = saver2()
    console.log(`value3=${value3}, value4=${value4}, value3===value4:${value3===value4}`);
    let namePrompt = prompt.bind(window, 'Как тебя зовут?')
    let nameSaver = makeSaver(namePrompt);
    alert(`Привет! Prompt еще не было!`);
    alert(`Привет ${nameSaver()}. Только что запустился prompt, первый и последний раз`);
    alert(`Слушай, ${nameSaver()}, го пить пиво. Ведь prompt был только один раз`);
}

// 3 myBind
// Изучите встроенную функцию bind, и сделайте свою версию, которая позволит определить "значение по умолчанию" не только для первых параметров,
//  но для любых других, например для степени в Math.pow:
// let pow5 = myBind(Math.pow, Math, [, 5]) // первый параметр - функция для биндинга значений по умолчанию, 
//                                                   // второй - this для этой функции, третий - массив, в котором undefined означает
//                                                   // параметры, которые должны передаваться при вызове,
//                                                   // а другие значения являются значениями по умолчанию:
// let cube = myBind(Math.pow, Math, [, 3]) // cube возводит число в куб
// pow5(2) // => 32, вызывает Math.pow(2,5), соотнесите с [undefined, 5]
// cube(3) // => 27
// let chessMin = myBind(Math.min, Math, [, 4, , 5,, 8,, 9])
// chessMin(-1,-5,3,15) // вызывает Math.min(-1, 4, -5, 5, 3, 8, 15, 9), результат -5
// let zeroPrompt = myBind(prompt, window, [undefined, "0"]) // аналогично, только теперь задается "0" как текст по умолчанию в prompt, 
//                                                           // а текст приглашения пользователя задается при вызове zeroPrompt
// let someNumber = zeroPrompt("Введите число")              // вызывает prompt("Введите число","0")
// const bindedJoiner = myBind((...params) => params.join(''), null, [, 'b', , , 'e', 'f'])//('a','c','d') === 'abcdef'
// bindedJoiner('a','c','d') === 'abcdef'
// bindedJoiner('1','2','3') === '1b23ef'
// Массив, который идет третьим параметром определяет, какие поля должны подменяться значением по умолчанию, а какие - задаваться в последствии (undefined).
function myBind(func, thisThis, params){
    return (...paramsRest)=>{
        const defaultParams=params.slice();
        const arrParamsRest=[...paramsRest];
        let counterParamsRest=0;
        let counterDefaultParams=0;
        for(key of defaultParams){
           if(key===undefined){
                defaultParams[counterDefaultParams]=arrParamsRest[counterParamsRest];
                if(counterParamsRest+1<arrParamsRest.length){
                    counterParamsRest++;  
                } else break;
           } 
           counterDefaultParams++;
        }
        for(i=counterParamsRest; i<arrParamsRest.length; i++){// Вдруг ввели дополнительно параметров больше, чем пропусков в массиве по умолчанию...
            defaultParams.push(arrParamsRest[i]); // Так не потеряем их...   
        } 
        return func(...defaultParams);
    }
}
function task3(){
    console.clear();
    console.log("Homework 3.2 task3");
    let pow5 = myBind(Math.pow, Math, [, 5]); //pow5 возводит число в пятую степень
    console.log(pow5(2)); //2^^5=32
    let cube = myBind(Math.pow, Math, [, 3]); // cube возводит число в куб 
    console.log(cube(3)); //3^^3=27 
    let chessMin = myBind(Math.min, Math, [, 4, , 5,, 8,, 9]);
    console.log(chessMin(-1,-5,3,15)); // вызывает Math.min(-1, 4, -5, 5, 3, 8, 15, 9), результат -5
    let zeroPrompt = myBind(prompt, window, [undefined, "0"]);
    let someNumber = zeroPrompt("Введите число");              // вызывает prompt("Введите число","0")
    const bindedJoiner = myBind((...params) => params.join(''), null, [, 'b', , , 'e', 'f']);
    console.log(bindedJoiner('a','c','d'));  //=== 'abcdef'
    console.log(bindedJoiner('1','2','3'));  //=== '1b23ef'
}

// 4 checkResult
// Напишите декоратор checkResult, который:
// принимает функцию для запуска и проверки результата (оригинал)
// принимает функцию для проверки результата (валидатор)
// возвращает обертку, которая запускает оригинал до тех пор, пока оригинал не вернет значение, удовлетворяющее функции-валидатору.
//  В валидатор передается результат оригинальной функции. Если валидатор возвращает true, то обертка возвращает результат оригинальной функции. 
//  Если валидатор возвращает что-то другое, то оригинал запускается еще, пока валидатор не вернет true.
// function checkResult(original, validator){
//     function wrapper(...params){
        
//     }
    
//     return wrapper
// }


// //numberPrompt - это функция, которая будет запускать prompt до тех пор, пока пользователь не введет число
// const numberPrompt = checkResult(prompt, x => !isNaN(+x)) 
// let   number       = +numberPrompt("Введите число", "0")  //параметры передаются насквозь в оригинал. Не забудьте передать this, используя call или apply

// //gamePrompt - это функция, которая будет запускать prompt до тех пор, пока пользователь не введет одно из слов 'камень', 'ножницы', 'бумага'
// const gamePrompt   = checkResult(prompt, x => ['камень', 'ножницы', 'бумага'].includes(x.toLowerCase())) 
// const turn         = gamePrompt("Введите что то из списка: 'камень', 'ножницы', 'бумага'")
// Используя checkResult сделайте функции, которые:
// randomHigh. Возвращает случайное число в диапазоне от 0.5 до 1
// alwaysSayYes. Достает пользователя окном confirm пока он не согласится (не нажмет OK)
// respectMe. Достает пользователя запуском этой фунцкии, пока какое-то из полей не введено
function checkResult(original, validator){
    this.originalFunc=original;
    this.validatorFunc=validator;
    function wrapper(...params){
        let resultOriginal;
        do{
            resultOriginal=originalFunc(...arguments);
            resultValidator=validatorFunc(resultOriginal);
        }while(!resultValidator);
         return resultOriginal;
    }
    return wrapper;
}
function task4(){
    console.clear();
    console.log("Homework 3.2 task4");
    //numberPrompt - это функция, которая будет запускать prompt до тех пор, пока пользователь не введет число
    const numberPrompt = checkResult(prompt, x => !isNaN(+x)); 
    let number= +numberPrompt("Введите число", "0"); 
    console.log(number);

    //gamePrompt - это функция, которая будет запускать prompt до тех пор, пока пользователь не введет одно из слов 'камень', 'ножницы', 'бумага'
    const gamePrompt   = checkResult(prompt, x => ['камень', 'ножницы', 'бумага'].includes(x.toLowerCase())); 
    const turn         = gamePrompt("Введите что то из списка: 'камень', 'ножницы', 'бумага'");
    console.log(turn);

    // randomHigh. Возвращает случайное число в диапазоне от 0.5 до 1
    const randomHigh=checkResult(Math.random, x=>x>=0.5);
    const resultRandomHigh=randomHigh();
    console.log(resultRandomHigh);

    // alwaysSayYes. Достает пользователя окном confirm пока он не согласится (не нажмет OK)
    const alwaysSayYes=checkResult(()=>confirm(), x=>x===true);
    const resultAlwaysSayYes=alwaysSayYes();
    console.log('Таки нажали ОК!');

    function capitalize(str){
        let result='';
        result=str[0].toUpperCase();
        for(i=1; i<str.length; i++) result+=str[i].toLowerCase();
        return result;
    }
    function Credentials(){
        let name1=prompt('Введите фамилию');
        let name2=prompt('Введите имя');
        let name3=prompt('Введите отчество');
        if(name1!==null && name1!=='') {name1=name1.trim(); name1=capitalize(name1)};
        if(name2!==null && name2!=='') {name2=name2.trim(); name2=capitalize(name2)};
        if(name3!==null && name3!=='') {name3=name3.trim(); name3=capitalize(name3)};
        const name4= `${name1} ${name2} ${name3}`;
        return {'Фамилия': name1, 'Имя':name2, 'Отчество':name3, 'ФИО':name4};
    }

    // respectMe. Достает пользователя запуском этой фунцкии, пока какое-то из полей не введено
    const respectMe=checkResult(Credentials, (arg)=>{
        for(key in arg){
            if(arg[key]===null){
                return false;
            }
        }
        return true;})
    const resultRespectMe=respectMe();
    console.log(resultRespectMe);
}