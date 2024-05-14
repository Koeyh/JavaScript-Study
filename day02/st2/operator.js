// // 일치 연산자
// let num = 10;
// let str = '10';
// if(num == str) console.log('같다');
// if(num === str) console.log('같다');
// else console.log('다르다');

// console.log(0 == false);            // 동등 연산자
// console.log(0 === false);           // 일치 연산자
// console.log('' == false);
// console.log('' === false);
// console.log(null == undefined);
// console.log(null === undefined);


// // 제어문
// // 선택
// const name = '';
// if(name === 'adam') {
//     console.log("Welcome Adam !");
// } else if (name === 'scott') {
//     console.log("Welcom Scott !");
// } else {
//     console.log("Unknown User");
// }

// console.log(name === 'smith' ? 'yes' : 'no');

// const browser = 'IE';
// switch (browser) {
//     case 'IE':
//         console.log('Microsoft');
//         break;
//     case 'FireFox':
//         console.log("mozilla");
//         break;
//     case 'Chrome':
//         console.log("Google");
//         break;
//     default:
//         console.log('unknown');
//         break;
// }

// // 입력한 숫자가 3의 배수인지 확인하는 프로그램
// let x = prompt("숫자를 입력하세요");
// if(x === null) {
//     if(x % 3 === 0) {
//         alert("3의 배수입니다."); }else {
//         alert("3의 배수가 아닙니다.");
//     }
// }
// alert("다시 입력하세요.");



// let session = prompt("관심 세션을 선택해 주세요. | 1. 마케팅 | 2. 개발 | 3. 디자인");

// switch(session) {
//     case '1':
//         document.write("<p>마케팅 세션은 <strong>201호</strong>에서 진행됩니다.</p>");
//         break;
//     case '2':
//         document.write("<p>개발 세션은 <strong>203호</strong>에서 진행됩니다.</p>");
//         break;
//     case '3':
//         document.write("<p>디자인 세션은 <strong>205호</strong>에서 진행됩니다.</p>");
//         break;
//     default:
//         document.write("<p>잘못된 입력입니다.</p>");
// }


/* 반복문 */
// // for문
// for (let i=1; i<=1000; i++) {
//     document.write(`for: ${i}<br>`);
// }

// let sum=0;
// for (let i=1; i<=100; i++) {
//     sum += i;
// }
// document.write(sum);


// let ary = [1, 2, 3, 4, 5];
// for(let i of ary) {
//     console.log(i);
// }

// let i=3;
// while(i > 0) {
//     console.log(`while: ${i}`);
//     i--;
// }

/* 
    1. 입력된 구구단 출력
    2. 1단부터 9단까지 출력
    3. 0부터 100까지 4의 배수 출력(continue 사용)
    4. 입력된 숫자만큼 카운터
*/

// // 1
// let num = prompt("정수를 입력하세요.");
// for(let i=1; i<10; i++ ) {
//     document.write(`${i} * ${num} = ${i*num}<br>`);
// }

// 2
// for(let i=1; i<10; i++){
//     document.write(`${i}단<br>`);
//     for(let j=1; j<10; j++){
//         document.write(`${i} * ${j} = ${i*j}<br>`);
//     }
//     document.write(`<br>`);
// }


// 3
for(let num=0; num<=100; num++){
    if(num % 4 != 0) {
        continue;
    }
    document.write(`${num}<br>`);

}