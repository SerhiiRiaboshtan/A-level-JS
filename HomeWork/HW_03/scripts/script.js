console.clear();
console.log('HW03 task5');
const number=prompt("Введите количество рядов:");
console.log('Вариант 1');
for(let i=1; i<=number; i+=1){
    let string=' ';
    let string1=' O';
    console.log(string.repeat(number-i)+'O'+string1.repeat(i-1));
}
console.log('Вариант 2');
for(let i=1; i<=number; i+=1){
    let string=' ';
    let string1='OO';
    console.log(string.repeat(number-i)+'O'+string1.repeat(i-1));
}