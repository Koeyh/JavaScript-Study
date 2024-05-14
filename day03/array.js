/* 배열 */
// 배열 생성
// const arr1 = new Array();

// const arr2 = [1, 2, 3, 4, 5];
// console.log(arr2);

// const fruits =['🍔, 🧈, 🥙, 🧀, 🍗'];
// console.log(fruits);

// // for
// for(let i=0; i<2; i++) {
//     console.log(fruits[i]);
// }

// // for of
// for(let fruit of fruits) {
//     console.log(fruit);
// }
// // forEach
// fruits.forEach(function (fruit, index, array) {
//     console.log(fruit, index, array);
// });


// // arrow 함수, ()내의 입력을 가지고 {} 내부에 들어갈 함수를 생성
// fruits.forEach((fruit, index) => {
//     console.log(fruit, index);
// })

// fruits.forEach((fruit) => console.log(fruits) )


// // shift, unshift의 사용은 가급적 자제할 것
// let ary = [1, 2, 3, 4, 5];
// console.log(ary.length);
// ary.push(10);
// console.log(ary.length);

// ary.pop();
// console.log(ary.length);
// console.log(ary); 

// ary.unshift(0);
// console.log(ary.length);
// console.log(ary);

// ary.shift();
// console.log("ary 길이 : "+ary.length);
// console.log(ary);



// slice
const fruits = ['🍥', '🍗', '🍵', '🍉'];
console.log("초기값 : " + fruits);
fruits.push('🥕', '🍅');
console.log("push로 요소 추가 : " + fruits);

// fruits.splice(1, 1);
// console.log(fruits);
fruits.splice(4,2); // 1번째 요소부터 2개 지움
console.log("splice(4,2) 결과 : " +fruits);

fruits.splice(1, 1, '🍗'); 
console.log("splice 요소 지정 결과 : " +fruits);

const fruits2 = ['🥦', '🍒', '🍋'];
console.log("fruits2 : " + fruits2);
const newFruits = fruits.concat(fruits2);
console.log("concat 결과 : "  + newFruits);

// searching
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍵'));  // 해당 요소가 들어있는 인덱스 출력
console.log(newFruits.indexOf('🍒'));