// 1. boolean to JSON
let json = JSON.stringify(true);
console.log(json);

// --------------------------------------------------------------------------------------------------------------------------------------

// 2. array to JSON
json = JSON.stringify(['apple', 'banana']);
console.log(json);

// 객체는 소괄호 속의 중괄호({})로 묶어서 표현, 배열은 소괄호 속의 대괄호([])로 묶어서 표현
[1, true, 'sring', {inkey : "value"}, null]
// 숫자
{key : 1}
// 문자열
{key : "string"}
// Ojbect
{key : {inkey : "value"}}
// null
{key : null}

// --------------------------------------------------------------------------------------------------------------------------------------

// 3. Object to JSON -> stringfy()
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jum !`);
    }
};
json = JSON.stringify(rabbit);
// rabbit 오브젝트를 json 형식으로 변환하고 조회했을 때 jump() 함수는 변환이 되지 않음.
// 함수는 데이터를 가공하기 위한 형식, 데이터가 아니므로 전달 안됨
console.log(json);

// 원하는 프롬퍼티만 선택하여 조회
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

// 콜백 함수 사용
json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
})

// JSON to Object 변환 -> parse()ㅣ 
// Object -> JSON -> Object 과정을 거치면 기존 Object 프롬퍼티의 자료형은 모두 string으로 변경되어있다.
console.clear();
const obj = JSON.parse(json);
console.log(obj);

console.log(rabbit.birthDate);  // Date 타입
console.log(obj.birthDate); // String type

const obj1 = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // return value;
    return key === 'birthDate' ? new Date(value) : value;
})
console.clear();
console.log(typeof(obj1.birthDate));
console.log(obj1.birthDate);
// parse()를 통해 Date 타입에서 String 타입으로 변경되었기 때문에 getDate() 함수를 사용할 수 없다.
// return key === 'birthDate' ? new Date(value) : value; 삼항 연산자를 통해 해결
console.log(obj1.birthDate.getDate());
// 콜백 함수를 이용하여 원래 오브젝트의 데이터 타입으로 돌려줄 수 있다.
