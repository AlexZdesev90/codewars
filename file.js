// //hello!

// // function Stack() {
// //     this.arr = [];
// //     this.count = 0

// //     this.add = function (value) {
// //         this.arr.push(value);
// //         this.count++;
// //     }

// //     this.getElement = function () {
// //         this.arr.pop();
// //         this.count--;
// //     }

// //     this.arrayLenght = function () {
// //         return this.count;
// //     }

// //     this.print = function () {
// //         return this.arr;
// //     }

// // }

// // const stack = new Stack();
// // stack.add(12)
// // stack.add("second")
// // console.log(stack.arrayLenght())
// // console.log(stack.print())
// // console.log(stack.getElement())
// // console.log(stack.print())


// // class Queue {
// //     #queue = [];

// //     enqueue(el) {
// //         this.#queue.push(el);
// //     }

// //     dequeue() {
// //         this.#queue.shift();
// //     }

// //     print() {
// //         return this.#queue;
// //     }

// // }


// // class Node {
// //     constructor(value, next = null) {
// //         this.value = value;
// //         this.next = next;
// //     }
// // }

// // class LinkedList {
// //     constructor() {
// //         this.head = null;
// //         this.tail = null;
// //     }

// //     addToEnd(value) {
// //         const node = new Node(value);

// //         if (this.tail) {
// //             this.tail.next = node;
// //         }
// //         if(!this.head) {
// //             this.head = node
// //         }

// //         this.tail = node;
// //     }

// //     addToStart(value) {
// //         const node = new Node(value, this.head);

// //         if(!this.tail) {
// //             this.tail = node
// //         }
// //         this.head = node
// //     }

// //     appendAfter(after, x) {
// //         const found = this.find(after);
// //         if(!found) {
// //             return "not found"
// //         }
// //         found.next = new Node(x, found.next)
// //     }

// //     toArray () {
// //         let arr = []
// //         let current = this.head;
// //         while(current) {
// //             arr.push(current.value);
// //             current = current.next
// //         }
// //         return arr
// //     }

// //     find(value){
// //         let current = this.head
// //         while (current) {
// //             if(current.value === value) {
// //                 return current
// //             }
// //             current = current.next
// //         }
// //     }

// // }


// // // const link = new LinkedList();
// // // link.addToEnd("3")
// // // link.addToStart("2")
// // // link.addToStart("1")
// // // console.log(link.find("2"))
// // // console.log(link.find("4"))
// // // link.appendAfter("1", "1.1")

// // // console.log(link.toArray())



// // class Set {
// //     #array = []
// //     add(value) {
// //         if(this.#array.includes(value)) {
// //             return this
// //         }
// //         this.#array.push(value);
// //         return this
// //     }

// //     size(){
// //         return this.#array.length;
// //     }

// //     has(value){
// //         return this.#array.includes(value)
// //     }

// //     print(){
// //         return this.#array
// //     }
// // }

// // const set = new Set()
// // set.add(1).add(2).add(2).add(3)
// // console.log(set.has(2))
// // console.log(set.has(1023242))
// // console.log(set.size())
// // console.log(set.print())


// ///////////////////////////////////////////////////////////////////




// // function HashTable (size = 13) {
// //     const _store = [];
// //     const _size = size;

// //     function hash(string){
// //         let res = 0;
// //         for (let i = 0; i < string.length; i++) {
// //             res += string.charCodeAt(i) * (i+1);
// //         }
// //         return res % 13

// //     }

// //     function findMatchingIndex(arr, key) {
// //         for(let k = 0; k < arr.length; k++) {
// //             if(arr[k][0] === key) return k;
// //         }
// //     }

// //     return {
// //         setElement(key, value) {
// //             const i = hash(key);
// //             if(!_store[i] ) {
// //                 _store[i] = [
// //                     [key, value]
// //                 ];
// //             }
// //             else {
// //                 const arr = _store[i]
// //                 const matchingIndex = findMatchingIndex(arr, key)

