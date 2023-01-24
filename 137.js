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
// const person = { name: "Lydia" };

// Object.defineProperty(person, "age", { value: 21 });

// console.log(person);
// console.log(Object.keys(person));

// // A: { name: "Lydia", age: 21 }, ["name", "age"]
// // B: { name: "Lydia", age: 21 }, ["name"]++++++++++++++++++
// // C: { name: "Lydia"}, ["name", "age"]
// // D: { name: "Lydia"}, ["age"]

// // 62. Какой будет вывод?-----------------------------------------------------------------------------
// const settings = {
//     username: "lydiahallie",
//     level: 19,
//     health: 90
// };

// const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data);

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
// let num = 10;

// const increaseNumber = () => num++;
// const increasePassedNumber = number => number++;

// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1);

// console.log(num1);
// console.log(num2);

// A: 10, 10++++++++++++++++++++++++++++++
// B: 10, 11
// C: 11, 11
// D: 11, 12


// 64. Какой будет вывод?
// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//     console.log((x.number *= 2));
// };

// multiply();
// multiply();
// multiply(value);
// multiply(value);

// //A: 20, 40, 80, 160
// // B: 20, 40, 20, 40
// // C: 20, 20, 20, 40+++++++++++++++
// // D: NaN, NaN, 20, 40

// //65---------------------------------------------------------
// [1, 2, 3, 4].reduce((x, y) => console.log(x, y));
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
// console.log('running index.js');
// import { sum } from './sum.js';
// console.log(sum(1, 2));

// // sum.js
// console.log('running sum.js');
// export const sum = (a, b) => a + b;
// A: running index.js, running sum.js, 3
// B: running sum.js, running index.js, 3
// C: running sum.js, 3, running index.js
// D: running index.js, undefined, running sum.js

// 68. Какой будет вывод?------------------------------------------------
// console.log(Number(2) === Number(2))//true
// console.log(Boolean(false) === Boolean(false))//true
// console.log(Symbol('foo') === Symbol('foo'))//false
// A: true, true, false++++++++++++++++++++++++++++
// B: false, true, false
// C: true, false, true
// D: true, true, true
// 69. Какой будет вывод?
// const name = "Lydia Hallie"
// console.log(name.padStart(13))
// console.log(name.padStart(2))
// // A: "Lydia Hallie", "Lydia Hallie"
// // B: "           Lydia Hallie", "  Lydia Hallie" ("[13x whitespace]Lydia Hallie", "[2x whitespace]Lydia Hallie")
// // C: " Lydia Hallie", "Lydia Hallie" ("[1x whitespace]Lydia Hallie", "Lydia Hallie")++++++++++++++++++++++++++++++++++++++
// // D: "Lydia Hallie", "Lyd",

// // 70. Какой будет вывод?
// console.log("🥑" + "💻");
// A: "🥑💻"++++++++++++++++++++++++++++
// B: 257548
// C: Строка, содержащая кодовые обозначения
// D: Error

// 71. Как мы можем вывести в лог значения, которые закомментированы после оператора console.log?
// function* startGame() {
//     const answer = yield "Do you love JavaScript?";
//     if (answer !== "Yes") {
//         return "Oh wow... Guess we're gone here";
//     }
//     return "JavaScript loves you back ❤️";
// }

// const game = startGame();
// console.log(/* 1 */); // Do you love JavaScript?
// console.log(/* 2 */); // JavaScript loves you back ❤️
// // A: game.next("Yes").value и game.next().value
// // B: game.next.value("Yes") и game.next.value()
// // C: game.next().value и game.next("Yes").value+++++++++++++++++++++++++++++++
// // D: game.next.value() и game.next.value("Yes")

// // 72. Какой будет вывод?
// console.log(String.raw`Hello\nworld`);
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

// 73. Какой будет вывод?
// async function getData() {
//     return await Promise.resolve("I made it!");
// }

// const data = getData();
// console.log(data);
// A: "I made it!"
// B: Promise {<resolved>: "I made it!"}
// C: Promise {<pending>}+++++++++++++++++++++++++++++++++++++
// D: undefined

// 74. Какой будет вывод?
// function addToList(item, list) {
//     return list.push(item);
// }

// const result = addToList("apple", ["banana"]);
// console.log(result);
// A: ['apple', 'banana']
// B: 2+++++++++++++++++++++++++++++++++
// C: true
// D: undefined

// const array = [12,23,45]
// function set(arr){
//     console.log(arr.push(23));
//     console.log(arr)
// }

// console.log(set(array));

// 75. Какой будет вывод?
// const box = { x: 10, y: 20 };

// Object.freeze(box);

// const shape = box;
// shape.x = 100;

// console.log(shape);

