// async & await
/*
function fetchUser() {
    // 10s.....
    return 'ellie';
}
function fetchUser() {
    return new Promise((resolve, reject) => {
        resolve('ellie');
    })
}

const user = fetchUser();
user.then(console.log);
// console.log(user);

// async
async function fetchUser() {
    return 'ellie';
}
const user1 = fetchUser();
user1.then(console.log);

async function func1() {
    return 1;
}
func1().then(alert);
*/

// await - async 키워드가 있는 함수에서만 사용 가능
// 비동기 작업의 완료를 기다림.
/*
async function func2() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('complete');
        }, 2000);
    })
    let result = await promise; // 결과가 반환될 때까지 다른 명령을 수행하지 않는다.
    alert(result);
}
func2();
*/

// 동기적 처리

function pickFruits() {
    return getApple()       // getApple() 호출 성공 시 getBanana() 호출
    .then(apple => {
        return getBanana()  // getBanana() 호출 성공 시 apple + banana 값 출력
        .then(banana => `${apple} + ${banana}`);
    });
}

// // delay 함수 생성
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    return '🍎'; 
}
async function getBanana() {
    await delay(2000);
    return '🍌';
}
// pickFruits().then(console.log);

/*
async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}
pickFruits().then(console.log);
*/

// 배열로 전달된 promise들이 모두 병렬로 처리된다.
// function pickFruits() {
//     return Promise.all([getApple(), getBanana()]);
//     .then(fruits => pickFruits.join('+'));
// };
pickFruits().then(console.log);
function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);