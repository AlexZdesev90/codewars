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

function match(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            return false;
        }
        else {
            const indx = arr1.indexOf(arr2[i])
            arr1.splice(indx, indx+1);
        }
    }
    return true;
}

console.log(match([1,2,3], [3,2,1]));
console.log(match([1,2,2],[3,2,1]));
console.log(match([1,2,4],[3,2,1]));


console.log([1,2,2].indexOf(3));



//"abcd", "cdba" ==> true
//"as" => "fg" ==> false


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