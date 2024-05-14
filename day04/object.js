/* object = key: 'value' `value는 문자열이다.` */ 

/* 
// 1 function
const name = 'adam';
const age = 4;
print(name, age);
function print (name, age) {
    console.log(name);
    console.log(age);
}

// 2 object
const obj1 = {};
const obj2 = new Object();

const scott = {name: 'scott', age: 20}      // 클래스가 없어도 객체 생성 가능
console.log(scott);
scott.getder = true;
console.log(scott.getder);
delete scott.gender;
// console.log(soctt.gender);

console.log(scott.name);        // 그냥 사용. 프로그램 작성 시
console.log(scott['name']);     // 동적인 경우 사용
function printValue(obj, key) {
    console.log(obj.key);
    console.log(obj[key]);
}
printValue(scott, 'name');
// in
console.log('name' in scott);
console.log('age' in scott);
console.log('random' in scott);

for( key in scott) console.log(key);
// for( key of scott) console.log(key);
const array = [1, 2, 3, 4, 5];
// for문을 통해서 출력하는 두가지 방식
for(value of array) console.log(value);     // array의 값을 출력
for(value in array) console.log(value);     // array의 인덱스를 출력
*/

// cloning
const user = {name: 'ellie', age: 10};
const user2 = user;
console.log(user);
console.log(user2);
user2.name = 'alice';
console.log(user);
console.log(user2);
const user3 = {};
Object.assign(user3, user);     // assign : user객체 내용을 user3에 복제 
console.log(user3);
user2.name = 'adam';
console.log(user);      // user와 user2의 name은 'adam'으로 변경되어있음
console.log(user2);
console.log(user3);     // user3은 'alice' 그대로 유지되어있음

const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'mid'};
const mixed = Object.assign({}, fruit1, fruit2);    // 가장 오른쪽에 있는 객체의 데이터를 복사해온다.
console.log(mixed.color);
console.log(mixed.size);