// //                 if(matchingIndex) {
// //                     arr[matchingIndex] = [key, value]
// //                     return
// //                 }

// //                 arr.push([key, value])
// //             }
// //         },
// //         getElement(key) {
// //             const i = hash(key);
// //             if(_store[i]){
// //                 const arr = _store[i]
// //                 const matchingIndex = findMatchingIndex(arr, key);
// //                 if(matchingIndex) {
// //                     return arr[matchingIndex][1]
// //                 }
// //             }
// //         },
// //         dump() {
// //             return _store;
// //         }
// //     }
// // }

// // const rr = new HashTable();
// // rr.setElement("Ma", "898-0f-54")
// // rr.setElement("Iko", "534-52-089")
// // rr.setElement("rerererew", "534-52-089")
// // rr.setElement("trtre", "534-52-089")
// // rr.setElement("reryeyeyeyeeкукуrerew", "534-52-089")
// // rr.setElement("34343rwwrwerwtwt", "534-52-089")

// // console.log(rr.getElement("Ma"))
// // // console.log(rr.getElement("534-52-089"))
// // // console.log(rr.getElement("534-52-089"))
// // console.log(rr.dump())

// // ///////////////////////////////////////////////

// // function hashhh(string, max) {
// //     let hash = 0
// //     for (let i = 0; i < string.length; i++) {
// //         hash += string.charCodeAt(i)
// //     }
// //     return hash % max
// // }

// // function Hash() {
// //     let storage = []
// //     const storageLimit = 4

// //     this.add = function(key, value) {
// //         let index = hashhh(key, storageLimit)
// //         if (storage[index] === undefined) {
// //             storage[index] = [
// //                 [key, value]
// //             ]
// //         } else {
// //             let inserted = false
// //             for (let i = 0; i < storage[index].len; i++) {
// //                 if (storage[index][i][0] === key) {
// //                     storage[index][i][1] = value
// //                     inserted = true
// //                 }
// //             }
// //             if (inserted === false) {
// //                 storage[index].push([key, value])
// //             }
// //         }
// //     }

// //     this.remove = function(key) {
// //         let index = hashhh(key, storageLimit)
// //         if (storage[index].length === 1 && storage[index][0][0] === key) {
// //             delete storage[index]
// //         } else {
// //             for (let i = 0; i < storage[index]; i++) {
// //                 if (storage[index][i][0] === key) {
// //                     delete storage[index][i]
// //                 }
// //             }
// //         }
// //     }

// //     this.lookup = function(key) {
// //         let index = hashhh(key, storageLimit)
// //         if (storage[index] === undefined) {
// //             return undefined
// //         } else {
// //             for (let i = 0; i < storage[index].length; i++) {
// //                 if (storage[index][i][0] === key) {
// //                     return storage[index][i][1]
// //                 }
// //             }
// //         }
// //     }
// // }

// // class HashTable {
// //     constructor(size) {
// //         this.table = new Array(size);
// //         this.size = size;
// //     }

// //     hash(key) {
// //         let total = 0;
// //         for(let i = 0; i < key.length; i++) {
// //             total += key.charCodeAt(i);
// //         }
// //     }

// //     set(key, value) {
// //         const index = this.hash(key);
// //         if(!this.table[index]) {
// //             this.table[index] = [[key, value]];
// //         }
// //         else {
// //             const sameKeyItem = this.table[index].find(item => item[0] === key);
// //             if(sameKeyItem) {
// //                 sameKeyItem[1] = value;
// //             } else {
// //                 this.table[index].push([key, value])
// //             }
// //         }
// //     }

// //     get(key) {
// //         const index = this.hash(key);
// //         if(this.table[index]) {
// //             const sameKeyItem = this.table[index].find(item => item[0] === key);
// //             if(sameKeyItem) {
// //                 return sameKeyItem[1];
// //             }
// //         }
// //         return undefined;
// //     }

