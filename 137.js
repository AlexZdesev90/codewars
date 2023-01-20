//1)
// function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = "Lydia";
//     let age = 21;
// }

// sayHi();
//undefined
//Reference error
//Переменные, определенные с помощью let (и const), также поднимаются, но в отличие от var, не инициализируются. Доступ к ним не возможен до тех пор, пока не выполнится строка их определения (инициализации). Это называется "временная мертвая зона". Когда мы пытаемся обратиться к переменным до того момента как они определены, JavaScript выбрасывает исключение ReferenceError.

//2)
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }
// //333

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }
//0,1,2

//3)
// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius
// };

// shape.diameter();//20
// shape.perimeter();//NaN

//4)
// +true;
// !"Lydia";
// // 1 и false
// //5)
// const bird = {
//     size: "small"
// };

// const mouse = {
//     name: "Mickey",
//     small: true
// };

// A: mouse.bird.size+++++++++++++
// B: mouse[bird.size]
// C: mouse[bird["size"]]
// D: Все варианты валидны

//6)
// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting);

// //7)
// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);//true
// console.log(a === b);//false
// console.log(b === c);//false

// A: true false true
// B: false false true
// C: true false false
// D: false true true

//8)
// class Chameleon {
//     static colorChange(newColor) {
//         this.newColor = newColor;
//         return this.newColor;
//     }

//     constructor({ newColor = "green" } = {}) {
//         this.newColor = newColor;
//     }
// }

// const freddie = new Chameleon({ newColor: "purple" });
// freddie.colorChange("orange");

//Функция colorChange является статичной. Статичные методы не имеют доступа к экземплярам класса. Так как freddie это экземпляр, то статичный метод там не доступен. Поэтому выбрасывается ошибка TypeError.

//9)
// let greeting;
// greetign = {}; // Опечатка!
// console.log(greetign);//{}

// A: {}
// B: ReferenceError: greetign is not defined
// C: undefined

//10)
// function bark() {
//     console.log("Woof!");
// }

// bark.animal = "dog";

// A: Ничего, всё в порядке!+++++++++++++++++++++++++++++++++++++++++++++++++++++
// B: SyntaxError. Нельзя добавлять свойства функциям таким способом.
// C: undefined
// D: ReferenceError



//11)
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// const member = new Person("Lydia", "Hallie");
// Person.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// }

// console.log(member.getFullName());

// A: TypeError+++++++++++++++++++
// B: SyntaxError
// C: Lydia Hallie
// D: undefined undefined

//12)
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     return 12;
// }

// const lydia = new Person("Lydia", "Hallie");
// const sarah = Person("Sarah", "Smith");

// console.log(lydia);
// console.log(sarah);//12

//13)
// 13. Назовите три фазы распространения событий
// A: Цель > Захват > Всплытие
// B: Всплытие > Цель > Захват
// C: Цель > Всплытие > Захват
// D: Захват > Цель > Всплытие++++++++++++++++++++++++++

//14)
// A: Да
// B: Нет
// Ответ
// Ответ: B
// Все объекты имеют прототипы, кроме базового объекта. Базовый объект имеет доступ до некоторых методов и свойств, таких как .toString. Именно поэтому мы можем использовать встроенные методы JavaScript! Все эти методы доступны в прототипе. Если JavaScript не может найти метод непосредственно у объекта, он продолжает поиск по цепочке прототипов пока не найдет.


//15)
// function sum(a, b) {
//     return a + b;
// }

// sum(1, "2");

//16)
// let number = 0;
// console.log(number++);//0
// console.log(++number);//2
// console.log(number);//2

// //17)
// function getPersonInfo(one, two, three) {
//     console.log(one);
//     console.log(two);
//     console.log(three);
// }

// const person = "Lydia";
// const age = 21;

// getPersonInfo`${person} is ${age} years old`;

// A: "Lydia" 21 ["", " is ", " years old"]
// B: ["", " is ", " years old"] "Lydia" 21++++++++++++++++++++
// C: "Lydia" ["", " is ", " years old"] 21

