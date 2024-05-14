// HTML 문서 전체에 적용 : documnet.getElementByTagName(name);
// 특정 요소 내 적용 : element.getElementByTagName(name)
// 반환값은 태그 이름에 해당하는 모든 요소를 HTMLCollection 객체로 변환
    // HTMLCollection : HTML 문서에서 특정한 요소들을 모은 "컬렉션", 문서 내의 해당 유형의 요소들이 순서대로 수집된 것
/*
    HTMLCollection 객체를 반환하는 메서드
    1. getElementByTagName()
    2. getElementByClassName()
    3. getElementById()

    querySelector() : CSS 선택자와 일치하는 첫번쨰 요소의 객체를 반환
    querySelectorAll() : CSS 선택자와 일치하는 모든 요소 객체를 반환

*/

// tagName이 li와 동일한 모든 요소를 liElements에 저장
const liElements = document.getElementsByTagName("li");
console.log(liElements);

for(const liElement of liElements) {
    console.log(liElement.textContent);
}

for(let i=0; i < liElements.length; i++) {
    console.log(liElements[i].textContent);
}

// 스프레드 문법으로 배열 객체 생성
const arr = [...liElements];
arr.forEach((li) => {
    console.log(li.textContent);
});