// //     remove(key) {
// //         const index = this.hash(key);
// //         if(this.table[index]) {
// //             const sameKeyItem = this.table[index].find(item => item[0] === key);
// //             if(sameKeyItem) {
// //                 this.table[index]
// //                     .splice(this.table[index]
// //                     .indexOf(sameKeyItem), 1);
// //             }
// //         }
// //     }

// // }
// // let hashT = new HashTable(13);
// // hashT.set("aaaaa", "1");
// // hashT.set("bbbbb", "2");
// // hashT.set("aaaaa", "88888888");
// // hashT.set("ccccc", "3");
// // hashT.remove("ccccc");
// // console.log(hashT.table)
// // console.log("stsring".charCodeAt(2));
// // console.log("stsring".charCodeAt(1));

// // const o = {
// //     name : "All",
// //     say: function() {
// //         setTimeout(() => {console.log(this)}, 1000)
// //     }
// // }

// // o.say()

// // const btn = document.querySelector(".btnbtn");
// //     function print() {
// //         setTimeout(() =>console.log(this));
// //     }
// //     print();

// // btn.addEventListener("click", print);

// // let a = {
// //     name: "AAA",
// //     say: function() {
// //         console.log(this.name)
// //     }
// // }

// // let b = { 
// //     name: "BBB",
// //     say: function() {
// //         console.log(this.name)
// //     }
// // }

// // let bbb = a.say.bind(b)
// // bbb()
// // "use strict"
// // console.log(this)

// // setTimeout(function() {console.log(this)} )


// // function determineTime(durations) {
// //     //have fun with coding ^.^
// //     const hours = durations.map(el => +el.slice(0, 2)).reduce((a, c) => a + c, 0);
// //     const minutes = durations.map(el => +el.slice(3, 5)).reduce((a, c) => a + c, 0);
// //     const seconds = durations.map(el => +el.slice(6, 8)).reduce((a, c) => a + c, 0);
// //     console.log(hours, minutes, seconds);
// //     if (hours > 24) {
// //         return false;
// //     }
// //     if(hours === 24 && (minutes > 0 || seconds > 0) ) {
// //         return false;
// //     }
// //     return true;
// // }

// // console.log(determineTime(["10:59:03"]))

// // Kata.getMiddle("test") should return "es"

// // Kata.getMiddle("testing") should return "t"

// // Kata.getMiddle("middle") should return "dd"

// // Kata.getMiddle("A") should return "A"


// // function getMiddle(s) {
//     // const l = s.length;
//     // const middleIndex = Math.floor((l - 1) / 2);
//     // if(l === 1) return s;
//     // if(l % 2 === 0){
//     //     // return s[middleIndex] + s[middleIndex + 1]
//     //     return
//     // } else{

//     //     return s[middleIndex]
//     // }

// //     return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// // }

// // console.log(getMiddle("test"))//should return "es"

// // console.log(getMiddle("testing"))// should return "t"

// // // console.log(getMiddle("middle")) //should return "dd"

// // console.log(getMiddle("A"))// should return "A"

// // var Singleton = function () {
// //     if (Singleton.x) {
// //         return Singleton.x;
// //     }

// //     Singleton.x = this;
// // };

// // class A {
// //     constructor(){
// //         return A.x = A.x 
// //         ? A.x 
// //         : this
// //     }
// // }

// // let a = new A()
// // a.test = 1
// // let b = new A()
// // console.log(b.test)


// class Employee {
//     currentYear = new Date().getFullYear();
//     constructor(birthdayYear){
//         this.old = this.currentYear - birthdayYear;
//     }
// }

// class Developer extends Employee {
//     constructor(name, birthdayYear){
//         super(birthdayYear)
//         this.name = name;
//     }
//     static x = 1000
//     say(){
//         return `Hi, my Name is ${this.name}`
//     }
// }

// const me = new Employee(1990);
// console.log(me.old)
// console.log(new Developer("alex").name)
// console.log(new Developer("alex", 2000).old)
// console.log(new Developer("alex", 2000).constructor === Developer)//true
// console.log(new Developer("alex", 2000).x)//true
// console.log(new Developer("alex", 2000).constructor.x)//true
// console.log(new Developer("alex", 2000).__proto__ === Developer.prototype)//true
// console.log(Developer.prototype)

