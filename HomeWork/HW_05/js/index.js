// 1. Напишіть функцію avg, яка повертає середнє значення переданого масиву (якщо довжина масиву дорівнює нулю, то має повернутися 0).
function avg(arr){
    if(arr.length===0) return (`Ничего не ввели, ответ 0`);
    else{
        let sum=0;
        for(let i=0; i<arr.length; i++){
            sum+=arr[i];
        }
        return `Ввели ${arr}, среднее значение ${sum/arr.length}`;
    }
}
function task1(){
    console.clear();
    console.log("HW05 task1");
    console.log(avg([0, 1, 2, 3, 4, 5])); // 2.5
    console.log(avg([22, 34, 62, 99])); // 54.25
    console.log(avg([])); // 0
    console.log(avg([1000, 2056, 3444, 1237])); // 1934.25
}  

// 2. Напишіть функцію power для обчислення степені числа
function power (a, b){
    let degree = a;
    for (let i = 1; i < b; i += 1) {
         degree *= a;
    }
    return degree;
}
function task2(){
    console.clear();
    console.log("HW05 task2");
    console.log(power(2, 3)); // 8
    console.log(power(4, 2)); // 16
    console.log(power(3, 4)); // 81
    console.log(power(10, 3)); // 1000
}

// 3. Напишіть функцію squareDigits, яка приймає число та зводить у квадрат кожен символ.
function squareDigits(inputData){
    let temp=inputData;
    let result='';
    while(temp>10){
        result=String((temp%10)**2)+result;
        temp=Math.floor(temp/10);
    }
    result=String(temp**2)+ result;
    return result;
}
function task3(){
    console.clear();
    console.log("HW05 task3");
    console.log(squareDigits(91)); // 811
    console.log(squareDigits(0)); // 0
    console.log(squareDigits(867)); // 643649
}

// 4. Напишіть функцію isPalindrome, яка перевіряє, чи переданий рядок є паліндромом.
// Паліндром - це слово, фраза чи послідовність, які читаються так само як уперед, назад, наприклад, level.
function isPalindrome(inputString){
    for(let i=0; i<inputString.length/2; i++){
        //console.log(inputString[i]+'  '+inputString[inputString.length-i-1]);
        if(inputString[i]!==inputString[inputString.length-i-1]){
            return false;
        }  
    }
    return true;
}
function task4(){
    console.clear();
    console.log("HW05 task4");
    console.log(isPalindrome('level')); // true
    console.log(isPalindrome('topot')); // true
    console.log(isPalindrome('вимив')); // true
    console.log(isPalindrome('енот'));
    console.log(isPalindrome('тот'));
    console.log(isPalindrome('крок'));
    console.log(isPalindrome('анна')); // true
    console.log(isPalindrome('алла')); // true
    console.log(isPalindrome('дід')); // true
    console.log(isPalindrome('ротатор')); // true
    console.log(isPalindrome('радар')); // true
    console.log(isPalindrome('привіт')); // false
    console.log(isPalindrome('що')); // false
    console.log(isPalindrome('that'));  // false
}

// 5. Написати функцію stringTransformer, яка буде трансформувати рядок за такими правилами:
// 5.1) Змінити регістр кожного знака, тобто. нижній регістр у верхній регістр, верхній регістр у нижній регістр. (наприклад 'FizzBuzz'-> 'fIZZbUZZ');
// 5.2) Змінити порядок слів на зворотний (наприклад, 'pen pineapple apple PEN' --> 'pen APPLE PINEAPPLE PEN'). // Done
function stringTransformer(str){
    //debugger;
    let strNew='';
    let strTemp='';
    for(i=str.length-1; i>=0; i--){
        if(str[i]!==' '){
            if(str[i]===str[i].toLowerCase()){
                strTemp=str[i].toUpperCase()+strTemp;
            }
            else strTemp=str[i].toLowerCase()+strTemp;
        }
        else{
            strNew=strNew+strTemp+' ';
            strTemp='';
        }
    }
    strNew=strNew+strTemp;
    return strNew;
}
function task5(){
    console.clear();
    console.log('HW05 task5');
    console.log('torininGEN THE bEst=>' + stringTransformer('torininGEN THE bEst'));// BeST the TORININgen
    console.log('JavaScript IS cool LANGUAGE=>'+ stringTransformer('JavaScript IS cool LANGUAGE'));// language COOL is jAVAsCRIPT
}

// 6. Реалізувати функцію, яка виконуватиме математичні операції з введеними користувачем числами
// Технічні вимоги:
// Взяти за допомогою модального вікна браузера два числа. ( функцією )
// Взяти за допомогою модального вікна браузера математичну операцію, яку потрібно здійснити.
// Сюди можна ввести +, -, *, /. ( функцією )
// Створити функцію, в якій провести запит чисел, мат. операції та виконати обчислення )
// Вивести у консоль результат виконання функції.
//
// Необов'язкове завдання додаткової складності:
// Після введення даних додати перевірку їхньої коректності.
// Якщо користувач не ввів числа, або при введенні вказав не числа - запитати обидва числа заново
// Якщо користувач вві неправильний символ - запитати ще раз
function task6(){
    console.clear();
    console.log("HW05 task6");
    let aStr;
    let bStr;
    let oper;
    let flag=true;
    while(flag){
        aStr=prompt(`Input the number A`);
        if (!Number.isNaN(Number(aStr)) && aStr!=='' && aStr!==null) flag=false;
            else alert('Incorrect input A!!!');
    }
    flag=true;
    while(flag){
        bStr=prompt(`Input the number B`);
        if (!Number.isNaN(Number(bStr)) && bStr!=='' && bStr!==null) flag=false;
            else alert('Incorrect input B!!!');
    }
    flag=true;
    while(flag){
        oper=prompt('Input operation + - * /');
        if(oper==='+' || oper==='-' || oper==='*' || oper==='/') flag=false;
            else alert('Incorrect input Oper!!!');
    }
    console.log(`Input A=${aStr} B=${bStr} Operation ${oper}`);
    console.log('A'+oper+'B='+eval(aStr+oper+bStr));
}