//18)
// function checkAge(data) {
//     if (data === { age: 18 }) {
//         console.log("Ты взрослый!");
//     } else if (data == { age: 18 }) {
//         console.log("Ты все еще взрослый.");
//     } else {
//         console.log(`Хмм.. Кажется, у тебя нет возраста.`);
//     }
// }

// checkAge({ age: 18 });//`Хмм.. Кажется, у тебя нет возраста.`

//19)
// function getAge(...args) {
//     console.log(typeof args);
// }

// getAge(21);
// A: "number"
// B: "array"
// C: "object"+++++++++++++++
// D: "NaN"

//20)
// function getAge() {
//     "use strict";
//     age = 21;
//     console.log(age);
// }

// getAge()
// A: 21
// B: undefined
// C: ReferenceError+++++++++++++++
// D: TypeError
// Ответ: C
// Используя "use strict", можно быть уверенным, что мы по ошибке не побъявим глобальные переменные. Мы ранее нигде не объявляли переменную age, поэтому с использованием "use strict" возникнет ReferenceError. Без использования "use strict" ошибки не возникнет, а переменная age добавится в глобальный объект.

// 21.) Чему будет равно sum?
// const sum = eval("10*10+5");
// A: 105++++++++++++++++++++++++++++
// B: "105"
// C: TypeError
// D: "10*10+5"

// eval выполняет код, переданный в виде строки. Если это выражение (как в данном случае), то вычисляется выражение. Выражение 10 * 10 + 5 вернет число 105.

// 22. Как долго будет доступен cool_secret?
// sessionStorage.setItem("cool_secret", 123);
// A: Всегда, данные не потеряются.
// B: Пока пользователь не закроет вкладку.+++++++++++++++++++++++++++++++++++++
// C: Пока пользователь не закроет браузер, а не только вкладку.
// D: Пока пользователь не выключит компьютер.

// 23. Что будет в консоли?
// var num = 8;
// var num = 10;

// console.log(num);
// A: 8
// B: 10+++++++++++++++++++
// C: SyntaxError
// D: ReferenceError

// 24. Каким будет результат?
// const obj = { 1: "a", 2: "b", 3: "c" };
// const set = new Set([1, 2, 3, 4, 5]);

// obj.hasOwnProperty("1");//true
// obj.hasOwnProperty(1);//true
// set.has("1");//false
// set.has(1);//true
//Ответ: C
// Все ключи объектов (кроме Symbols) являются строками, даже если заданы не в виде строк. Поэтому obj.hasOwnProperty('1') так же возвращает true.

// Но это не работает для set. Значения '1' нет в set: set.has('1') возвращает false. Но set.has(1) вернет true.

// 25. Что будет в консоли?
// const obj = { a: "one", b: "two", a: "three" };
// console.log(obj);
// A: { a: "one", b: "two" }
// B: { b: "two", a: "three" }
// C: { a: "three", b: "two" }++++++++++++++++++++
// D: SyntaxError

//Если есть два ключа с одинаковым именем, то ключ будет перезаписан. Его позиция сохранится, но значением будет последнее указанное.

// 26. Глобальный контекст исполнения создает две вещи: глобальный объект и this
// A: Да+++++++++++++++++++++++++++++
// B: Нет
// C: Это зависит

// Базовый контекст исполнения это глобальный контекст исполнения: это то, что доступно где угодно в твоем коде.
// 27. Что будет в консоли?
// for (let i = 1; i < 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
//   }
//   A: 1 2
//   B: 1 2 3
//   C: 1 2 4+++++++++++++++++++++++++++++++++++++
//   D: 1 3 4

// 28. Каким будет результат?
// String.prototype.giveLydiaPizza = () => {
//   return "Just give Lydia pizza already!";
// };

// const name = "Lydia";

// console.log(name.giveLydiaPizza())
// A: "Just give Lydia pizza already!"++++++++++++++++++++++++++++++++++
// B: TypeError: not a function
// C: SyntaxError
// D: undefined

