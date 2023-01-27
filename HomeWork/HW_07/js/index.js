// 1 Створити функцію - конструктор, який буде мати всередині всі властивості об'єкта emplyee з emplyeeArr масиву.
//const employeeObj = new Emploee(employee);
//   {
//     id: 0,
//     name: 'Valeriy',
//     surname: 'Zhmishenko',
//     salary: 1000, 
//     workExperience: 10, 
//     isPrivileges: true, 
//     gender: 'male',
//     }
// etc.
function task1(){
    console.clear();
    console.log("HW07 task1");
    class Emploee{
        id;
        name;
        surname;
        salary;
        workExperience; 
        isPrivileges;
        gender;
        constructor(arr){
            this.id=arr.id;
            this.name=arr.name;
            this.surname=arr.surname;
            this.salary=arr.salary;
            this.workExperience=arr.workExperience; 
            this.isPrivileges=arr.isPrivileges;
            this.gender=arr.gender;
        }
    }
    const employeeObj = new Emploee(emplyeeArr[1]);
    console.log(employeeObj);
}
// 2 Додати функції - конструктору метод (пам'ятаємо про prototype): getFullName який поверне повне ім'я починаючи з прізвища у вигляді рядка
//employeeObj.getFullName() // 'Zhmishenko Valeriy';
function task2(){
    console.clear();
    console.log("HW07 task2");
    class Emploee{
        id;
        name;
        surname;
        salary;
        workExperience; 
        isPrivileges;
        gender;
        constructor(arr){
            this.id=arr.id;
            this.name=arr.name;
            this.surname=arr.surname;
            this.salary=arr.salary;
            this.workExperience=arr.workExperience; 
            this.isPrivileges=arr.isPrivileges;
            this.gender=arr.gender;
        }
        getFullName(){
            return ' '+this.surname+' '+this.name;
        }
    }
    const employeeObj = new Emploee(emplyeeArr[1]);
    console.log(employeeObj);
    console.log(employeeObj.getFullName());
}

// 3 Створити новий масив на основі emplyeeArr, в якому будуть утримуватися ті ж об'єкти, 
//але створені функцією - конструктором Emploee. Новий масив повинен містити ім'я emplyeeConstructArr.
//let createEmployesFromArr = (arr) => {
//    .... Your code
//};
//const emplyeeConstructArr = createEmployesFromArr(emplyeeArr) /// [{id: 0, name: 'Valeriy', surname: 
//'Zhmishenko', salary: 1000,  workExperience: 10,  isPrivileges: true, gender:'male' }]
function task3(){
    console.clear();
    console.log("HW07 task3");
    let createEmployesFromArr = (arr) => {
           return Array.from(arr);
    };
    const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);
    console.log(emplyeeConstructArr);
}

// 4 Створити функцію, яка поверне масив з усіма повними іменами кожного робітника, що міститься в 
//emplyeeConstructArr;
// const getFullNamesFromArr = (arr) => {
//     ... Your code
// }
//getFullNamesFromArr(emplyeeConstructArr) /// ['Денис Хрущ', 'Сергій Войлов', ... ]
function task4(){
    console.clear();
    console.log("HW07 task4");
    let createEmployesFromArr = (arr) => {
        return Array.from(arr);
    };
    const getFullNamesFromArr = (arr) => {
        let tempArr=[];
        for(const key in arr){
            tempArr.push(arr[key].surname+' '+ arr[key].name);
        }
        return tempArr;
    }
    const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);
    console.log(getFullNamesFromArr(emplyeeConstructArr));
}

// 5 Створити функцію яка поверне середнє значення зарплати всіх employee
// const getMiddleSalary = (arr) => {
//     ... Your code
// }
//getMiddleSalary(emplyeeConstructArr) /// 1560
function task5(){
    console.clear();
    console.log('HW07 task5');
    let createEmployesFromArr = (arr) => {
        return Array.from(arr);
    };
    const getMiddleSalary = (arr) => {
        //debugger;
        let sum=0;
        for(const key in arr) sum+=arr[key].salary;
        return sum/arr.length;
    }
    const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);
    console.log(getMiddleSalary(emplyeeConstructArr));
}

// 6 Створити функцію, яка вибере навмання працівника з масиву emplyeeConstructArr.
//  Ви повинні враховувати у функції довжину масиву, тому що якщо працівників 7, 
//  а рандомне число дорівнюватиме більше 7, то результат буде undefined. Ви можете використовувати
//   оголошену функцію в самій собі. Підказка Math.random
// const getRandomEmployee = (arr) => {
//     ... Your code
//     }
    
//     getRandomEmployee(emplyeeConstructArr) /// {id: 0, name: 'Valeriy', surname: 'Zhmishenko', salary: 1000,  workExperience: 10,  isPrivileges: true, gender:'male' }
function task6(){
    console.clear();
    console.log("HW07 task6");
    let createEmployesFromArr = (arr) => {
        return Array.from(arr);
    };
    const getRandomEmployee = (arr) => {
        return arr[Math.round(Math.random()*arr.length)];
    }
    const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);
    console.log(getRandomEmployee(emplyeeConstructArr));
}

// 7 Створити дескриптор з властивістю fullInfo який буде записувати всі властивості, 
// передані йому в екземпляр від якого він викликається. І видавати всі властивості, якщо 
// до нього звернутися, у вигляді рядка <Назва властивості> - <значення> через кому.

//getter
// Створюємо екземпляр на основі об'єкта 
// який беремо з масиву за 0 індексом

// const employeeObj = new Emploee(employeeArr[0]);

// employeeObj.fullInfo
// Результат
//  id - 1, name - Денис, surname - Хрущ
// setter
// Створюємо екземпляр на основі об'єкта 
// який беремо з масиву за 0 індексом

// const employeeObj = new Emploee(employeeArr[0]);
// Результат employeeObj
//   {
//     id: 1,
//     name: 'Денис',
//     surname: 'Хрущ',
//     salary: 1010, 
//     workExperience: 10, 
//     isPrivileges: false, 
//     gender: 'male',
//   }


// employeeObj.fullInfo = {name: 'Вася', salary: 9000}
// Результат employeeObj
//   {
//     id: 1,
//     name: 'Вася',
//     surname: 'Хрущ',
//     salary: 1010, 
//     workExperience: 10, 
//     isPrivileges: false, 
//     gender: 'male',
//   }

// Якщо властивості в об'єкті, що передається, не було оголошено в класі, то цю властивість не записуємо в екземпляр
// employeeObj.fullInfo = {name: 'Вася', salary: 9000, email: 'ex@mail.ua'}
// Результат employeeObj
//   {
//     id: 1,
//     name: 'Вася',
//     surname: 'Хрущ',
//     salary: 9000, 
//     workExperience: 10, 
//     isPrivileges: false, 
//     gender: 'male',
//   }

// "name" вл-вість оновилась, "salary" оновилась, 
// а ось email не додався
function task7(){
    console.clear();
    console.log("HW07 task7");
    
}