// // A: { x: 100, y: 20 }
// // B: { x: 10, y: 20 }++++++++++++++++++++
// // C: { x: 100 }
// // D: ReferenceError

// // 76. Какой будет вывод?
// const { name: myName } = { name: "Lydia" };

// console.log(name);
// A: "Lydia"
// B: "myName"
// C: undefined
// D: ReferenceError++++++++++++++++

// 77. Это чистая функция?
// function sum(a, b) {
//     return a + b;
// }

// A: Да+++++++++++++++++++++++
// B: Нет

// 78. Какой будет вывод?
// const add = () => {
//     const cache = {};
//     return num => {
//         if (num in cache) {
//             return `From cache! ${cache[num]}`;
//         } else {
//             const result = num + 10;
//             cache[num] = result;
//             return `Calculated! ${result}`;
//         }
//     };
// };

// const addFunction = add();
// console.log(addFunction(10));
// console.log(addFunction(10));
// console.log(addFunction(5 * 2));
// A: Calculated! 20 Calculated! 20 Calculated! 20
// B: Calculated! 20 From cache! 20 Calculated! 20
// C: Calculated! 20 From cache! 20 From cache! 20++++++++++++++++++++++
// D: Calculated! 20 From cache! 20 Error

// 79. Какой будет вывод?
// const myLifeSummedUp = ["☕", "💻", "🍷", "🍫"]

// for (let item in myLifeSummedUp) {
//     console.log(item)
// }

// for (let item of myLifeSummedUp) {
//     console.log(item)
// }
// // A: 0 1 2 3 и "☕"  "💻" "🍷" "🍫"++++++++++++++++++++++
// // B: "☕"  "💻" "🍷" "🍫" и "☕"  "💻" "🍷" "🍫"
// // C: "☕"  "💻" "🍷" "🍫" и 0 1 2 3
// // D: 0 1 2 3 и {0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}

// // 80. Какой будет вывод?
// const list = [1 + 2, 1 * 2, 1 / 2]
// console.log(list)
// // A: ["1 + 2", "1 * 2", "1 / 2"]
// // B: ["12", 2, 0.5]
// // C: [3, 2, 0.5]++++++++++++++++++++++++++++++++++++++++++
// // D: [1, 1, 1]

// // 81. Какой будет вывод?
// function sayHi(name) {
//     return `Hi there, ${name}`
// }

// console.log(sayHi())
// A: Hi there, 
// B: Hi there, undefined++++++++++++++++++++++++++++++
// C: Hi there, null
// D: ReferenceError

// 82. Какой будет вывод?
// var status = "😎"

// setTimeout(() => {
//     const status = "😍"

//     const data = {
//         status: "🥑",
//         getStatus() {
//             return this.status
//         }
//     }

//     console.log(data.getStatus())
//     console.log(data.getStatus.call(this))
// }, 0)
// // A: "🥑" и "😍"
// // B: "🥑" и "😎"
// // C: "😍" и "😎"
// // D: "😎" и "😎"

// // 83. Какой будет вывод?
// const person = {
//     name: "Lydia",
//     age: 21
// }

// let city = person.city
// city = "Amsterdam"

// console.log(person)
// A: { name: "Lydia", age: 21 }++++++++++++++++++++++
// B: { name: "Lydia", age: 21, city: "Amsterdam" }
// C: { name: "Lydia", age: 21, city: undefined }
// D: "Amsterdam"

// 85. Какая информация будетвыведена в лог?
// fetch('https://www.website.com/api/user/1')
//     .then(res => res.json())
//     .then(res => console.log(res))
// A: Результат метода fetch.
// B: Результат второго вызова метода fetch.
// C: Результат коллбэка в предыдущем .then().++++++++++++++++++++++++
// D: Всегда будет undefined.

// 86. Какая опция позволяет установить hasName равным true, если вы не можете передатьtrue в качестве аргумента?
// function getName(name) {
//   const hasName = //
// }
// A: !!name++++++++++++++++++++++++++
// B: name
// C: new Boolean(name)
// D: name.length

//Ответ: A
// С помощью !!name мы определяем, является ли значение name истинным или ложным. Если имя истинное, которое мы хотим проверить, то !name возвращает false. А !false (это то, чем на самом деле является !! name) возвращает true.

// Устанавливая hasName равным name, вы устанавливаете hasName равным любому значению, которое вы передали функции getName, а не логическому значению true.

// new Boolean (true) возвращает объектную оболочку, а не само логическое значение.

// name.length возвращает длину переданного аргумента, независимо от того, является ли он true.

// 87. Какой будет вывод?
// console.log("I want pizza"[0])
// // A: """
// // B: "I"++++++++++++++++++++++++++++
// // C: SyntaxError
// // D: undefined

