console.log("Hello Javascript (variable.js 출력)!!");
console.log("This is Javascript File");

// let name = 'adam';
// console.log(name);

// 가능
// var age;
// console.log(age);
// age=5;

// 불가능
// name = 4;
// let name;

// // 전역변수 : 키워드 없이 사용하면 전역변수
// n = 10;
// console.log(n);

// let n1 = 100;
// console.log("let n1 값 : " + n1);

// {
//     let name = 'scott';     // name : 지역변수
//     console.log("name = " + name);
//     name = 'adam';
//     console.log("name = " + name);
//     console.log(n + ", " + n1);         // 스코프 내에서도 전역변수 n, n1은 출력 가능
// }

// console.log(name); // 스코프 내에서 선언된 지역변수 name은 출력 불가

/* 변수 
 1. 변수 선언 (선언에 사용되는 3가지 키워드)
    1) var : 동일 변수명 재선언 가능, 전역변수 외에는 잘 사용하지 않는다.
    2) let : 지역변수, 재선언 불가, 호이스팅(Hoisting) 시 초기화 안됨
    3) const : 상수,
    - ES6 이전에는 var로 선언, 이후에는 let과 const가 등장
    * Hoisting : 코드 실행 전에 변수 및 함수 선언부가 메모리에 등록되는 것 / 변수 선언이 되지 않았음에도 변수 사용이 가능한 것
*/

// /* 변수(var 변수) 호이스팅 */
// var a;
// console.log("a의 값은 " + a);

// // 변수 선언이 변수 호출보다 뒤에 있지만 정상 작동됨.
// // var 타입은 호이스팅이 실행되면서 초기화가 함께 진행되기 때문에 에러가 발생하지 않는다.
// console.log("b의 값은 " + b);
// var b;

// /* let 키워드는 호이스팅은 가능하지만 초기화가 되지 않아서 에러 발생
// console.log("c의 값은 " + c);
// let c;
// */

// let d;
// console.log("d의 값은 " + d);

// console.log(x === undefined);   // "===" 값과 타입까지 비교
// var x = 3;

// var myvar = "my value";
// console.log(myvar);

// // Javascript의 함수
// // function funcName() {} 형식으로 선언
// (
//     // 함수 호출 코드가 없지만 해당 함수가 실행되는것을 확인할 수 있다.
//     function () {
//         var myvar = "local value";   
//         console.log(myvar);
//         console.log(100);
//     }
// )();

// // 함수 호이스팅으로 인해 실행이 가능하다.
// sayHello();
// function sayHello() {
//    console.log("Hello !");
// }
// // sayHello();

// // 동적 타입이라 실행 가능한 코드
// let name = 'scott';
// console.log(name);
// name = 1200;
// console.log(name);
// name = '홍길동';
// const message = `My name is ${name}`;
// console.log(message);

// // number, string, boolean, null, undefined, symbol(ES6), obj
// // typeof()를 이용하여 해당 변수의 타입 확인
// console.log(typeof(100));

// // 실수(float, double), 정수(int) 모두 number라는 자료형으로 통일되는 것을 확인할 수 있다.
// // number : -2^53 ~ 2^53 까지의 범위
// let pi = 3.14;
// console.log(typeof(pi));

// let nothing = null;
// console.log(`value: ${nothing}, type: ${typeof(nothing)}`);

// let x;
// console.log(`value: ${x}, type: ${typeof(x)}`);

// // 자료형은 number로 출력되지만 값은 infinity(무한)로 출력된다.
// const infinity = 1/0;
// console.log(typeof(infinity));
// console.log(infinity);

// const nAn = 'not a number' / 2;
// console.log(nAn);

/* String */
const char = 'a';
const smith = 'smith';
// 문자열과 변수를 합침
const greeting = 'Hello ' + smith;

console.log(`value: ${char}, type: ${typeof(char)}`);
console.log(`value: ${smith}, type: ${typeof(smith)}`);
console.log(`value: ${greeting}, type: ${typeof(greeting)}`);

const num = 18;
const msg = 18 + 'old';
console.log(msg);
const i = '나는 ';
const age = 30;
console.log(i + age + '살 입니다.');

/* boolean */
// false: 0, null, undefined, Nan
// true : any other value