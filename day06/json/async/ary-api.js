// join() : array -> string
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join();
console.log(result);

// split() : string -> array
const frt = '🍅, 🍌, 🍒, 🍇';
const res = frt.split(',');
console.log(res);

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 20, false, 60),
    new Student('C', 32, true, 78),
    new Student('D', 18, false, 90),
    new Student('E', 45, true, 15),
];
{
    // find() : 조건을 만족하는 가장 처음의 요소를 반환
    console.clear();
    const res2 = students.find(function(student, index) {
        // console.log(student, index);
        return student.score === 90;
    });
    console.log(res2);
}
{
    // filter() : 조건을 만족하는 모든 요소를 배열로 반환
    console.clear();
    const res3 = students.filter((student) => student.enrolled);
    console.log(res3);
}
{
    // map() : 배열 내의 모든 요소에 대해 콜백 함수를 호출한 결과를 새로운 배열로 반환
    console.clear();
    // const res4 = students.map((student) => student);
    // const res4 = students.map((student) => student.score);
    const res4 = students.map((student) => student.score*2);
    console.log(res4);
}