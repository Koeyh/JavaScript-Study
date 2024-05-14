// class는 template이다.  -> 구조만 제공할 뿐 내용물인 데이터가 없다.
// object는 class에 데이터를 전달하면 객체가 된다.


/*
// Person 클래스 생성
class Person {
    // Java처럼 클래스와 같은 이름의 메서드를 만들지 않고 constructor 키워드를 사용한다
    constructor(name, age) { // 생성자 'constructor'키워드
        this.name = name;
        this.age = age;
    }
    speak() {               // 일반 메서드
        console.log(`${this.name}: hello!`);
    }
}

// 객체 생성
// 객체에 접근하는 형태는 Java와 동일함
const adam = new Person('adam', 40);
console.log(adam);
console.log("adam.name : "+ adam.name);
console.log("adam.age : " + adam.age);
adam.speak();
*/


// Getter & Setter

/*
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        // age가 0보다 작을 때 0으로 변환
        // 클래스 기존 속성명과 다르게 지정해야한다.
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Hong', 'Gildong', -1);
console.log(user1.age);
*/

//생성자 없이 필드 작성 시 public 속성이 되고, "#"을 앞에 붙이면 private 속성이 된다.
/*
class Exper {
    publicField = 2;
    #privateField = 0;
}
const exper = new Exper();
console.log(exper.publicField);
console.log(exper.privateField);
*/


// static
// static을 붙이면 클래스 멤버가 된다. -> 클래스 이름으로 접근해야 함
// 각 객체마다 생성되지 않고, 공통으로 사용되는 데이터나 메서드에 사용
/*
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
// article1.printPublisher();
console.log(Article.publisher);
*/

// 상속(Inheritance)
// Java와 동일하게 extends 키워드 사용
class Shape {
    constructor (width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing color of ${this.color}`);
    }
    getArea() {
        return this.width * this.height;
    }
}
class Rectangle extends Shape {}
const rec = new Rectangle(20, 10, 'blue');
rec.draw();

class Triangle extends Shape {
    // 오버라이딩(재정의) 사용
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const tri = new Triangle(30, 10, 'red');
tri.draw();
console.log("tri의 넓이 : " + tri.getArea());

// instancef : 좌측의 객체가 우측의 클래스의 객체인지 확인하는 키워드
// 모든 객체는 최상위 Object 클래스를 상속받는다.
console.log(tri instanceof Rectangle);
console.log(tri instanceof Triangle);
console.log(tri instanceof Shape);  // 상속 관계이므로 true 출력
console.log(tri instanceof Object); // 최상위 클래스인 Object를 상속받기때문에 true 출력

class Counter {
    constructor() {
        this.count = 0;
    }
    increase() {
        this.count++;
        console.log(this.count);
    }
}
const colCounter = new Counter();
colCounter.increase();
colCounter.increase();
colCounter.increase();