// 29. Что будет в консоли?
// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);A: 123
//A: 123
// B: 456
// C: undefined
// D: ReferenceError

// Ответ: B
// Ключи объекта автоматически конвертируются в строки. Мы собираемся добавить объект в качестве ключа к объекту a со значением 123.

// Тем не менее, когда мы приводим объект к строке, он становится "[object Object]". Таким образом, мы говорим, что a["object Object"] = 123. Потом мы делаем то же самое. c это другой объект, который мы неявно приводим к строке. Поэтому a["object Object"] = 456.

// Затем, когда мы выводим a[b], мы имеем в виду a["object Object"]. Мы только что установили туда значение 456, поэтому в результате получаем 456.

//30. Каким будет результат?
// const foo = () => console.log("First");
// const bar = () => setTimeout(() => console.log("Second"));
// const baz = () => console.log("Third");

// bar();
// foo();
// baz();

// A: First Second Third
// B: First Third Second
// C: Second First Third
// D: Second Third First
// Ответ
// Ответ: B

// 31. Что будет в event.target после клика на кнопку?
{/* <div onclick="console.log('first div')">
    <div onclick="console.log('second div')">
        <button onclick="console.log('button')">
            Кликни!
        </button>
    </div>
</div> */}
// A: Внешний div
// B: Внутренний div
// C: button
// D: Массив со всеми вложенными элементами

//32. Что будет в консоли после клика по параграфу?
{/* <div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Кликни меня!
  </p>
</div>
A: p div
B: div p
C: p
D: div
Ответ
Ответ: A */}


// 33. Что будет в консоли?
// const person = { name: "Lydia" };

// function sayHi(age) {
//     console.log(`${this.name} is ${age}`);
// }

// console.log(sayHi.call(person, 21));
// console.log(sayHi.bind(person, 21));

// A: undefined is 21 Lydia is 21
// B: function function
// C: Lydia is 21 Lydia is 21
// D: Lydia is 21 function+++++++++++++++

// 34. Каким будет результат?
//function sayHi() {
//  return (() => 0)();
//}

//   console.log(typeof sayHi());

//   35. Какие из этих значений являются "ложными"?
// 0;
// new Number(0);
// ("");
// (" ");
// new Boolean(false);
// undefined;
// A: 0, '', undefined
// B: 0, new Number(0), '', new Boolean(false), undefined
// C: 0, '', new Boolean(false), undefined
// D: Все являются "ложными"

// Ответ: A
// Есть только шесть "ложных" значений:

// undefined
// null
// NaN
// 0
// '' (пустая строка)
// false
// Конструкторы функций, такие как new Number и new Boolean являются "истинными".

// 36. Что будет в консоли
// console.log(typeof typeof 1);
// A: "number"
// B: "string"
// C: "object"
// D: "undefined"

//Ответ: B
// typeof 1 возвращает "number". typeof "number" возвращает "string"

// 37. Что будет в консоли?
// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);
// A: [1, 2, 3, 7 x null, 11]
// B: [1, 2, 3, 11]
// C: [1, 2, 3, 7 x empty, 11]++++++++++++++++++++++++
// D: SyntaxError


// 38. Что будет в консоли?
// (() => {
//   let x, y;
//   try {
//     throw new Error();
//   } catch (x) {
//     (x = 1), (y = 2);
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();
// A: 1 undefined 2++++++++++++++++++
// B: undefined undefined undefined
// C: 1 1 2
// D: 1 undefined undefined

// Ответ: A
// Блок catch получает аргумент x. Это не тот же x, который определен в качестве переменной перед строкой try {

// Затем мы присваиваем этому аргументу значение 1 и устанавливаем значение для переменной y. Потом выводим в консоль значение аргумента x, которое равно 1.

// За пределами блока catch переменная x все еще undefined, а y равно 2. Когда мы вызываем console.log(x) за пределами блока catch, этот вызов возвращает undefined, а y возвращает 2.

