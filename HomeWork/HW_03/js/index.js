// 1) Створити цикл на 10 ітерацій. На кожній ітерації якщо i парне, 
// то вивести в консоль слово Fiz, якщо i не парне, то вивести в консоль слово Buz,
//  якщо i кротну цифру 3, то вивести FizBuz.
function task1(){
    console.clear();
    console.log("HW03 task1");
    console.log('Version 1'); 
    // Считаем что число может принадлежать только к одной группе
    for(i=1; i<=10; i++){
        if(i%2===0 && i%3!==0){
            console.log(`${i}  Fiz`);
            continue;
        }
        else if(i%2!==0 && i%3!==0){
            console.log(`${i}  Buz`);
            continue;
        }
        console.log(`${i}  FizBuz`);
    }
    console.log('Version 2'); 
    /* Считаем что число может принадлежать к двум группам 
    (6 и четное и делится на 3, 3 и 9 нечетные и делятся на 3)*/
    for(i=1; i<=10; i++){
        let temp='';
        if(i%2===0){
            temp+='Fiz';
            if(i%3===0){
                temp+=' FizBuz';
            }
        }
        else if(i%2!==0){
            temp+='Buz';
            if(i%3===0){
                temp+=' FizBuz';
            }
        }
        console.log(`${i} ${temp}`);
    }
}

// 2) Написати логіку знаходження факторіалу числа 10.*/
function task2(){
    console.clear();
    console.log("HW03 task2");
    let factorialValue=1;
    const factorialNumber=10;
    for(let i=1;i<=factorialNumber; i++){
        factorialValue*=i;
    }
    console.log(`${factorialNumber}! is ${factorialValue}`);
}

// 3) У пачці паперу 500 аркушів. За тиждень в офісі витрачається 1200 аркушів. 
// Яку найменшу кількість пачок потрібно купити в офіс на 8 тижнів?
function task3(){
    console.clear();
    console.log("HW03 task3");
    const pagesPerPack=500;
    const consuptionPagesPerWeek=1200;
    const amountOfWeek=8;
    console.log(`Min amount of packs ${Math.ceil((consuptionPagesPerWeek*amountOfWeek)/pagesPerPack)}`)
}

/* 4) Створити функцію, яка виведе у консоль номер поверху та номер під'їзду за номером квартири.
 Поверхів у нас 9, квартир на поверсі по 3 */
function task4(){
    console.clear();
    console.log("HW03 task4");
    const appartmentNumber = prompt("Enter a number of appartment");
    const entranceNumber=Math.ceil(appartmentNumber/27);
    const floorNumber=Math.ceil((appartmentNumber-(entranceNumber-1)*27)/3);
    console.log(`Appartment with number ${appartmentNumber} is located in the ${entranceNumber} entrance on the ${floorNumber} floor`);
}

/* 5) Вивести у консоль піраміду. Змінна вказує кількість рядків, з яких побудується піраміда. 
Піраміда повинна будуватися в однаковому візуальному вигляді між собою, але строго враховуючи кількість рядків */
function task5(){
    console.clear();
    console.log('HW03 task5');
    const countRow=parseFloat(prompt("Input a count of rows"));
    console.log(`Entered ${countRow} rows`);
    console.log('Version 1');
    for(let i=1; i<=countRow; i+=1){
        let string=' ';
        let string1=' O';
        console.log(string.repeat(countRow-i)+'O'+string1.repeat(i-1));
    }
    console.log('Version 2');
    for(let i=1; i<=countRow; i+=1){
        let string=' ';
        let string1='OO';
        console.log(string.repeat(countRow-i)+'O'+string1.repeat(i-1));
    }
}