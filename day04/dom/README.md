## HTML에서 JS 파일 연동

#### DOM (Document Object Model)
    - JS를 HTML에 적용하기 위해서 HTML의 요소를 문서객체(DO)형태로 이해하는 것

##### DOM API
    - Document : <html> dom 트리의 루트노드 / 문서 전체
    - Element : 각 태그
    - attribute : 속성
    - style : css
    - collection : 배열

##### HTMLCollection
    - JS가 문서 객체에 접근하여 받아오는 반환(return) 타입
    - HTML 문서 전체에 적용 : document.getElementByTagName(name);
    - 특정 요소 내 적용 : document.getElementByTagName(name);
    - 반환 값은 태그 이름에 해당하는 모든 요소를 HTMLCollection 객체로 변환

###### HTMLCollection 객체를 반환하는 메서드(DOM 요소에 접근) 
    - getElementByTagName('name') : 태그 이름과 일치한 요소를 찾아 HTMLCollection 객체로 반환
        - 태그 요소들 반환
    - getElementByClassName('name')  : class 이름과 일치한 요소를 찾아 ...
        - 클래스 요소들 반환
    - getElementById('id')  : 
        - id 요소 반환 / _중복 절대 불가_
    - querySelector() : CSS 선택자와 일치하는 첫번째 요소의 객체를 반환 / null
    - querySelectorAll() : CSS 선택자와 일치하는 모든 요소 객체를 반환