// // 88. Какой будет вывод?
// function sum(num1, num2 = num1) {
//     console.log(num1 + num2)
// }

// sum(10)
// A: NaN
// B: 20
// C: ReferenceError
// D: undefined

// Вы можете установить значение параметра по умолчанию равным другому параметру функции, если они были определены до параметров по умолчанию. Мы передаем значение 10 в функцию sum. Если функция sum принимает только один аргумент, это означает, что значение для num2 не передано, и в этом случае значение num1 равно переданному значению 10. Значением по умолчанию num2 является значение num1, которое равно 10. num1 + num2 возвращает 20.
// Если вы пытаетесь установить значение параметра по умолчанию равным параметру, который определен после (справа), то значение параметра еще не было инициализировано; это приведет к ошибке.

// 89. Какой будет вывод?----------------------------
// module.js
// export default () => "Hello world"
// export const name = "Lydia"

// // index.js
// import * as data from "./module"

// console.log(data)
// A: { default: function default(), name: "Lydia" }
// B: { default: function default() }
// C: { default: "Hello world", name: "Lydia" }
// D: Global object of module.js

// 90. Какой будет вывод?
// class Person {
//     constructor(name) {
//         this.name = name
//     }
// }

// const member = new Person("John");
// console.log(typeof member);

// A: "class"
// B: "function"
// C: "object"+++++++++++++++++++++++
// D: "string"

//Ответ: C
// Классы являются синтаксическим сахаром для конструкторов функций. Эквивалентом класса Person в качестве конструктора функции будет:
// function Person() {
//   this.name = name
// }
// Вызов конструктора функции с new приводит к созданию экземпляра Person, ключевое слово typeof возвращает "object" для экземпляра. typeof member возвращает "object".

// 91. Какой будет вывод?
// let newList = [1, 2, 3].push(4)

// console.log(newList.push(5))
// A: [1, 2, 3, 4, 5]
// B: [1, 2, 3, 5]
// C: [1, 2, 3, 4]
// D: Error++++++++++++++++++++++++++++++

// 92. Какой будет вывод?
// function giveLydiaPizza() {
//     return "Here is pizza!"
// }

// const giveLydiaChocolate = () => "Here's chocolate... now go hit the gym already."

// console.log(giveLydiaPizza.prototype)
// console.log(giveLydiaChocolate.prototype)
// A: { constructor: ...} { constructor: ...}
// B: {} { constructor: ...}
// C: { constructor: ...} {}
// D: { constructor: ...} undefined

// console.log(function x() { }.prototype)

// // 93. Какой будет вывод?
// const person = {
//     name: "Lydia",
//     age: 21
// }

// for (const [x, y] of Object.entries(person)) {
//     console.log(x, y)
// }
// A: name Lydia and age 21+++++++++++++++++++++++++++++
// B: ["name", "Lydia"] and ["age", 21]
// C: ["name", "age"] and undefined
// D: Error

// 94. Какой будет вывод?
// function getItems(fruitList, ...args, favoriteFruit) {
//     return [...fruitList, ...args, favoriteFruit]
// }

// getItems(["banana", "apple"], "pear", "orange")
// A: ["banana", "apple", "pear", "orange"]
// B: [["banana", "apple"], "pear", "orange"]
// C: ["banana", "apple", ["pear"], "orange"]
// D: SyntaxError++++++++++++++++++++++++++++++++++++++++

// 95. Какой будет вывод ?
// function nums(a, b) {
//     if
//         (a > b)
//         console.log('a is bigger')
//     else
//         console.log('b is bigger')
//     return
//     a + b
// }

// console.log(nums(4, 2))
// console.log(nums(1, 2))
// A: a is bigger, 6 and b is bigger, 3
// B: a is bigger, undefined and b is bigger, undefined+++++++++++++++++++++++++++++++++++++++
// C: undefined and undefined
// D: SyntaxError

// 96. Какой будет вывод ?
//     class Person {
//         constructor() {
//             this.name = "Lydia"
//         }
//     }

// Person = class AnotherPerson {
//     constructor() {
//         this.name = "Sarah"
//     }
// }

// const member = new Person()
// console.log(member.name)
// A: "Lydia"
// B: "Sarah"+++++++++++++++++++++++++++++++++++++++++++
// C: Error: cannot redeclare Person
// D: SyntaxError

// 97. Какой будет вывод?
// const info = { 
//     [Symbol('a')]: 'b'
// }

// console.log(info)
// console.log(Object.keys(info))
// A: {Symbol('a'): 'b'} and ["{Symbol('a')"]
// B: {} and []
// C: { a: "b" } and ["a"]
// D: {Symbol('a'): 'b'} and []+++++++++++++++++++++++++++++

