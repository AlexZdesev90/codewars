const string = "Javascript 2.0";
const string2 = "Javascript";
console.log(/\d/i.test(string))//true
console.log(/\d/i.test(string2))//false

function match(str) {
    return str.match(/\D/ig).join("");
}

console.log(match(string))

// Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярку, которая найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'. Показать решение.

function match(str) {
    return str.match(/a[a-z]{1}b/ig);
}

console.log(match('ahb acb aeb aeeb adcb axeb'))

// Дана строка 'aba aca aea abba adca abea'. Напишите регулярку, которая найдет строки abba adca abea по шаблону: буква 'a', 2 любых символа, буква 'a'. Показать решение.

function match2(str) {
    return str.match(/a[a-z]{2}b/ig);
}

console.log(match2('ahb acb aeb aeeb adcb axeb'))

// Дана строка 'aba aca aea abba adca abea'. Напишите регулярку, которая найдет строки abba и abea, не захватив adca. Показать решение.

function match3(str) {
    return str.match(/ab[be]a/ig);
}

console.log(match3('aba aca aea abba adca abea'))

// Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'. Показать решение.
function match4(str) {
    return str.match(/ab{1,}a/ig);
}

console.log(match4('aa aba abba abbba abca abea'))

// Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз (в том числе ниодного раза), буква 'a'. Показать решение.

function match5(str) {
    return str.match(/ab{0,}a/ig);
}

console.log(match5('aa aba abba abbba abca abea'))

// Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba по шаблону: буква 'a', буква 'b' один раз или ниодного, буква 'a'. Показать решение.

function match6(str) {
    return str.match(/ab{0,1}a/ig);
}

console.log(match6('aa aba abba abbba abca abea'))

// Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aa, aba, abba, abbba, не захватив abca abea. Показать решение.
function match7(str) {
    return str.match(/ab{0,3}a/ig);
}

console.log(match7('aa aba abba abbba abca abea'))

// Дана строка 'ab abab abab abababab abea'. Напишите регулярку, которая найдет строки по шаблону: строка 'ab' повторяется 1 или более раз. Показать решение.

function match8(str) {
    return str.match(/(ab){1,}/ig);
}

console.log(match8('ab abab abab abababab abea'))

// Дана строка 'a.a aba aea'. Напишите регулярку, которая найдет строку a.a, не захватив остальные.
function match9(str) {
    return str.match(/a\.a/ig);
}

console.log(match9('a.a aba aea'))

// Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные.
function match10(str) {
    return str.match(/2\+3/ig);
}

console.log(match10('2+3 223 2223'))

// Дана строка '23 2+3 2++3 2+++3 345 567'. Напишите регулярку, которая найдет строки 2+3, 2++3, 2+++3, не захватив остальные (+ может быть любое количество)

function match11(str) {
    return str.match(/2\++3/ig);
}

console.log(match11('23 2+3 2++3 2+++3 345 567'))

// Дана строка '23 2+3 2++3 2+++3 445 677'. Напишите регулярку, которая найдет строки 23, 2+3, 2++3, 2+++3, не захватив остальные

function match12(str) {
    return str.match(/2\+*3/ig);
}

console.log(match12('23 2+3 2++3 2+++3 445 677'))

// Дана строка '*+ *q+ *qq+ *qqq+ *qqq qqq+'. Напишите регулярку, которая найдет строки *q+, *qq+, *qqq+, не захватив остальные

function match13(str) {
    return str.match(/\*q*\q+\+/ig);
}

console.log(match13('*+ *q+ *qq+ *qqq+ *qqq qqq+'))

//Дана строка 'aba accca azzza wwwwa'. Напишите регулярку, которая найдет все строки по краям которых стоят буквы 'a', и заменит каждую из них на '!'. Между буквами a может быть любой символ (кроме a).

// function match14(str) {
//     return str.match(/^a.+?a$/ig);
// }

// console.log(match14('aba aaa accca azzza wwwwa'))


// // Create a program that will take in a string as input and, if there are duplicates of more than two alphabetical characters in the string, returns the string with all the extra characters in a bracket.
// // For example, the input "aaaabbcdefffffffg" should return "aa[aa]bbcdeff[fffff]g"
// // Please also ensure that the input is a string, and return "Please enter a valid string" if it is not.

// function dplicateBracket(str) {

// }


// Your job is to create a simple password validation function, as seen on many websites.

// The rules for a valid password are as follows:

// There needs to be at least 1 uppercase letter.
// There needs to be at least 1 lowercase letter.
// There needs to be at least 1 number.
// The password needs to be at least 8 characters long.
// You are permitted to use any methods to validate the password.

// function password(str) {
//     // const res1 = str.match(/[a-z]/) || false;
//     // const res2 = str.match(/[A-Z]/) || false;
//     // const res3 = str.match(/\d/) || false;
//     // const res4 = str.length >= 8;
//     // return ( res1 && res2 && res3 && res4 );
//     return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(str);
// }
// const password = str => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(str);

// console.log(/^(?=[O])(?=.*[z]).{3,}$/.test("Ozy"))
// password("fdfs")

// // Examples:
// console.log(password("Abcd1234"));// ===> true
// console.log(password("Abcd123"));// ===> false
// console.log(password("abcd1234"));// ===> false
// console.log(password("AbcdefGhijKlmnoconsole.log(pQRsTuvwxyZ1234567890"));// ===> true
// console.log(password("ABCD1234")); //===> false
// console.log(password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,")); //===> true;
// console.log(password("!@#$%^&*()-_+={}[]|\:;?/>.<,")); //===> false;
// Extra info
// You will only be passed strings.
// The string can contain any standard keyboard character.
// Accepted strings can be any length, as long as they are 8 characters or more.

// Выделить тегом <strong> повторяющиеся слова.

// Примеры:
// Тhis is a test=> this is a test
// Тhis is is a test => this is <strong>is</strong> a test

// function strong(str) {
//     let tmp = [];
//     return str.split(" ")
//     .map(el => {
//         if(!tmp.includes(el)) {
//             tmp.push(el);
//             return el;
//         } else {
//             return el = `<string>${el}</string>`;
//         }
//     }).join(" ");

// }

// console.log(strong("Тhis is is a test"));
// console.log(strong("a is a ads test"));

// function http(str){
//     return /^http:|https:\/\/[^\s]{3,}\/$/.test(str);
// }

// console.log(http("http://example.com/")) //— Да
// console.log(http("https://hyu/")) //— Да
// console.log(http("example.com")) //— Нет
// console.log(http("кремль.рф")) //— Нет :(



