// ДЗ: Boolean

// 1 Number: odd
// С помощью prompt узнайте число, введенное пользователем. 
// С помощью if проверьте что число корректно преобразовано из строки. 
// В случае ошибки выведите сообщение Выведите четное число или нет, используя if.
function task1(){
    console.clear();
    console.log("Homework 1.3 task1");
    const inputNumber=Number(prompt('Введите целое число'));
    if(isNaN(inputNumber)){
        console.log('Вы ввели не число! Попробуйте ещё раз');
    }else if(Math.ceil(inputNumber)!==inputNumber){
        console.log(`Вы ввели ${inputNumber}, это число не целое. Попробуйте ещё раз`);
    }else{
        console.log(`Вы ввели ${inputNumber}, это число ${inputNumber%2===0?'четное':'нечетное'}`);
    }
}

// 2 String: lexics
// Спросите у пользователя текст, и проверьте его на наличие некорректного слова или нескольких некорректных слов.
//  Используйте метод indexOf (или includes) строки:
// "123".indexOf("23") //возвращает 1 - позицию подстроки "23" в "123"
// "abcdef".indexOf("ef") // 4
// "12345".indexOf("some bad word") // -1 - не найдено
function task2(){
    console.clear();
    console.log("Homework 1.3 task2");
    const str=prompt('Введите строку');
    const subStr=prompt('Введите подстроку для поиска в строке');
    const index=str.indexOf(subStr);
    if(index===-1){
        console.log(`В строке "${str}" не найдена подстрока ${subStr}`);
    }else{
        console.log(`В строке "${str}" найдена подстрока ${subStr} в позиции ${index}`);
    }
}

// 3 Boolean
// Напишите код, который спрашивает те или иные вопросы с ответом "да"/"нет" с помощью confirm,
//  и сохраняет ответы в переменных.
function task3(){
    console.clear();
    console.log("Homework 1.3 task3");
    const question1='Вы сегодня вовремя завтракали?';
    const question2='Вы сегодня вовремя обедали?';
    const question3='Вы сегодня вовремя ужинали?';
    const answear1=confirm(`${question1} (Ок - Да, Отмена - Нет)`)?'Да':'Нет';
    const answear2=confirm(`${question2} (Ок - Да, Отмена - Нет)`)?'Да':'Нет';
    const answear3=confirm(`${question3} (Ок - Да, Отмена - Нет)`)?'Да':'Нет';
    console.log(`На вопрос "${question1}" вы ответили "${answear1}"`);
    console.log(`На вопрос "${question2}" вы ответили "${answear2}"`);
    console.log(`На вопрос "${question3}" вы ответили "${answear3}"`);
}

// 4 Boolean: if
// Расширьте предыдущее задание условиями по полученным переменным условиями (if else). 
// Например, если вы спрашиваете пол пользователя с помощью confirm, то по условию сделайте 
// alert("Вы женщина") и alert("Вы мужчина")
function task4(){
    console.clear();
    console.log("Homework 1.3 task4");
    const question1='Вы сегодня вовремя завтракали?';
    const question2='Вы сегодня вовремя обедали?';
    const question3='Вы сегодня вовремя ужинали?';
    const answear1=confirm(`${question1} (Ок - Да, Отмена - Нет)`)?'Да':'Нет';
    const answear2=confirm(`${question2} (Ок - Да, Отмена - Нет)`)?'Да':'Нет';
    const answear3=confirm(`${question3} (Ок - Да, Отмена - Нет)`)?'Да':'Нет';
    console.log(`На вопрос "${question1}" вы ответили "${answear1}"`);
    console.log(`На вопрос "${question2}" вы ответили "${answear2}"`);
    console.log(`На вопрос "${question3}" вы ответили "${answear3}"`);
    if(answear1==='Да' && answear2==='Да' && answear3==='Да'){
        console.log('Принимаете пищу вовремя - МОЛОДЕЦ!');
    }else{
        console.log('Постараетесь не забывать есть вовремя!');
    }
}