// 98. Какой будет вывод?
// const getList = ([x, ...y]) => [x, y]
// const getUser = user => { name: user.name, age: user.age }

// const list = [1, 2, 3, 4]
// const user = { name: "Lydia", age: 21 }

// console.log(getList(list))
// console.log(getUser(user))
// A: [1, [2, 3, 4]] and undefined++++++++++++++++++++++++++++++++++++++++++++++++++
// B: [1, [2, 3, 4]] and { name: "Lydia", age: 21 }
// C: [1, 2, 3, 4] and { name: "Lydia", age: 21 }
// D: Error and { name: "Lydia", age: 21 }

// 99. Какой будет вывод?
// const name = "Lydia"

// console.log(name())
// A: SyntaxError
// B: ReferenceError
// C: TypeError
// D: undefined

// Ответ: C
// Переменная name содержит значение строки, которая не является функцией, поэтому не может вызываться.

// Ошибки типа выдаются, когда значение не соответствует ожидаемому типу. JavaScript ожидал, что name будет функцией, так как мы пытаемся вызвать ее. Однако это была строка, поэтому выдается ошибка TypeError: name не является функцией!

// Синтаксические ошибки генерируются, когда вы написали что-то, что не является допустимым JavaScript, например, когда вы написали слово return как retrun. ReferenceErrors генерируется, когда JavaScript не может найти ссылку на значение, к которому вы пытаетесь получить доступ.

// 100. Какое значение будет на выходе?
// 🎉✨ This is my 100th question! ✨🎉

// const output = `${[] && 'Im'}possible!
// You should${'' && `n't`} see a therapist after so much JavaScript lol`
// // A: possible! You should see a therapist after so much JavaScript lol
// // B: Impossible! You should see a therapist after so much JavaScript lol+++++++++++++++++++++++++++++++++++++++++++++++++
// // C: possible! You shouldn't see a therapist after so much JavaScript lol
// // D: Impossible! You shouldn't see a therapist after so much JavaScript lol

// // 101. Какое значение будет на выходе?
// const one = (false || {} || null)//{}
// const two = (null || false || "")//""
// const three = ([] || 0 || true)//[]

// console.log(one, two, three)

// A: false null []
// B: null "" true
// C: {} "" []
// D: null null true

// 102. Какое значение будет на выходе?
// const myPromise = () => Promise.resolve('I have resolved!')

// function firstFunction() {
//     myPromise().then(res => console.log(res))
//     console.log('second')
// }

// async function secondFunction() {
//     console.log(await myPromise())
//     console.log('second')
// }

// firstFunction()
// secondFunction()
// A: I have resolved!, second and I have resolved!, second
// B: second, I have resolved! and second, I have resolved!
// C: I have resolved!, second and second, I have resolved!
// D: second, I have resolved! and I have resolved!, second+++++++++++++++++++++++++

// 103. Какое значение будет на выходе?
// const set = new Set()

// set.add(1)
// set.add("Lydia")
// set.add({ name: "Lydia" })

// for (let item of set) {
//     console.log(item + 2)
// }
// A: 3, NaN, NaN
// B: 3, 7, NaN
// C: 3, Lydia2, [object Object]2+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// D: "12", Lydia2, [object Object]2

// Ответ: C
// Оператор + используется не только для добавления числовых значений, но мы также можем использовать его для объединения строк. Всякий раз, когда движок JavaScript видит, что одно или несколько значений не являются числом, он приводит число к строке.

// Первым является 1, который является числовым значением. 1 + 2 возвращает число 3.

// Тем не менее, вторая строка "Lydia". "Lydia" является строкой, а 2 является числом: 2 приводится к строке. "Lydia" и "2" объединяются, что приводит к результирующей строке "Lydia2".

// {name: "Lydia"} является объектом. Ни число, ни объект не являются строкой, поэтому они приводятся к строке. Всякий раз, когда мы приводим обычный объект, он становится "[object Object]". "[object Object]", объединенный с "2", становится "[object Object]2".

// 104. Чему равно значение?
// Promise.resolve(5)
// A: 5
// B: Promise {<pending>: 5}
// C: Promise {<fulfilled>: 5}+++++++++++++++++++++++++++++++++++
// D: Error

// 105. Чему равно значение ?
// function compareMembers(person1, person2 = person) {
//     if (person1 !== person2) {
//         console.log("Not the same!")
//     } else {
//         console.log("They are the same!")
//     }
// }

// const person = { name: "Lydia" }

// compareMembers(person)
// A: Not the same!
// B: They are the same!+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// C: ReferenceError
// D: SyntaxError

// 106. Чему равно значение?
// const colorConfig = {
//     red: true,
//     blue: false,
//     green: true,
//     black: true,
//     yellow: false,
// }