// 39. Всё в JavaScript это
// A: примитив или объект
// B: функция или объект
// C: вопрос с подвохом! только объекты
// D: число или объект
// Ответ
// Ответ: A
// В JavaScript есть только примитивы и объекты.

// Типы примитивов: boolean, null, undefined, bigint, number, string, и symbol.

// Отличием примитива от объекта является то, что примитивы не имеют свойств или методов. Тем не менее, 'foo'.toUpperCase() преобразуется в 'FOO' и не вызывает TypeError. Это происходит потому, что при попытке получения свойства или метода у примитива (например, строки), JavaScript неявно обернет примитив объектом, используя один из классов-оберток (например, String), а затем сразу же уничтожит обертку после вычисления выражения. Все примитивы кроме null и undefined ведут себя таким образом.

// 40. Каким будет результат?
// [[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//         return acc.concat(cur);
//     },
//     [1, 2]
// );
// A: [0, 1, 2, 3, 1, 2]
// B: [6, 1, 2]
// C: [1, 2, 0, 1, 2, 3]++++++++++++++++++++
// D: [1, 2, 6]

// 41. Каким будет результат?
// !!null;//false
// !!"";//false
// !!1;//true

//Ответ: B
// null - "ложный". !null возвращает true. !true возвращает false.
// "" - "ложный". !"" возвращает true. !true возвращает false.
// 1 - "истинный". !1 возвращает false. !false возвращает true.

//42. Что возвращает метод setInterval?
// A: уникальный id
// B: указанное количество миллисекунд
// C: переданную функцию
// D: undefined

//43. Каким будет результат?
// [..."Lydia"];//["L", "y", ....]

//A: ["L", "y", "d", "i", "a"]+++++++
// B: ["Lydia"]
// C: [[], "Lydia"]
// D: [["L", "y", "d", "i", "a"]]


//44. Каким будет результат?
// function* generator(i) {
//     yield i;
//     yield i * 2;
// }

// const gen = generator(10);

// console.log(gen.next().value);//10
// console.log(gen.next().value);//20

//A: [0, 10], [10, 20]
// B: 20, 20
// C: 10, 20+++++++++++++++++++++++++++++++++
// D: 0, 10 and 10, 20

//45. Каким будет результат?
// const firstPromise = new Promise((res, rej) => {
//     setTimeout(res, 500, "один");
// });

// const secondPromise = new Promise((res, rej) => {
//     setTimeout(res, 100, "два");
// });

// Promise.race([firstPromise, secondPromise]).then(res => console.log(res));

// A: "один"
// B: "два"+++++++++++++++++++++++++++++++
// C: "два" "один"
// D: "один" "два"

// 46. Каким будет результат?-----------------------------------------------------------
// let person = { name: "Lydia" };
// const members = [person];
// person = null;

// console.log(members);
// A: null
// B: [null]
// C: [{}]
// D: [{ name: "Lydia" }]+++++++++++++++++


// 47. Каким будет результат?
// const person = {
//   name: "Lydia",
//   age: 21
// };

// for (const item in person) {
//   console.log(item);
// }
// A: { name: "Lydia" }, { age: 21 }
// B: "name", "age"+++++++++++++++++++++++++++++++++
// C: "Lydia", 21
// D: ["name", "Lydia"], ["age", 21]

// 48. Каким будет результат?
// console.log(3 + 4 + "5");
// A: "345"
// B: "75"+++++++++++++++++
// C: 12
// D: "12"

// 49. Какое значение num?
// const num = parseInt("7*6", 10);
// A: 42
// B: "42"
// C: 7+++++++++++++++++++++++++++
// D: NaN

// 50. Каким будет результат?
// let x = [1, 2, 3].map(num => {
//     if (typeof num === "number") return;
//     return num * 2;
// });
// console.log(x)
// A: []
// B: [null, null, null]
// C: [undefined, undefined, undefined]+++++++++++++++++++++++++++++
// D: [ 3 x empty ]

