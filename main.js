// queueMicrotask(() => console.log(2))
// window.queueMicrotask(() => console.log(4))



// setTimeout(function timeout() {
//     console.log('Таймаут');
//     }, 0);
    
//     let p = new Promise(function(resolve, reject) {
//     console.log('Создание промиса');
//     resolve();
//     });
    
//     p.then(function(){
//     console.log('Обработка промиса');
//     });
    
//     console.log('Конец скрипта');

    //'Создание промиса'
    //'Конец скрипта'
    //Обработка промиса'
    //Таймаут



// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

//1
//7
//3
//5
//2
//6
//4


// console.log(1);

// setTimeout(() => console.log(2));

// Promise.reject(3).catch(console.log);

// new Promise(resolve => setTimeout(resolve)).then(() => console.log(4));

// Promise.resolve(5).then(console.log);

// console.log(6);

// setTimeout(() => console.log(7),0);

//1
//6
//3
//5
//2
//4
//7


// const myPromise = (delay) => new Promise((res, rej) => { setTimeout(res, delay) })


// setTimeout(() => console.log('in setTimeout1'), 1000);//22222222222222222


// myPromise(1000).then(res => console.log('in Promise 1'));//3333333333


// setTimeout(() => console.log('in setTimeout2'), 100);//11111111111111


// myPromise(2000).then(res => console.log('in Promise 2')); //5555555


// setTimeout(() => console.log('in setTimeout3'), 2000);//6666666


// myPromise(1000).then(res => console.log('in Promise 3'));//44444444444


// setTimeout(() => console.log('in setTimeout4'), 1000);//55555555


// myPromise(5000).then(res => console.log('in Promise '));//777777777

//in setTimeout2
//'in setTimeout1'
//'in Promise 1'
//'in Promise 3'
//in setTimeout4
//in Promise 2
//in setTimeout3
//'in Promise