// const colors = ["pink", "red", "blue"]

// console.log(colorConfig.colors[1])
// A: true
// B: false
// C: undefined
// D: TypeError+++++++++++++++++++++++++++++++++++++++++++++++++

// 107. Чему равно значение?
// console.log('❤️' === '❤️')
// A: true
// B: false
// Под капотом смайлики - это юникоды. Юникод для сердца смайликов "U+2764 U+FE0F". Они всегда одинаковы для одного и того же смайлика, поэтому мы сравниваем две одинаковые строки друг с другом, что возвращает true.

// 108. Какой из этих методов модифицирует исходный массив?
// const emojis = ['✨', '🥑', '😍']

// emojis.map(x => x + '✨')
// emojis.filter(x => x !== '🥑')
// emojis.find(x => x !== '🥑')
// emojis.reduce((acc, cur) => acc + '✨')
// emojis.slice(1, 2, '✨')
// emojis.splice(1, 2, '✨')
// A: All of them
// B: map reduce slice splice
// C: map slice splice
// D: splice+++++++++++++++++++++++++++++++++++++++++++++++

// 109. Какое значение будет на выходе?
// const food = ['🍕', '🍫', '🥑', '🍔']
// const info = { favoriteFood: food[0] }

// info.favoriteFood = '🍝'

// console.log(food)
// A: ['🍕', '🍫', '🥑', '🍔']+++++++++++++++++++++++++++++++++++++
// B: ['🍝', '🍫', '🥑', '🍔']
// C: ['🍝', '🍕', '🍫', '🥑', '🍔']
// D: ReferenceError

// 110. Что делает этот метод?
// JSON.parse()
// A: Разбирает JSON в значение JavaScript+++++++++++++++++++++++++++++++++++++++++++++
// B: Разбирает объект JavaScript в JSON
// C: Разбирает любое значение JavaScript в JSON
// D: Разбирает JSON непосредственно в объект JavaScript

// 111. Какое значение будет на выходе?
// let name = 'Lydia'

// function getName() {
//     console.log(name)
//     let name = 'Sarah'
// }

// getName()
// A: Lydia
// B: Sarah
// C: undefined
// D: ReferenceError++++++++++++++++++++++++++++++++++++++++++

// 112. Какое значение будет на выходе?--------------------------------------------------------
// function* generatorOne() {
//     yield ['a', 'b', 'c'];
// }

// function* generatorTwo() {
//     yield* ['a', 'b', 'c'];
// }

// const one = generatorOne()
// const two = generatorTwo()

// console.log(one.next().value)
// console.log(two.next().value)
// A: a and a
// B: a and undefined
// C: ['a', 'b', 'c'] and a
// D: a and ['a', 'b', 'c']
//Используя ключевое слово yield, мы получаем значения в функции генератора. С помощью ключевого слова yield* мы можем получить значения из другой функции-генератора или итерируемого объекта (например, массива).

// В generatorOne мы получаем весь массив ['a', 'b', 'c'], используя ключевое слово yield. Значение свойства value для объекта, возвращаемого методом next для one (one.next().value), равно всему массиву ['a', 'b', 'c'].

// console.log(one.next().value) // ['a', 'b', 'c']
// console.log(one.next().value) // undefined
// В файле generatorTwo мы используем ключевое слово yield*. Это означает, что первое полученное значение two равно первому полученному значению в итераторе. Итератор - это массив ['a', 'b', 'c']. Первым полученным значением является a, поэтому в первый раз, когда мы вызываем two.next().value, возвращается a.

// console.log(two.next().value) // 'a'
// console.log(two.next().value) // 'b'
// console.log(two.next().value) // 'c'
// console.log(two.next().value) // undefined

// 113. Какое значение будет на выходе?
// console.log(`${(x => x)('I love')} to program`)
// A: I love to program++++++++++++++++++++++++++++++++++++++++
// B: undefined to program
// C: ${(x => x)('I love') to program
// D: TypeError

// 114. Что произойдет?---------------------------------------------
// let config = {
//     alert: setInterval(() => {
//     console.log('Alert!')
//   }, 1000)
// }

// config = null
// A: обратный вызов setInterval не будет вызван
// B: обратный вызов setInterval будет вызван один раз
// C: обратный вызов setInterval будет вызываться каждую секунду
// D: мы никогда не вызовем config.alert(), т.к. config равно null

// 115. Какие методы вернут значение 'Hello world!'?
// const myMap = new Map()
// const myFunc = () => 'greeting'

// myMap.set(myFunc, 'Hello world!')