// 5 Comparison: sizes
// Сделайте перевод перевод из нашей системы размеров в американскую или любую на выбор. 
// Используйте prompt, условия сравнения и alert.
function task5(){
    console.clear();
    console.log("Homework 1.3 task5");
    const testArr=[40, 42, 44, 46, 48, 50, 52, 54]; //массив с допустимыми размерами (чтобы проще проверить, что введен размер из списка);
    const inputSize=parseInt(prompt("Введите один из местных размеров одежды (возможные размеры 40, 42, 44, 46, 48, 50, 52, 54)"));
    if((!isNaN(inputSize) && testArr.includes(inputSize))===false){
        alert("Вы ввели недопустимый размер");
    }
    else if(inputSize===40) alert(`Вы ввели ${inputSize} размер в нашей системе, что соответствует размеру 6 (или S) в США`);
    else if(inputSize===42) alert(`Вы ввели ${inputSize} размер в нашей системе, что соответствует размеру 8 (или M) в США`);
    else if(inputSize===44) alert(`Вы ввели ${inputSize} размер в нашей системе, что соответствует размеру 10 в США`);
    else if(inputSize===46) alert(`Вы ввели ${inputSize} размер в нашей системе, что соответствует размеру 12 (или L) в США`);
    else if(inputSize===48) alert(`Вы ввели ${inputSize} размер в нашей системе, что соответствует размеру 14 в США`);
    else if(inputSize===50) alert(`Вы ввели ${inputSize} размер в нашей системе, что соответствует размеру 16 (или XL) в США`);
    else if(inputSize===52) alert(`Вы ввели ${inputSize} размер в нашей системе, что соответствует размеру 18 в США`);
    else                    alert(`Вы ввели ${inputSize} размер в нашей системе, что соответствует размеру 20 (или XXL) в США`);
}

// 6 Ternary
// Спросите у пользователя пол (confirm). 
// Выведите с помощью alert "Вы мужчина" или "Вы женщина". Используйте тернарный оператор.
function task6(){
    console.clear();
    console.log("Homework 1.3 task6");
    alert(confirm('Вы мужчина? (Если Ок, то вы мужчина, если Отмена, то вы женщина)')?'Вы мужчина':'Вы женщина');
}

// 7 Training
// bool type cast
// !!2 true
// !!0 false
// !!1 true
// // or
// 2 || 1 2
// 2 || 0 2
// //and
// 2 && 1 1
// 1 && 2 2
// 0 && 2 0
// // or and and difference
// 0 || 1 || 2 1
// 0 && 1 && 2 0
// 2 || 1 || 0
// 2 && 1 && 0 0
// confirm('left') || confirm('right') true - если первый или второй или оба Ок. Иначе false 
// confirm('left') && confirm('right') true, если оба confirm Ok. Иначе - false
// //null, undefined, so on
// null || 2 2
// undefined && 1 undefined
// alert("Hello") && confirm('Are you sexy?'); undefined
// alert("Hello") || confirm('Are you drunk?'); true, если confirm Ok
// //brackets and complex expressions
// (undefined || 2) && (3 || 0) 3
// (2 && 1) || (null && 0) 1
// (2 > 1) && "greater" "greater"
// (2 < 1) && null false
// null && (2 < 1) null
// // ternary operator
// 1 ? "one" : "not one"  "one"
// 0 ? "zero" : "not zero" "not zero"
// "0" ? "\"zero\"" : "not `zero`" ""zero""
// parseInt("0") ? 'true' : 'false' false
// ("" || 2) && (3 || "3.5") || (4 && 5) 3
// (-1 + 1) && "zero" 0
// "-1" + 1 && "oups" "oups"
// (typeof null === 'object') ? "null is object" : "null is null" "null is object"
// // ternary && ||
// Math.random() < 0.5 && 'less' || 'more' если рандом <0.5, тогда 'less', иначе 'more'
// (a = Math.random()) < 0.5 && 'less: '+a || 'more: '+a
// //in for array
// [2,3,5,7,11].indexOf(7) > -1 ? 'prime' : 'not found' 'prime'
function task7(){
    console.clear();
    console.log("Homework 1.3 task7");
    
}

// 8 Prompt: or
// Для задания Number: age используя ИЛИ || вывести сообщение об ошибке (alert) если пользователь не введет возраст 
// или нажмет отмену (т. е. prompt выдаст пустую строку или null, интерпретируемую как false).
function task8(){
    console.clear();
    console.log("Homework 1.3 task8");
    const age=(prompt("Введите, пожалуйста, возраст (положительное число от 0 до 200)"));
    if(age===null || age===''){
        console.log('Передумали вводить...');
    }else{
        if(isNaN(age) || age<0 || age>200){
            alert("Введено недопустимое значение! Пробуйте ещё.");
        }else{
            const currentYear=(new Date()).getFullYear();
            console.log(`Ваш возраст ${age}. Предполагаю, что ваш год рождения ${currentYear-1-Math.floor(age)}`);
        }
    }        
}

