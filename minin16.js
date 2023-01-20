//Уникальность всех символов в строке.

// function isUniqChar(string) {
//     return string.length === new Set(string).size;
// }

// console.log(isUniqChar("aAbcdef"))//true
// console.log(isUniqChar("aaaaasdadfgdgfgdaa"))//false

// //[[12], [232, 43], [45, 6, [45, 3]]  ->  [12,232,43,45,6,45,3]

// function flat(arr) {
//     let ar = [];
//     arr.forEach(element => {
//         if(Array.isArray(element)) {
//             ar = [
//                 ...ar, ...flat(element)
//             ];
//         } else {
//             ar.push(element);
//         }
//     });
//     return ar;
// }

// console.log(flat([[12], [232, 43], [45, 6, [45, 3]]]))



// //"abcdabc" => "abcd"
// function uniqString(string) {
//     // let arr = [];
//     // for(let i = 0; i < string.length; i++) {
//     //     if(arr[string[i]]) {
//     //         continue
//     //     } else {
//     //         arr.push(string[i]);
//     //     }
//     // }
//     // return arr.join("");
//     return [...new Set(string)].join("");
// }

// console.log(uniqString("abcd"));


// "aaa", "bb", "cc", "bb", "aa", "bb" => "bb"

// function returnString(arr) {
//     let result = {};

//     arr.forEach(element => {
//         if(!result[element]) {
//             result[element] = 1;
//         } else {
//             result[element]++;
//         }
//     })
//     return Object
//             .entries(result)
//             .sort((a,b) => b[1] - a[1])[0][0];
// }

// console.log(returnString(["aaa", "bbb", "cc", "bbb", "aaa", "bbb"]));

//( [1,2,3],[3,2,1] )//true
//( [1,2,2],[3,2,1] )//false

// function match(arr1, arr2) {
//     for (let i = 0; i < arr2.length; i++) {
//         if (arr1.indexOf(arr2[i]) === -1) {
//             return false;
//         }
//         else {
//             const indx = arr1.indexOf(arr2[i])
//             arr1.splice(indx, indx+1);
//         }
//     }
//     return true;
// }

// console.log(match([1,2,3], [3,2,1]));
// console.log(match([1,2,2],[3,2,1]));
// console.log(match([1,2,4],[3,2,1]));


// console.log([1,2,2].indexOf(3));

//["abcd", "cdba"] ==> true
//["as","fg"] ==> false

//…or create a new repository on the command line

// echo "# codewars" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/AlexZdesev90/codewars.git
// git push -u origin main

// …or push an existing repository from the command line

// git remote add origin https://github.com/AlexZdesev90/codewars.git
// git branch -M main
// git push -u origin main

// function isAnagrams(arr) {
//     const example = arr[0]
//         .split("")
//         .sort()
//         .join("");

//     return arr
//         .map(element => element
//             .split("")
//             .sort()
//             .join(""))
//             .every(item => item === example);
// }

// console.log(isAnagrams(["abcd", "cdba"]));
// console.log(isAnagrams(["as","fg"]));
// console.log(isAnagrams(["ast","tas", "sat"]));

// бинарный поиск

function binarySearch(arr, element) {
    //[1,2,3,4,5,6,7,8]
    let start = 0;
    let end = arr.length - 1;
    let middle;
    if (element < arr[start] || element > arr[end]) {
        return -1;
    }
    while (start <= end) {

        middle = Math.floor((start + end) / 2);
        if (element > arr[middle]) {
            start = middle + 1;
        } else if (element < arr[middle]) {
            end = middle - 1;
        } else {
            return middle;
        }
    }
    return middle;
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 7))
// console.log(Math.floor((2 + 5) / 2))

function isBalanced(string) {
    const check = {
        "}": "{",
        ")": "(",
        "]": "[",
        ">": "<",
    }

    const start = "{(<["
    const end = "})>]"

    let res = [];

    for (let i = 0; i < string.length; i++) {
        if (start.includes(string[i])) {
            res.push(string[i]);
        } else if (end.includes(string[i])) {
            let last = res.pop()
            if (check[string[i]] !== last) {
                return false;
            }
        }
    }
    return !res.length;
}

console.log(isBalanced("(<>)"))
console.log(isBalanced("(<>))"))

const ob = {
    name: "Al",
    age: 35,
    52: "Pdfsfd"
}

console.log(ob[52])


const arr1 = [1, [4, 5], 54, [45454], [545454, [1, [98]]]]

function recurse(arr) {
    let result = [];

    arr.filter(
        element => Array.isArray(element)
            ? result = [...result, ...recurse(element)]
            : result.push(element)
    );

    return result;
}

console.log(recurse(arr1));


//рекурсия
//n**x
function pow(n, x) {
    if (x === 0) return 1;

    return n * pow(n, x - 1)
}

console.log(pow(5, 3));

function x(u) {
    if (u.left) left.push(u.left)
}

document.body.id = 1;
console.log(document.body.id === 1)

function add(x, y) {
    if (typeof x === undefined) return add
    if (!y) {
        return function anonim(c) {
            if (typeof c === undefined) return anonim
            return x + c
        }
    }
    return x + y;
}

// console.log(add(20, 1))
// console.log(add(20)(232))
// console.log(add(20)()(242))
// console.log(add()(20)()(252))

let cx = undefined;
console.log(typeof (typeof cx));



function groupBy(arr, f) {
    // let map = {};
    // for(let i = 0; i < arr.length; i++) {
    //     let curr = arr[i];
    //     let res = typeof f === "function" ? f(curr) : curr[f];
    //     if(!map[res]) {
    //         map[res] = []
    //     }
    //     map[res].push(curr);
    // }
    // return map;

    return arr.reduce((acc, curr) => {
        let res = typeof f === "function" ? f(curr) : curr[f];
        if (!acc[res]) acc[res] = [];
        acc[res].push(curr);
        return acc;
    }, {})
}

console.log(groupBy([6.1, 4.2, 6.2], Math.floor)) //=> {4 : [ 4.2], 6: [6.1, 6.2]}
console.log(groupBy(["dfdfd", "fdfdfdfdfdfd"], "length")) //=> {5 : ["dfdfd"], 12: ["fdfdfdfdfdfd"]}