// //1
// myMap.get('greeting')
// //2
// myMap.get(myFunc)
// //3
// myMap.get(() => 'greeting')
// A: 1
// B: 2++++++++++++++++++++++++++++++++++++++++++++++++++
// C: 2 и 3
// D: Каждый из них

// 116. Какое значение будет на выходе?
// const person = {
//     name: "Lydia",
//     age: 21
// }

// const changeAge = (x = { ...person }) => x.age += 1
// const changeAgeAndName = (x = { ...person }) => {
//     x.age += 1
//     x.name = "Sarah"
// }

// changeAge(person)
// changeAgeAndName()

// console.log(person)
// A: {name: "Sarah", age: 22}
// B: {name: "Sarah", age: 23}
// C: {name: "Lydia", age: 22}++++++++++++++++++++++++++++++++++++
// D: {name: "Lydia", age: 23}

// 117. Какой из следующих наборов параметров вернет 6?
// function sumValues(x, y, z) {
// 	return x + y + z;
// }
// A: sumValues([...1, 2, 3])
// B: sumValues([...[1, 2, 3]])
// C: sumValues(...[1, 2, 3])++++++++++++++++++++++++++++++++++
// D: sumValues([1, 2, 3])

// 118. Что будет на выходе?
// let num = 1;
// const list = ["🥳", "🤠", "🥰", "🤪"];

// console.log(list[(num += 1)]);
// A: 🤠
// B: 🥰++++++++++++++++++++++++++++++++
// C: SyntaxError
// D: ReferenceError

// 119. Что будет на выходе?
// const person = {
// 	firstName: "Lydia",
// 	lastName: "Hallie",
// 	pet: {
// 		name: "Mara",
// 		breed: "Dutch Tulip Hound"
// 	},
// 	getFullName() {
// 		return `${this.firstName} ${this.lastName}`;
// 	}
// };

// console.log(person.pet?.name);
// console.log(person.pet?.family?.name);
// console.log(person.getFullName?.());
// console.log(member.getLastName?.());
// A: undefined undefined undefined undefined
// B: Mara undefined Lydia Hallie undefined+++++++++++++++++++++++++++++++++++++++++++++++++++++
// C: Mara null Lydia Hallie null
// D: null ReferenceError null ReferenceError

// 120. Что будет на выходе?
// const groceries = ["banana", "apple", "peanuts"];

// if (groceries.indexOf("banana")) {
//     console.log("We have to buy bananas!");
// } else {
//     console.log(`We don't have to buy bananas!`);
// }
// A: We have to buy bananas!
// B: We don't have to buy bananas+++++++++++++++++++++++++++++++++++++
// C: undefined
// D: 1

// 121. Что будет на выходе?----------------------------------
// const config = {
//     languages: [],
//     set language(lang) {
//         return this.languages.push(lang);
//     }
// };

// console.log(config.language);
// A: function language(lang) { this.languages.push(lang }
// B: 0
// C: []
// D: undefined++++++++++++++++++++++++++++++++++++++++++++++++++

// 122. Что будет на выходе?
// const name = "Lydia Hallie";

// console.log(!typeof name === "object");
// console.log(!typeof name === "string");
// // A: false true
// // B: true false
// // C: false false+++++++++++++++++++++++++++++++++++
// // D: true true

// // 123. Что будет на выходе?
// const add = x => y => z => {
//     console.log(x, y, z);
//     return x + y + z;
// };

// add(4)(5)(6);
// // A: 4 5 6++++++++++++++++++++++++++++++++++++++++++++
// B: 6 5 4
// C: 4 function function
// D: undefined undefined 6

// 124. Что будет на выходе?
// async function* range(start, end) {
//     for (let i = start; i <= end; i++) {
//         yield Promise.resolve(i);
//     }
// }

// (async () => {
//     const gen = range(1, 3);
//     for await (const item of gen) {
//         console.log(item);
//     }
// })();
// A: Promise {1} Promise {2} Promise {3}
// B: Promise {<pending>} Promise {<pending>} Promise {<pending>}
// C: 1 2 3++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// D: undefined undefined undefined

// 125. Что будет на выходе?
// const myFunc = ({ x, y, z }) => {
//     console.log(x, y, z);
// };

// myFunc(1, 2, 3);
// A: 1 2 3
// B: {1: 1} {2: 2} {3: 3}
// C: { 1: undefined } undefined undefined
// D: undefined undefined undefined++++++++++++++++++++++++++

// 126. Что будет на выходе?
// function getFine(speed, amount) {
//     const formattedSpeed = new Intl.NumberFormat({
//         'en-US',
//     { style: 'unit', unit: 'mile-per-hour' }
//   }).format(speed)

// const formattedAmount = new Intl.NumberFormat({
//     'en-US',
//     { style: 'currency', currency: 'USD' }
//   }).format(amount)

