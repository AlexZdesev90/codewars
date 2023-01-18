// // function mult(x) {
// //     return x * x;
// // }

// // function s(url) {
// //     return new Promise((resolve, reject) => {

// //         let xhr = new XMLHttpRequest();
// //         xhr.open("GET", url);

// //         xhr.responseType = 'json';

// //         xhr.onload = () => {
// //             if(xhr.status > 400) {
// //                 reject(xhr.response);
// //             } else {
// //                 resolve(xhr.response);
// //             }
// //         };


// //         xhr.onerror = () => reject(xhr.response);

// //         xhr.send();
// //     })
// // }

// // s('https://jsonplaceholder.typicode.com/todos/1').then(r => console.dir(r.title))


// // function p(url, body = null) {
// //     return new Promise((resolve, reject) => {

// //         let xhr = new XMLHttpRequest();

// //         xhr.open("POST", url);

// //         xhr.responseType = 'json';

// //         xhr.setRequestHeader("Content-Type", "application/json")

// //         xhr.onload = () => {
// //             if(xhr.status >= 400) {
// //                 reject(xhr.response);
// //             } else {
// //                 resolve(xhr.response);
// //             }
// //         };

// //         xhr.onerror = () => reject(xhr.response);

// //         xhr.send(JSON.stringify(body));
// //     })
// // }

const obj = { a: "Alex", b: 23 };
// // p('https://jsonplaceholder.typicode.com/users', obj).then(r => console.dir(r));

// const url = 'https://jsonplaceholder.typicode.com/users';

// function getData(questUrl, body) {
//     return fetch(questUrl, {
//         method: "POST",
//         body: JSON.stringify(body),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//         .then(data => {
//             if (data.status >= 400) {
//                 return data.json().then(e => {
//                     let error = new Error('Bad error!');
//                     error.data = e;
//                     throw error;
//                 })
//             } else {
//                 return data.json();
//             }
//         })
// }

// getData(url, obj).then(r => console.log(r));


const url = 'https://jsonplaceholder.typicode.com/users';

// function quest(method, URL, body = null) {

//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, URL);
//         xhr.responseType = "json";
//         xhr.setRequestHeader("Content-Type", "application/json")
//         xhr.onload = () => {if(xhr.status >= 400) {reject(xhr.response);} else {resolve(xhr.response);}}
//         xhr.onerror = () => {return reject(xhr.response)}
//         xhr.send(JSON.stringify(body));})}

// quest("POST", url, obj).then(r => console.log(r));


function quest(method, URL, body = null) {

    return fetch(URL, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(resp => {
        if (resp.status >= 400) {
            return resp.json().then(e => {
                const error = new Error("Error mistake");
                error.data = e;
                throw error;
            })
        } else {
            return resp.json()
        }
    })

}
quest("POST", url, obj).then(r => console.log(r));