// 51. Каким будет результат?-------------------------------------------------------------------------------------
// function getInfo(member, year) {
//     member.name = "Lydia";
//     year = 1998;
// }

// const person = { name: "Sarah" };
// const birthYear = "1997";

// getInfo(person, birthYear);

// console.log(person, birthYear);
// A: { name: "Lydia" }, "1997"+++++++++++++++++++++++++++++++++++++++
// B: { name: "Sarah" }, "1998"
// C: { name: "Lydia" }, "1998"
// D: { name: "Sarah" }, "1997"

// 52. Каким будет результат?
// function greeting() {
//     throw "Hello world!";
// }

// function sayHi() {
//     try {
//         const data = greeting();
//         console.log("It worked!", data);
//     } catch (e) {
//         console.log("Oh no an error:", e);
//     }
// }

// sayHi();

// A: It worked! Hello world!
// B: Oh no an error: undefined
// C: SyntaxError: can only throw Error objects
// D: Oh no an error: Hello world!+++++++++++++++++++++++++++

// 53. Каким будет результат?
// function Car() {
//   this.make = "Lamborghini";
//   return { make: "Maserati" };
// }

// const myCar = new Car();
// console.log(myCar.make);
// A: "Lamborghini"
// B: "Maserati"+++++++++++++++++++++
// C: ReferenceError
// D: TypeError

// 54. Каким будет результат?
// (() => {
//     let x = (y = 10);
// })();

// console.log(typeof x);
// console.log(typeof y);
// A: "undefined", "number"++++++++++++++++++++++++++++++
// B: "number", "number"
// C: "object", "number"
// D: "number", "undefined"

// let x = y = 10; на самом деле является сокращением для:

// y = 10;
// let x = y;

// 55. Какой будет вывод?
// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// Dog.prototype.bark = function () {
//     console.log(`Woof I am ${this.name}`);
// };

// const pet = new Dog("Mara");

// pet.bark();

// delete Dog.prototype.bark;

// pet.bark();
// A: "Woof I am Mara", TypeError+++++++++++++++++++++++++++++++++++++++++
// B: "Woof I am Mara", "Woof I am Mara"
// C: "Woof I am Mara", undefined
// D: TypeError, TypeError

// Мы можем удалить свойства из объектов, используя ключевое слово delete, также в прототипе. Удаляя свойство в прототипе, оно больше не доступно в цепочке прототипов. В этом случае функция bark больше не доступна в прототипе послеdelete Dog.prototype.bark, но мы все еще пытаемся получить к ней доступ.

// Когда мы пытаемся вызвать что-то, что не является функцией, выдается TypeError. В этом случае TypeError: pet.bark не является функцией, поскольку pet.bark является undefined.

//56)Какой будет вывод?
// const set = new Set([1, 1, 2, 3, 4]);

// console.log(set);

// 57. Какой будет вывод?
// counter.js
// let counter = 10;
// export default counter;
// // index.js
// import myCounter from "./counter";

// myCounter += 1;

// console.log(myCounter);

// A: 10
// B: 11
// C: Error++++++++++++++++++++++++++++++++++++++++++++++++++
// D: NaN
// Ответ: C
// Импортированный модуль является read-only: вы не можете изменить импортированный модуль. Только модуль, который их экспортирует, может изменить его значение.

// Когда мы пытаемся увеличить значение myCounter, выдается ошибка: myCounter доступен только для чтения и не может быть изменен.

// 58. Какой будет вывод?
// const name = "Lydia";
// age = 21;

// console.log(delete name);++++++++++++++++++++++++++
// console.log(delete age);
// A: false, true
// B: "Lydia", 21
// C: true, true
// D: undefined, undefined

// Ответ
// Ответ: A
// Оператор delete возвращает логическое значение: true при успешном удалении, иначе он вернет false. Однако переменные, объявленные с ключевым словом var, const или let, не могут быть удалены с помощью оператора delete.