// return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`
// }

// console.log(getFine(130, 300))
// A: The driver drove 130 and has to pay 300
// B: The driver drove 130 mph and has to pay $300.00++++++++++++++++++++++++++++++++++++
// C: The driver drove undefined and has to pay undefined
// D: The driver drove 130.00 and has to pay 300.00

// 127. Что будет на выходе?
// const spookyItems = ["👻", "🎃", "🕸"];
// ({ item: spookyItems[3] } = { item: "💀" });

// console.log(spookyItems);
// // A: ["👻", "🎃", "🕸"]
// // B: ["👻", "🎃", "🕸", "💀"]+++++++++++++++++++++++++++++++++++++++++++++++
// // C: ["👻", "🎃", "🕸", { item: "💀" }]
// // D: ["👻", "🎃", "🕸", "[object Object]"]

// 128. Что будет на выходе?
// const name = "Lydia Hallie";
// const age = 21;

// console.log(Number.isNaN(name));
// console.log(Number.isNaN(age));

// console.log(isNaN(name));
// console.log(isNaN(age));
// // A: true false true false
// // B: true false false false
// // C: false false true false++++++++++++++++++++++
// // D: false true false true

// //NaN?
// console.log(Number.isNaN("hjhjkh"))//false
// console.log(Number.isNaN(11))//false
// console.log(Number.isNaN(NaN))//true


// //число?
// console.log(isNaN("hjhjkh"))//true
// console.log(isNaN(11))//false
// console.log(isNaN(NaN))//true

// 129. Что будет на выходе?
// const randomValue = 21;

// function getInfo() {
// 	console.log(typeof randomValue);
// 	const randomValue = "Lydia Hallie";
// }

// getInfo();
// A: "number"
// B: "string"
// C: undefined
// D: ReferenceError++++++++++++++++++++++++++++++++
// 130. Что будет на выходе?
// const myPromise = Promise.resolve("Woah some cool data");

// (async () => {
// 	try {
// 		console.log(await myPromise);
// 	} catch {
// 		throw new Error(`Oops didn't work`);
// 	} finally {
// 		console.log("Oh finally!");
// 	}
// })();
// A: Woah some cool data
// B: Oh finally!
// C: Woah some cool data Oh finally!+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// D: Oops didn't work Oh finally!

// 131. Что будет на выходе?
// const emojis = ["🥑", ["✨", "✨", ["🍕", "🍕"]]];

// console.log(emojis.flat(1));
// A: ['🥑', ['✨', '✨', ['🍕', '🍕']]]
// B: ['🥑', '✨', '✨', ['🍕', '🍕']]++++++++++++++++++++++++++++++++++++++
// C: ['🥑', ['✨', '✨', '🍕', '🍕']]
// D: ['🥑', '✨', '✨', '🍕', '🍕']

// 132. Что будет на выходе?
// class Counter {
//     constructor() {
//         this.count = 0;
//     }

//     increment() {
//         this.count++;
//     }
// }

// const counterOne = new Counter();
// counterOne.increment();
// counterOne.increment();

// const counterTwo = counterOne;
// counterTwo.increment();

// console.log(counterOne.count);
// A: 0
// B: 1
// C: 2
// D: 3++++++++++++++++++++++++++++++++

// 133. Что будет на выходе ?
// const myPromise = Promise.resolve(Promise.resolve('Promise!'));

// function funcOne() {
//     myPromise.then(res => res).then(res => console.log(res));
//     setTimeout(() => console.log('Timeout!', 0));
//     console.log('Last line!');
// }

// async function funcTwo() {
//     const res = await myPromise;
//     console.log(await res);
//     setTimeout(() => console.log('Timeout!', 0));
//     console.log('Last line!');
// }

// funcOne();
// funcTwo();
// A: Promise! Last line! Promise! Last line! Last line! Promise!
// B: Last line! Timeout! Promise! Last line! Timeout! Promise!
// C: Promise! Last line! Last line! Promise! Timeout! Timeout!
// D: Last line! Promise! Promise! Last line! Timeout! Timeout!++++++++++++++++++++++++++++

// Ответ: D
// Сначала мы вызываем функцию funcOne. В первой строке funcOne происходит вызов обещания myPromise, которое является асинхронной операцией. Пока движок занят обработкой обещания, он продолжает выполнение функции funcOne. Следующая строка является асинхронной функцией setTimeout, поэтому её обратный вызов будет отправлен в Web API. (см. мою статью о цикле событий здесь.)

