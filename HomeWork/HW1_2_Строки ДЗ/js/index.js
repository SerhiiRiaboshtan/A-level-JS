// Homework 1.2 Строки

// 1 String: greeting
// Спросите у пользователя имя, и поприветствуйте его с помощью alert.
function task1(){
    console.clear();
    console.log("Homework 1.2 task1");
    const str=prompt('Введите ваше имя, пожалуйста');
    alert(`Привет, ${str}!`);
}

// 2 String: gopni4ek
// Попросите пользователя ввести строку через prompt. 
// Используя split и join сделайте что бы после любой запятой следовало слово блин, .
function task2(){
    console.clear();
    console.log("Homework 1.2 task2");
    const str=prompt("Введите строку с кучей слов и запятыми");
    let str1=str.split(',');
    console.log(`Вы ввели: ${str}, а на выходе получили: ${str1.join(', блин')}`);
}

// 3 String: capitalize
// Преобразуйте строку, введенную пользователем, таким образом, 
// что бы первая буква становилась большой, а остальные - маленькими:
// let str = "cANBerRa"
// let result
// ..... ваш код
// console.log(result) //Canberra
function task3(){
    console.clear();
    console.log("Homework 1.2 task3");
    const str = prompt('Введите какую-нибудь строку');
    let result='';
    result=str[0].toUpperCase();
    for(i=1; i<str.length; i++) result+=str[i].toLowerCase();
    console.log(result) //Canberra
}

// 4 String: word count
// Посчитайте количество слов в строке. Используйте разбиение по пробелам. 
// Длина массива называется так же, как и длина строки.
function task4(){
    console.clear();
    console.log("Homework 1.2 task4");
    const str=prompt('Введите строку с одним пробелом между словами, тогда подсчитаем кол-во слов, иначе насчитаем ерунду');
    console.log(`Вы ввели строку ${str}`);
    console.log(`В ней вот столько слов: ${(str.split(' ')).length}`);
}

// 5 String: credentials
// Спросите у пользователя ФИО, используя prompt трижды. Выкиньте лишние пробелы, используя .trim
// Используя String: capitalize сделайте так, что бы каждое слово в ФИО было с большой буквы, а остальные - маленькие
// Объедините эти три строки в одну переменную fullName и выведите куда-то(alert, console.log). 
// Не забудьте пробелы между словами.
function capitalize(str){
    let result='';
    result=str[0].toUpperCase();
    for(i=1; i<str.length; i++) result+=str[i].toLowerCase();
    return result
}
function task5(){
    console.clear();
    console.log("Homework 1.2 task5");
    let name1=prompt('Введите фамилию');
    let name2=prompt('Введите имя');
    let name3=prompt('Введите отчество');
    const fullName=`${capitalize(name1.trim())} ${capitalize(name2.trim())} ${capitalize(name3.trim())}`;
    console.log(fullName);
}

// 6 String: beer
// Не используя .replace замените слово пиво в строке на слово чай
// let str = "Было жарко. Василий пил пиво вприкуску с креветками"
// let result
// ........ //ваша магия
console.log(result) //"Было жарко. Василий пил чай вприкуску с креветками"
function task6(){
    console.clear();
    console.log("Homework 1.2 task6");
    const str = "Было жарко. Василий пил пиво вприкуску с пиво креветками пиво";
    const result=str.split('пиво').join('чай');
    console.log(`Была такая строка: ${str}`)
    console.log('Получилась вот такая: ', result);
}

// 7 String: no tag
// Найдите в строке HTML тэг. Удалите, т. е. вырежьте его - создайте другую строку, в которой будет все символы до тэга 
// и после него Тэг может быть любым. split и join не используйте, вместо этого используйте indexOf и slice. 
// .replace не используйте
// let str = "какой-то текст в котором есть один тэг <br /> и всякое другое"
// let result
// ........ //ваша магия
// console.log(result) //какой-то текст в котором есть один тэг  и всякое другое
function task7(){
    console.clear();
    console.log("Homework 1.2 task7");
    let str = "какой-то текст в котором есть один тэг <br /> и всякое другое";
    const beginTag=str.indexOf('<');
    const endTag=str.indexOf('>');
    const result=str.slice(0, beginTag)+str.slice(endTag+1);
    console.log(result);
}

// 8 String: big tag
// На основе предыдущего задания сделайте тэг большими буквами.
//  replace, split и join не используйте, вместо этого используйте indexOf и slice,
// let str = "какой-то текст в котором есть один тэг <br /> и всякое другое"
// let result
// ........ //ваша магия
// console.log(result) //какой-то текст в котором есть один тэг <BR /> и всякое другое
function task8(){
    console.clear();
    console.log("Homework 1.2 task8");
    let str = "какой-то текст в котором есть один тэг <br /> и всякое другое";
    const beginTag=str.indexOf('<');
    const endTag=str.indexOf('/', beginTag);
    let result=str.slice(0, beginTag+1);
    for(i=beginTag+1; i<endTag; i++) result+=str[i].toUpperCase(); 
    result+=str.slice(endTag);
    console.log(result);
}

// 9 String: new line
// Попросите пользователя ввести строку через prompt. prompt не позволяет вводить многострочные строки. 
// Дадим пользователю такую возможность - Пользователь может вводить \n в качестве маркера новой строки.
// Используя split и join сделайте эту строку воистину многострочной и выведите в консоль или через alert.
function task9(){
    console.clear();
    console.log("Homework 1.2 task9");
    //const str=prompt('Введите длинный многострочный текст. В качестве разделителя строк используйте \n');
    const str='dfgfdfdfdgg \n sfgsfgsdgsg \n dffsgsfdgsfgsg \n drgrghdfgdffd';
    let newStr=str.split('\n');
    console.log(`${newStr.join('\n')}`);
}

// 10 String: youtube
// Пусть пользователь введет любой текст с ссылкой на youtube.
//  Используя регулярное выражение извлеките из ссылки идентификатор видоса и создайте строку с встраиваемым блоком HTML. 
//  Добавьте блок на страницу.
// объявите константу с регулярным выражением
// используйте метод match, который вернет вам массив
// извлеките из массива элемент с идентификатором видео
// изучите HTML код встраивания видео в страницу на youtube.
// используя интерполяцию строк вклейте идентификатор видео в HTML код встраивания видео
// используя document.write отправьте полученную строку на страницу.
function task10(){
    console.clear();
    console.log("Homework 1.2 task10");
    const str='Lorem ipsum dolor sit amet, consectetur  https://www.youtube.com/watch?v=-452p_9ESbM adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    const arr=str.match(/(www\.youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)/);
    console.log(`Идентификатор видео с YourTube "${arr[2]}"`);
    document.open();
    document.write(`<iframe width="560" height="315" src=https://www.youtube.com/embed/${arr[2]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
    document.close();
}