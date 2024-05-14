// function
// 함수 선언(정의), 호출
// func();     // 함수 호출 - 함수가 실행 됨
// fucn() {    // 함수 정의 - 함수 생성
    
// }


// function printHello() {
//     console.log("Hello!");
// }
// printHello();

// function log(message) {
//     console.log(message);
// }
// log();
// log("hi@");
// log(123);

// function showError() {
//     alert('에러 발생, 다시 시도하세요.');
// }
// showError();
// // 함수도 Javascript에서는 객체이다.
// // showError. -> 지원되는 내장 함수들을 볼 수 있다.

// function changeName(obj) {
//     obj.name = 'coder';
// }
// const ellie = {name: 'ellie'};      // ellie 객체 생성
// console.log(ellie);
// changeName(ellie);
// console.log(ellie);

// function showMessage(message, from) {
//     console.log(`${message} by ${from}`);
// }
// showMessage("Hi");


// // arrow method
// const simplePrint = function() {
//     console.log('simplePrint');
// }

// // 함수 전체를 콘솔에 출력
// console.log(simplePrint);
// // 함수 실행 결과를 콘솔에 출력
// console.log(simplePrint());

// const simplePrint1 = () => {console.log('simplePrint');}
// console.log(simplePrint1());
// const simplePrint2 = () => console.log('simplePrint');
// console.log(simplePrint2());

// // 화살표를 기준으로 왼쪽은 입력, 오른쪽은 반환값
// const add = (a, b) => { return a + b;};
// console.log(add(10, 20));

// const hi = () => {alert("안녕하세요");};
// hi();

// document.open();
// let hi1 = (user) => {document.write(user + "님 안녕하세요.");};
// hi1("홍길동");

// // 콜백 함수
// function randomQuiz(answer, printYes, printNo) {
//     if(answer === 'I love you') {
//         printYes();
//     } else printNo();
// }

// const printYes = function() {
//     console.log("Yes");
// }

// const printNo = function() {
//     console.log("No");
// }
// randomQuiz('I love you', printYes, printNo);
// randomQuiz('wrong', printYes, printNo);



/* function calculator(command, a, b) 형식의 함수 만들기
// // command: add, sub, div, mul
// let a, b;

// function add(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function mul(a, b) {
//     return a * b;
// }

// function div(a, b) {
//     return a / b;
// }

// function calculator(command, a, b) {
//     switch (command) {
//         case 'add':
//            return add(a,b );
//         case 'sub':
//             return sub(a, b);
//         case 'mul':
//             return mul(a, b);
//         case 'div':
//             return div(a, b);
//         default:
//             return "Invalid command";
//     }
// }

// let res = calculator('add', 5, 3);
// console.log(res);

let a, b;

const calculator = (function() {
    return function(command, a, b) {
        switch (command) {
            case 'add':
                return a + b;
            case 'sub':
                return a - b;
            case 'mul':
                return a * b;
            case 'div':
                return a / b;
            default:
                // return "Invalid command";
                throw Error('unknown command!');
        }
    };
})();

let res = calculator('add', 5, 3);
// document.open(); // 꼭 open 시켜야 할 필요는 없다.
document.write(res);
// console.log(res);
*/


//  콜백 함수 예제
// 함수를 입력 파라미터로 받을 경우 함수 이름만 전달한다 / doSomething(add()) 가 아닌 doSomething(add);
/*
function doSomething() {
    // console.log(add); // add 함수 자체를 출력하게 됨
    const res=add(2, 3);
    console.log(res);
}
function add(a, b) {
    const sum = a + b;
    return sum;
}

doSomething(add);
*/

// 콜백 함수 예제 2
/*
function add(num1, num2) {
    return num1 + num2;
}
function mul(num1, num2) {
    return num1 * num2;
}
function surprise(callback) {
    let res = callback(3, 4);
    console.log(res);
    res = callback(5,6)
    console.log(res);
}
surprise(mul);
*/