// Переменная name была объявлена ​​с ключевым словом const, поэтому ее удаление не было успешным: возвращается false. Когда мы устанавливаем age равным 21, мы фактически добавляем свойство с именем age к глобальному объекту. Вы можете успешно удалить свойства из объектов, в том числе из глобального объекта, поэтому delete age возвращает true.

// 59. Какой будет вывод?
// const numbers = [1, 2, 3, 4, 5];
// const [y] = numbers;

// console.log(y);
// A: [[1, 2, 3, 4, 5]]
// B: [1, 2, 3, 4, 5]
// C: 1+++++++++++++++++++++++++++++
// D: [1]

// 60. Какой будет вывод?
// const user = { name: "Lydia", age: 21 };
// const admin = { admin: true, ...user };

// console.log(admin);

// A: { admin: true, user: { name: "Lydia", age: 21 } }
// B: { admin: true, name: "Lydia", age: 21 }++++++++++++++++++++++++++++++
// C: { admin: true, user: ["Lydia", 21] }
// D: { admin: true }

// 61. Какой будет вывод?
const person = { name: "Lydia" };

Object.defineProperty(person, "age", { value: 21 });

console.log(person);
console.log(Object.keys(person));

// A: { name: "Lydia", age: 21 }, ["name", "age"]
// B: { name: "Lydia", age: 21 }, ["name"]++++++++++++++++++
// C: { name: "Lydia"}, ["name", "age"]
// D: { name: "Lydia"}, ["age"]

// 62. Какой будет вывод?-----------------------------------------------------------------------------
const settings = {
    username: "lydiahallie",
    level: 19,
    health: 90
};

const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);

// A: "{"level":19, "health":90}"++++++++++++++++++++++++++++
// B: "{"username": "lydiahallie"}"
// C: "["level", "health"]"
// D: "{"username": "lydiahallie", "level":19, "health":90}"
// Ответ
// Ответ: A
// Второй аргумент JSON.stringify - это replacer. Заменитель может быть либо функцией, либо массивом, и позволяет вам контролировать, что и как должны быть преобразованы в значения.

// Если заменитель является массивом, только свойства, имена которых включены в массив, будут добавлены в строку JSON. В этом случае включаются только свойства с именами "level" и "health", "username" исключается. data теперь равен "{"level":19, "health":90}".

// Если заменитель является function, эта функция вызывается для каждого свойства объекта, который вы преобразуете. Значение, возвращаемое из этой функции, будет значением свойства при добавлении в строку JSON. Если значение равно undefined, это свойство исключается из строки JSON.

// 63. Какой будет вывод?
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);

// A: 10, 10++++++++++++++++++++++++++++++
// B: 10, 11
// C: 11, 11
// D: 11, 12


// 64. Какой будет вывод?
const value = { number: 10 };

const multiply = (x = { ...value }) => {
    console.log((x.number *= 2));
};

multiply();
multiply();
multiply(value);
multiply(value);

//A: 20, 40, 80, 160
// B: 20, 40, 20, 40
// C: 20, 20, 20, 40+++++++++++++++
// D: NaN, NaN, 20, 40

//65---------------------------------------------------------
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));
//Первым аргументом, который получает метод reduce, является аккумулятором, в данном случае x. Второй аргумент - это текущее значение, y. С помощью метода reduce мы выполняем функцию обратного вызова для каждого элемента в массиве, что в конечном итоге может привести к единственному значению.


// A: 1 2, 3 3 и 6 4
// B: 1 2, 2 3 и 3 4
// C: 1 undefined, 2 undefined, 3 undefined и 4 undefined
// D: 1 2, undefined 3 и undefined 4+++++++++++++++++++++++++++++

