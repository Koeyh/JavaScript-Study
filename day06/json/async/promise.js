// state : pending -> fulfilled or rejected
// 대기에서 성공하면 이행, 실패하면 거부

// 1. producer
// promise를 생성하는 순간에 자동으로 실행된다.
// const promise = new Promise(() => {
//     console.log("doing something . .");
// });

// //          Server / Producer 역할
// // promise 생성, 성공 시 resolve 호출
// let promise = new Promise((resolve, reject) => {
//     console.log('doing something . . ');
//     setTimeout(() => {
//         resolve('adam');    // 실행이 정상적으로 완료되면 resolve 호출
//     }, 2000);
// });

//          Client / Consumer 역할
// then() : promise가 성공적으로 실행될 콜백을 등록하는 역할
// promise.then((value) => {   // then() 메서드는 resolve에 전달받은 value를 인자로 받는다.
//     console.log(value);     // resolve에서 넘겨준 'adam'이 출력된다.
// });

/*
let promise = new Promise((resolve, reject) => {
    console.log('dong something . .');
    setTimeout(() => {
        reject(new Error('no network'));
    }, 2000);
});

promise.then((resData) => {    
    console.log(resData);
}) .catch((error) => {      // == then.catch()
    console.log(error);
}) .finally(() => {
    console.log('Run unconditionally !');
})
*/

let fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num - 1);
        }, 1000);
    })
})
.then(num => console.log(num));