// 9 Confirm: or this days
// C помощью этого же трюка (использование ИЛИ для запуска альтернативы) сделайте капризного робота, который 
// в confirm спрашивает "шопинг?", а в случае отказа - выводить alert "ты - бяка".
function task9(){
    console.clear();
    console.log("Homework 1.3 task9");
    alert(confirm("шопинг?")||"ты - бяка");
}

// 10 Default: if
// Сделайте тоже самое с помощью if и else
function task10(){
    console.clear();
    console.log("Homework 1.3 task10");
    if(!confirm("шопинг?")) alert("ты - бяка");
}

// 11 Default: or
// Попросите пользователя ввести ФИО в три разныe переменныe. Используя ИЛИ || добавьте строки по умолчанию, 
// которые будут сохраняться во внутренних переменных если пользователь ввел пустую строку или нажал "Отмена".
//  Например, если вы на шаге ввода Фамилии нажмете Escape, фамилия будет "Иванов"
function task11(){
    console.clear();
    console.log("Homework 1.3 task11");
    const lastName=prompt('Введите фамилию') || 'Иванов';
    const firstName=prompt('Введите имя') || 'Иван';
    const secondName=prompt('Введите отчество') || 'Иванович';
    console.log(lastName, firstName, secondName);
}

// 12 Default: if
// Сделайте тоже самое с помощью if и else
function task12(){
    console.clear();
    console.log("Homework 1.3 task12");
    let lastName=prompt('Введите фамилию');
    let firstName=prompt('Введите имя');
    let secondName=prompt('Введите отчество');
    if(!lastName) lastName='Иванов';
    if(!firstName) firstName='Иван';
    if(!secondName) secondName='Иванович';
    console.log(lastName, firstName, secondName);
}

// 13 Login and password
// Напишите код, который спрашивает логин, проверяет его на верность, в случае если логин верен, 
// просит ввести пароль и проверяет его. В случае несовпадения логина или пароля выводить alert с текстом ошибки. 
// В случае успешного логина - alert с поздравлением. Правильные логин: admin и пароль: qwerty. Используйте вложенные if и else.
function task13(){
    console.clear();
    console.log("Homework 1.3 task13");
    const login='admin';
    const password='qwerty';
    if(prompt('Введите логин')!==login){
        alert(`Нет такого пользователя!`);
    }else{
        if(prompt('Пользователь существует. Введите пароль')!==password){
            alert(`Неверный пароль!`);
        }else{
            alert('Поздравляю. Вы авторизованы!');
        }
    }
}

// 14 Currency exchange
// Попросите пользователя ввести валюту (например, usd, eur, другие валюты добавить по вкусу) с помощью prompt.
// Также поинтересуйтесь купить или продать он желает (используйте confirm).
// С помощью нескольких if и тернарного оператора внутри каждого из if задайте переменную rate, определяющую курс 
// конкретной валюты на покупку или продажу. Обратите внимание на место объявления переменной rate - она должна быть 
// доступна в коде после всех этих if.
// Попросите пользователя ввести сумму на обмен
// Посчитайте и выведите результат путем умножения или деления на rate
// Дайте возможность пользователю вводить названия валют в любом регистре (UsD, eUR). 
// Для этого в if используйте toUpperCase (или toLowerCase)
function task14(){
    console.clear();
    console.log("Homework 1.3 task14");
    let rate, sum;
    const typeOfCurrency=prompt("Работа с какой валютой интересует?(USD или EUR").toUpperCase();
    if(typeOfCurrency!=='USD' && typeOfCurrency!=='EUR'){
        alert(`Мы не работаем с валютой "${typeOfCurrency}"`);
    }else{
        if(typeOfCurrency==='USD'){
            rate=36;
        }else rate=39;
        sum=parseFloat(prompt('Введите сумму на обмен (больше 0)'));
        if(isNaN(sum) || sum<0){
            alert('Неверная сумма, приходите в следующий раз');
        }else{
            if(confirm('Хотите продать или купить?(Ок - продать, Отмена - купить)')){
                alert(`За ваши ${sum}${typeOfCurrency} вы получите ${rate*sum} другой валюты по курсу ${rate}`);
            }else{
                alert(`На ваши ${sum} другой валюты по курсу ${rate} вы купите ${(sum/rate).toFixed(2)} ${typeOfCurrency}`);
            }
        }
    }
}