// В этом примере мы не возвращаем никаких значений, мы просто регистрируем значения аккумулятора и текущее значение.
// Значение аккумулятора равно ранее возвращенному значению функции обратного вызова. Если вы не передадите необязательный аргумент initialValue методу reduce, аккумулятор будет равен первому элементу при первом вызове.
// При первом вызове аккумулятор (x) равен 1, а текущее значение (y) равно 2. Мы не возвращаемся из функции обратного вызова, мы регистрируем аккумулятор и текущее значение: 1 и 2 регистрируются.
// Если вы не возвращаете значение из функции, она возвращает значение undefined. При следующем вызове аккумулятор равен undefined, а текущее значение равно 3. undefined и 3 будут зарегистрированы.
// При четвертом вызове мы снова не возвращаемся из функции обратного вызова. Аккумулятор снова равен undefined, а текущее значение равно 4. undefined и 4 будут зарегистрированы.

// 66. С помощью какого конструктора мы можем успешно расширить класс Dog?
// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// };

// class Labrador extends Dog {
//     // 1
//     constructor(name, size) {
//         this.size = size;
//     }
//     // 2
//     constructor(name, size) {
//         super(name);
//         this.size = size;
//     }
//     // 3
//     constructor(size) {
//         super(name);
//         this.size = size;
//     }
//     // 4
//     constructor(name, size) {
//         this.name = name;
//         this.size = size;
//     }

// };
// A: 1
// B: 2++++++++++++++++++++++++++++++++++++++
// C: 3
// D: 4


// 67. Какой будет вывод?
// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;
// A: running index.js, running sum.js, 3
// B: running sum.js, running index.js, 3
// C: running sum.js, 3, running index.js
// D: running index.js, undefined, running sum.js

// 68. Какой будет вывод?------------------------------------------------
console.log(Number(2) === Number(2))//true
console.log(Boolean(false) === Boolean(false))//true
console.log(Symbol('foo') === Symbol('foo'))//false
// A: true, true, false++++++++++++++++++++++++++++
// B: false, true, false
// C: true, false, true
// D: true, true, true
// 69. Какой будет вывод?
const name = "Lydia Hallie"
console.log(name.padStart(13))
console.log(name.padStart(2))
// A: "Lydia Hallie", "Lydia Hallie"
// B: "           Lydia Hallie", "  Lydia Hallie" ("[13x whitespace]Lydia Hallie", "[2x whitespace]Lydia Hallie")
// C: " Lydia Hallie", "Lydia Hallie" ("[1x whitespace]Lydia Hallie", "Lydia Hallie")++++++++++++++++++++++++++++++++++++++
// D: "Lydia Hallie", "Lyd",

// 70. Какой будет вывод?
console.log("🥑" + "💻");
// A: "🥑💻"++++++++++++++++++++++++++++
// B: 257548
// C: Строка, содержащая кодовые обозначения
// D: Error

// 71. Как мы можем вывести в лог значения, которые закомментированы после оператора console.log?
function* startGame() {
    const answer = yield "Do you love JavaScript?";
    if (answer !== "Yes") {
        return "Oh wow... Guess we're gone here";
    }
    return "JavaScript loves you back ❤️";
}

const game = startGame();
console.log(/* 1 */); // Do you love JavaScript?
console.log(/* 2 */); // JavaScript loves you back ❤️
// A: game.next("Yes").value и game.next().value
// B: game.next.value("Yes") и game.next.value()
// C: game.next().value и game.next("Yes").value+++++++++++++++++++++++++++++++
// D: game.next.value() и game.next.value("Yes")

// 72. Какой будет вывод?
console.log(String.raw`Hello\nworld`);
// A: Hello world!
// B: Hello
//      world
// C: Hello\nworld
// D: Hello\n
//      world

// Ответ: C
// String.raw возвращает строку, в которой экранированные символы (\n, \v, \t и т.д.) игнорируются! Обратная косая черта может быть проблемой, так как вы можете получить что-то вроде:

// const path = `C:\Documents\Projects\table.html`

// Что приведет к:

// "C:DocumentsProjects able.html"

// С String.raw он просто проигнорирует управляющий знак и напечатает:

// C:\Documents\Projects\table.html

// В этом случае строка Hello\nworld, которая и выводится.