// Обещание, как и таймер, является асинхронной операцией, поэтому функция продолжит выполняться несмотря на обработку обещания и обратного вызова setTimeout. Выходит так, что Last line! попадет в консоль первой, т.к. не является асинхронной операцией. Далее, в следующей строке funcOne, обещание будет выполнено и Promise! выводится в консоль. Однако, т.к. далее мы вызываем funcTwo(), стэк вызывов не будет пустым, из-за чего обратный вызов функции setTimeout пока не будет добавлен в стэк вызовов.

// В первой строке funcTwo мы ожидаем выполнения обещания myPromise. С помощью ключевого слова await мы приостанавливаем выполнение функции пока обещание не будет выполнено (или отклонено). Затем выводим в консоль ожидаемое значение res (т.к. предыдущее обещание вернуло обещание). После чего в консоль попадает Promise!.

// Следующая строка является асинхронной функцией setTimeout, которая отправляет обратный вызов в Web API.

// Мы перешли к следующей строке функции funcTwo которая выводит в консоль Last line!. Теперь, когда стэк вызовов извлечен из funcTwo, он становится пустым. Обратные вызовы, которые ожидали очереди (() => console.log("Timeout!") из funcOne, и () => console.log("Timeout!") из funcTwo) добавлены в стэк вызовов один за другим. Первый вызов выведет в консоль Timeout! и будет извлечен из стэка. Следующий вызов также выведет Timeout! и тоже будет извлечен из стэка вызовов. Лог будет равен Last line! Promise! Promise! Last line! Timeout! Timeout!

// 134. Как мы можем вызвать функцию sum в sum.js из index.js?--------------------------------------------
// sum.js
// export default function sum(x) {
//     return x + x;
// }

// // index.js
// import * as sum from './sum';
// A: sum(4)
// B: sum.sum(4)
// C: sum.default(4)++++++++++++++++++++++++++++++++++++
// D: Нельзя импортировать значения по умолчанию используя *, только именованные экспорты

// Используя звездочку *, мы импортируем все экспортируемые значения из файла, включая именнованные экспорты и экспорты по умолчанию. Если бы у нас был следующий файл:

// // info.js
// export const name = 'Lydia';
// export const age = 21;
// export default 'I love JavaScript';

// // index.js
// import * as info from './info';
// console.log(info);
// В лог попадёт следующее:

// {
//   default: "I love JavaScript",
//   name: "Lydia",
//   age: 21
// }
// Для примера sum это означает, что импортированное значение sum будет таким:

// { default: function sum(x) { return x + x } }
// Следовательно, мы можем вызвать эту функцию используя sum.default

// 135. Что будет на выходе?-----------------------------------------------------------------------
// const handler = {
//     set: () => console.log('Added a new property!'),
//     get: () => console.log('Accessed a property!'),
// };

// const person = new Proxy({}, handler);

// person.name = 'Lydia';
// person.name;
// A: Added a new property!
// B: Accessed a property!
// C: Added a new property! Accessed a property!
// D: В лог ничего не попадёт

// Ответ: C
// C помощью Proxy мы можем добавить собственное поведению объекту, которое мы передаем вторым аргументом. В нашем случае мы передаем объект handler который содержит свойства: set и get. set вызывается каждый раз когда мы устанавливаем значения свойств, get же вызывается всякий раз когда мы получаем значения свойств.

// Первый аргумент — пустой объект {}, который является значением person. Для него будет добавлено собственное поведение, описанное в объекте handler. При добавлении значения для объекта person будет вызвано свойство set. При запросе к значению person вызовется свойство get.

// Сначала мы устанавливаем новое свойство name для объекта Proxy (person.name = "Lydia"). Вызывается set и в лог попадает "Added a new property!".

// Затем мы обращаемся к значению Proxy-объекта. Вызывается свойство get объекта handler. "Accessed a property!" попадает в лог.

// 136. Какое из перечисленных действий может модифицировать объект person?
// const person = { name: 'Lydia Hallie' };

// Object.seal(person);
// A: person.name = "Evan Bacon"++++++++++++++++++++++++++++++++
// B: person.age = 21
// C: delete person.name
// D: Object.assign(person, { age: 21 })

// 137. Какое из перечисленных действий может модифицировать объект person?
// const person = {
//   name: 'Lydia Hallie',
//   address: {
//     street: '100 Main St',
//   },
// };

// Object.freeze(person);
// A: person.name = "Evan Bacon"
// B: delete person.address
// C: person.address.street = "101 Main St"+++++++++++++++++++++++++++++++++
// D: person.pet = { name: "Mara" }

// Ответ: C
// С помощью метода Object.freeze мы можем заморозить объект. Свойства не могут быть добавлены, изменены или удалены.

// Однако, это неглубоко замораживает объект. Замораживаются только непосредственные свойства объекта. Если свойством является другой объект(в нашем примере address), свойства этого объекта не замораживаются и могут быть изменены.