// 15 Scissors
// Сделайте игру "камень-ножницы-бумага". Пользователь вводит свой вариант через prompt,
//  программа генерирует свой вариант через Math.random() и выводит через alert. 
//  Следующий alert выводит имя победителя или "ничья"
function task15(){
    console.clear();
    console.log("Homework 1.3 task15");
    const userChoice=prompt('Введите камень(к), ножницы(н), бумега(б)');
    let computerChoice;
    if(userChoice==='к' || userChoice==='н' || userChoice==='б'){
        computerChoice=Math.random();
        if(computerChoice<0.33){
            computerChoice='к';
        }else{
            if(computerChoice>0.66){
                computerChoice='б';
            }else computerChoice='н';
        }
    }else{
        alert('Неправильный ввод!');
    }
    alert(`Компьютер выбрал ${computerChoice}`);
    if(userChoice===computerChoice){
        alert('Ничья!');
    }else{
        if( (userChoice==='к' && computerChoice==='н') || (userChoice==='н' && computerChoice==='б') || (userChoice==='б' && computerChoice==='к')){
            alert('Пользователь победил!');
        }else alert('Компьютер победил!');
    }
}

// 16 Дополнительное задание
// Слепить все задания в один текст, таким образом что бы вначале происходил ввод названия задания, 
// а потом с помощью if запускался код конкретного задания
function task16(){
    console.clear();
    console.log("Homework 1.3 task16");
    const taskNumber=parseInt(prompt('Введите номер задания от 1 до 17')) 
    if(taskNumber>=1 && taskNumber<=17){
        if(taskNumber===1){
            task1();
        }else{
            if(taskNumber===2){
                task2();
            }else{
                if(taskNumber===3){
                    task3();
                }else{
                    if(taskNumber===4){
                        task4();
                    }else{
                        if(taskNumber===5){
                            task5();
                        }else{
                            if(taskNumber===1){
                                task1();
                            }else{
                                if(taskNumber===6){
                                    task6();
                                }else{
                                    if(taskNumber===7){
                                        task7();
                                    }else{
                                        if(taskNumber===8){
                                            task8();
                                        }else{
                                            if(taskNumber===9){
                                                task9();
                                            }else{
                                                if(taskNumber===10){
                                                    task10();
                                                }else{
                                                    if(taskNumber===11){
                                                        task11();
                                                    }else{
                                                        if(taskNumber===12){
                                                            task12();
                                                        }else{
                                                            if(taskNumber===13){
                                                                task13();
                                                            }else{
                                                                if(taskNumber===14){
                                                                    task14();
                                                                }else{
                                                                    if(taskNumber===15){
                                                                        task15();
                                                                    }else{
                                                                        task17();
                                                                        }}}}}}}}}}}}}}}}
        
    }else alert('Нет такого задания');
}

// 17 Задание на черный пояс
// Сделайте игру "камень-ножницы-бумага", как описано выше, пользуясь логическими операциями (&&, ||, !), 
// не используя if. Задание должно быть решено одним выражением
function task17(){
    console.clear();
    console.log("Homework 1.3 task17");
    const userChoice=prompt('Введите камень(к), ножницы(н), бумега(б)');
    let computerChoice;
    if(userChoice==='к' || userChoice==='н' || userChoice==='б'){
        computerChoice=Math.random();
        if(computerChoice<0.33){
            computerChoice='к';
        }else{
            if(computerChoice>0.66){
                computerChoice='б';
            }else computerChoice='н';
        }
    }else{
        alert('Неправильный ввод!');
    }
    alert(`Компьютер выбрал ${computerChoice}`);
    const u=userChoice, c=computerChoice;
    const uWin=((u==='к' && c==='н') || (u==='н' && c==='б') || (u==='б' && c==='к'));
    const cWin=((c==='к' && u==='н') || (c==='н' && u==='б') || (c==='б' && u==='к'));
    console.log( (!uWin && !cWin && 'Ничья!') || (!uWin && cWin && 'Компьютер победил!') || 'Пользователь победил!');
    // console.log( (!((u==='к' && c==='н') || (u==='н' && c==='б') || (u==='б' && c==='к')) && !((c==='к' && u==='н') || (c==='н' && u==='б') || (c==='б' && u==='к')) && 'Ничья!') || (!((u==='к' && c==='н') || (u==='н' && c==='б') || (u==='б' && c==='к')) && ((c==='к' && u==='н') || (c==='н' && u==='б') || (c==='б' && u==='к')) && 'Компьютер победил!') || 'Пользователь победил!');
}