// function x (){}

// console.log(x.prototype ===  Function())

// function fil(arr, n) {
//     const store = {}
//     return arr.filter(el => (store[el] = store[el] + 1 || 1) <= n)
// }

// console.log(fil([1, 2, 3, 1, 1, 1], 2))

// //friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// function friend(friends) {
//     return friends.filter(el => el.length === 4);
// }

// function printerError(s) {
//     let rule = "abcdefghigklm";
//     let arr2 = s.split("").filter(x => !rule.includes(x)).length;
//     return `${arr2}/${s.length}`
// }

// console.log(printerError("abdfxx"))

// function countSmileys(arr) {
//     const valid = [":)", ";)", ":-)", ";-)", ":~)",";~)", ";D", ":D", ":-D",";-D", ";~D", ":~D"];
//     if (arr.length === 0) {
//         return 0;
//     }
//     if (!Array.isArray(arr)) return;
//     return arr.filter(el => valid.includes(el)).length;
// }

// console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
// console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;
// console.log(countSmileys([":~>" , ";~D" , ":-(" , ":~>" , ":~D" , ":~(" , ";o>"]));

// function countS(arr) {
//     return arr.filter(el => /^[:;][-~]{0,1}[)D]$/.test(el)).length;
// }
// console.log("-----------------")
// console.log(countS([':)', ';(', ';}', ':-D']));       // should return 2;
// console.log(countS([';D', ':-(', ':-)', ';~)']));     // should return 3;
// console.log(countS([';]', ':[', ';*', ':$', ';-D'])); // should return 1;
// console.log(countS([":~>" , ";~D" , ":-(" , ":~>" , ":~D" , ":~(" , ";o>"]));


// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// function arrayDiff(arr1, arr2) {
//     return arr1.filter(el => !arr2.includes(el));
// }

// console.log(arrayDiff([1, 2, 2, 2, 3], [2])) //== [1,3]

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// function findUniq(arr) {
//     return arr.find((el, i, rr) => rr.indexOf(el) === rr.lastIndexOf(el))
// }

// console.log(findUniq([1, 1, 1, 2, 1, 1]))// === 2
// console.log(findUniq([0, 0, 0.55, 0, 0])) //=== 0.55

// var countSheep = function (num){
//     let res = ``;
//     for(let i = 1; i <= num; i++){
//     res += `${i} sheep...`;
// }
// return res;
// }

// var countSheep = (num) => [...new Array(num)].map((_,i)=> i+1 + " sheep...") .join(" ")
// var countSheep = length => Array.from({ length }, (_, i) => ++i + ' sheep...').join('')
// //const countSheep = length => Array.from({ length }, (_, i) => ++i + ' sheep...').join('')

// console.log(countSheep(3))

// var scores = ["rock", "paper", "scissors"];
// const rps = (playerOne, playerTwo) => {
//   var scoreOne = scores.indexOf(playerOne);
//   var scoreTwo = scores.indexOf(playerTwo);
//   switch ((scoreOne - scoreTwo + 3) % 3){
//     case 0:
//       return "Draw!";
//     case 1:
//       return "Player 1 won!";
//     case 2:
//       return "Player 2 won!";
//   }
// };

//switch (p1 + p2) {
//     case "rockscissors":
//     case "scissorspaper":
//     case "paperrock":
//       return "Player 1 won!";
//     case "scissorsrock":
//     case "paperscissors":
//     case "rockpaper":
//       return "Player 2 won!";
//     case "paperpaper":
//     case "scissorsscissors":
//     case "rockrock":
//       return "Draw!";
//   }

// function MyNumberType(n) {
//     this.number = n;
// }

// MyNumberType.prototype.valueOf = function () {
//     return this.number;
// };

// const object1 = new MyNumberType(4);

// console.log(object1 + 3);
  // Expected output: 7
console.log("1")